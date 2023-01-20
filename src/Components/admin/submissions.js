import React, { Component } from "react"
import { fs } from '../../config/config'

import { ReactComponent as DoneIcon } from '../../images/icons/done.svg'
import { ReactComponent as RemoveIcon } from '../../images/icons/remove.svg'


export class Submissions extends Component {
  initialState = {
    pending: [],
    approved: [],
    uploading: false,
  }

  state = this.initialState

  fetchSubmissions = async () => {
    const pending = []
    const approved = []
    const pendingsFirebase = await fs.collection(`pendings`).get();
    const approvedFirebase = await fs.collection(`approved`).get();

    for (let snap of pendingsFirebase.docs) {
      let data = snap.data();
      data.ID = snap.id;
      pending.push(data)
      if (pending.length === pendingsFirebase.docs.length) {
        this.setState({ pending: pending })
      }
    }
    for (let snap of approvedFirebase.docs) {
      let data = snap.data();
      data.ID = snap.id;
      approved.push(data)
      if (approved.length === approvedFirebase.docs.length) {
        this.setState({ approved: approved })
      }
    }
  }

  commitChanges = () => {
    this.setState({
      uploading: true
    }, async () => {
      console.log('TESTING: Update DB');
      const { pending, approved } = this.state

      const approvedFs = await fs.collection(`approved`).get();
      const pendingFs = await fs.collection(`pendings`).get();

      for (let snap of approvedFs.docs) {
        fs.collection(`approved`).doc(`${snap.id}`).delete().then(console.log(`Deleted ${snap.id}`));
      }
      for (let snap of pendingFs.docs) {
        fs.collection(`pendings`).doc(`${snap.id}`).delete().then(console.log(`Deleted ${snap.id}`));
      }

      approved.forEach(obj => {
        const uploadObj = {
          created: obj.created,
          author: obj.author,
          categoryId: obj.categoryId,
          title: obj.title,
          desc: obj.desc,
          eventDate: obj.eventDate,
          imgUrl: obj.imgUrl,
          brochureUrl: obj.brochureUrl,
          imgCaption: obj.imgCaption,
        }
        fs.collection(`approved`).doc().set(uploadObj).then(() => {
          console.log("Sucessfully uploaded to approved");
        })
      })

      pending.forEach(obj => {
        const uploadObj = {
          created: obj.created,
          author: obj.author,
          categoryId: obj.categoryId,
          title: obj.title,
          desc: obj.desc,
          eventDate: obj.eventDate,
          imgUrl: obj.imgUrl,
          brochureUrl: obj.brochureUrl,
          imgCaption: obj.imgCaption,
        }
        fs.collection(`pendings`).doc().set(uploadObj).then(() => {
          console.log("Sucessfully uploaded to pending");
        })
      })

      this.fetchSubmissions();
      this.setState({
        uploading: false
      })
    })
  }

  approveSubmission = (id) => {
    const { pending, approved } = this.state
    this.setState({
      pending: pending.filter((sub, i) => {
        if (sub.ID === id) {
          this.setState({
            approved: [...approved, sub]
          })
        }
        return sub.ID !== id
      })
    })
  }

  rejectSubmission = (id, type) => {
    const { pending, approved } = this.state
    if (type === 'reject') {
      this.setState({
        pending: pending.filter((sub, i) => {
          return sub.ID !== id
        })
      })

    } else {
      this.setState({
        approved: approved.filter((sub, i) => {
          if (sub.ID === id) {
            this.setState({
              pending: [...pending, sub]
            })
          }
          return sub.ID !== id
        })
      })
    }
  }

  componentDidMount() {
    this.fetchSubmissions();
  }

  render() {
    const { pending, approved, uploading } = this.state
    return (
      <div className="submissions">
        <header className="page-header">
          <h1 className="heading">Submissions</h1>
          <div className="btns-group">
            {uploading ? (
              <button className="btn submit" disabled>
                Saving...
              </button>
            ) : (
              <button className="btn submit" onClick={this.commitChanges}>
                Save changes
              </button>
            )}
          </div>
        </header>
        <div className="container">
          <main className="workspace">
            <div className="submissions-wrapper">
              <div className="submission pending">
                <Submission approve={this.approveSubmission} reject={this.rejectSubmission} type="pending" ls={pending} />
              </div>
              <div className="submission approved">
                <Submission approve={this.approveSubmission} reject={this.rejectSubmission} type="approved" ls={approved} />
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

const Submission = (props) => {
  const { type, ls, approve, reject } = props
  return (
    <>
      <h3 className="sub-summary">{ls.length} {type} submissions</h3>
      {ls.length !== 0 && (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Author</th>
                <th style={{
                  width: '300px',
                }}>Title</th>
                <th style={{ width: '600px' }}>Content</th>
                <th>Date added</th>
                {type === 'pending' ? (<>
                  <th>Reject</th>
                  <th>Approve</th>
                </>) : (
                  <th>Move to pending</th>
                )}
              </tr>
            </thead>
            <tbody>
              {ls.map((sub) => {
                return (<tr key={sub.ID}>
                  <td>{sub.author}</td>
                  <td>{sub.title}</td>
                  <td>{`${sub.desc.slice(0, 150)}...`}</td>
                  <td style={{whiteSpace: 'pre'}}>{sub.created}</td>
                  {type === 'pending' ? (
                    <>
                      <td>
                        <button className="action-btn remove" type="button" onClick={(e) => { reject(sub.ID, 'reject') }}>
                          <RemoveIcon />
                        </button>
                      </td>
                      <td>
                        <button className="action-btn add" type="button" onClick={(e) => { approve(sub.ID) }}>
                          <DoneIcon />
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>
                        <button className="action-btn remove" type="button" onClick={() => { reject(sub.ID, 'remove') }}>
                          <RemoveIcon />
                        </button>
                      </td>
                    </>
                  )}
                </tr>)
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
