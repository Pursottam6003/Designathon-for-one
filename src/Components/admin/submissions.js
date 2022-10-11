import React, { Component } from "react"
import { fs } from '../../config/config'


export class Submissions extends Component {
  initialState = {
    pending: [],
    approved: [],
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

  commitChanges = async () => {
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
              author: 'TODO',
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
              author: 'TODO',
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

  // const allBlogsTokenId=[] // containing all tokens of blogsID

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

  removeBlogFromFirestore = (id) => {
    var done = 0;
    fs.collection('pendings').doc(id).delete().then(() => {
      console.log('Removed Sucessfully');
      done = 1
    })
    if (done === 0) {
      console.log('Unable to remove the element form blog')
    }
  }

  componentDidMount() {
    this.fetchSubmissions();
  }

  render() {
    const { pending, approved } = this.state
    return (
      <div className="submissions">
        <div className="container">
          <header className="page-header">
            <h1 className="heading">Submissions</h1>
          </header>
          <main className="workspace">
            <div className="submissions-wrapper">
              <div className="submission pending">
                <Submission approve={this.approveSubmission} reject={this.rejectSubmission} type="pending" ls={pending} />
              </div>
              <div className="submission approved">
                <Submission approve={this.approveSubmission} reject={this.rejectSubmission} type="approved" ls={approved} />
              </div>
            </div>
            <button onClick={this.commitChanges}>
              Save changes
            </button>
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
        <table>
          <thead>
            {type === 'pending' ? (
              <tr>
                <th>Author</th>
                <th>Title</th>
                <th>Date added</th>
                <th>Reject</th>
                <th>Approve</th>
              </tr>
            ) : (
              <tr>
                <th>Author</th>
                <th>Title</th>
                <th>Date added</th>
                <th>Move to pending</th>
              </tr>
            )}
          </thead>
          <tbody>
            {ls.map((sub) => {
              return (<tr key={sub.ID}>
                <td>{sub.author}</td>
                <td>{sub.title}</td>
                <td>{sub.created}</td>
                {type === 'pending' ? (
                  <>
                    <td>
                      <button type="button" onClick={(e) => { reject(sub.ID, 'reject') }}>
                        Reject
                      </button>
                    </td>
                    <td>
                      <button type="button" onClick={(e) => { approve(sub.ID) }}>
                        Approve
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>
                      <button type="button" onClick={() => { reject(sub.ID, 'remove') }}>
                        Remove
                      </button>
                    </td>
                  </>
                )}
              </tr>)
            })}
          </tbody>
        </table>
      )}
    </>
  )
}
