import React, { Component } from "react"
import { fs, db } from '../../config/config'
import { PreviewedInput } from '../MdInput'

import { ReactComponent as SpinnerIcon } from '../../images/icons/spinner.svg'

import { ReactComponent as DoneIcon } from '../../images/icons/done.svg'
import { ReactComponent as RemoveIcon } from '../../images/icons/remove.svg'

import { getDocs, query, collection, where, orderBy } from 'firebase/firestore'

export class Submissions extends Component {
  initialState = {
    pending: {},
    approved: {},
    unsaved: [],
    uploading: false,
    unsavedChanges: false,
  }

  state = this.initialState

  fetchSubs = () => {
    const qa = query(collection(db, 'approved'), orderBy('createdInSeconds', 'desc'))
    const qp = query(collection(db, 'pendings'), orderBy('createdInSeconds', 'desc'))

    getDocs(qa).then(snapshot => {
      const ls = {}
      snapshot.forEach(doc => {
        ls[doc.id] = { ...doc.data(), id: doc.id }
        // ls.push({ ...doc.data(), id: doc.id })
      })
      this.setState({ approved: ls });
    }).catch(err => { console.log(err) });

    getDocs(qp).then(snapshot => {
      const ls = {}
      snapshot.forEach(doc => {
        ls[doc.id] = { ...doc.data(), id: doc.id }
        // ls.push({ ...doc.data(), id: doc.id })
      })
      this.setState({ pending: ls });
    }).catch(err => { console.log(err) })
  }

  // fetchSubmissions = async () => {
  //   const pending = []
  //   const approved = []
  //   const pendingsFirebase = await fs.collection(`pendings`).get();
  //   const approvedFirebase = await fs.collection(`approved`).get();

  //   for (let snap of pendingsFirebase.docs) {
  //     let data = snap.data();
  //     data.ID = snap.id;
  //     pending.push(data)
  //     if (pending.length === pendingsFirebase.docs.length) {
  //       this.setState({ pending: pending })
  //     }
  //   }
  //   for (let snap of approvedFirebase.docs) {
  //     let data = snap.data();
  //     data.ID = snap.id;
  //     approved.push(data)
  //     if (approved.length === approvedFirebase.docs.length) {
  //       this.setState({ approved: approved })
  //     }
  //   }
  // }

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
          createdInSeconds: obj.createdInSeconds,
          author: obj.author,
          uid: obj.uid,
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
          createdInSeconds: obj.createdInSeconds,
          author: obj.author,
          uid: obj.uid,
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

      this.fetchSubs();
      this.setState({
        uploading: false,
        unsavedChanges: false
      })
    })
  }

  saveChanges = () => {

  }

  approveSubmission = (id) => {
    const { pending, approved, unsaved } = this.state
    this.setState({
      pending: pending.filter((sub, i) => {
        if (sub.id === id) {
          this.setState({
            approved: [sub, ...approved],
            unsaved: !unsaved.includes(sub.id) ? [...unsaved, sub.id] : unsaved
          })
        }
        return sub.id !== id
      })
    }, () => { this.setUnsaved() })
  }

  rejectSubmission = (id, type) => {
    const { pending, approved } = this.state
    if (type === 'reject') {
      this.setState({
        pending: pending.filter((sub, i) => {
          return sub.id !== id
        })
      }, () => { this.setUnsaved() })

    } else {
      this.setState({
        approved: approved.filter((sub, i) => {
          if (sub.id === id) {
            this.setState({
              pending: [sub, ...pending]
            })
          }
          return sub.id !== id
        })
      }, () => { this.setUnsaved() })
    }
  }

  updateSubmission = (type, field, index, val) => {
    const updatedls = this.state[type];
    updatedls[index][field] = val;
    this.setState({
      [type]: updatedls
    }, () => { this.setUnsaved() });
  }

  setUnsaved = () => {
    if (!this.state.unsavedChanges) {
      this.setState({ unsavedChanges: true })
    }
  }


  componentDidMount() {
    this.fetchSubs();
  }

  render() {
    const { pending, approved, uploading, unsavedChanges } = this.state
    return (
      <div className="submissions">
        <header className="page-header">
          <h1 className="heading">Submissions</h1>
          <div className="btns-group">
            {uploading ? (
              <button className="btn submit" disabled>
                <SpinnerIcon />
              </button>
            ) : (
              unsavedChanges ? (
                <button className="btn submit" onClick={this.commitChanges}>
                  Save changes
                </button>
              ) : (
                <span style={{
                  border: 'solid 2px seagreen',
                  fontSize: '0.8rem',
                  color: 'seagreen',
                  fontWeight: '500',
                  padding: '0.3rem 0.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderRadius: '2rem',
                  flexWrap: 'nowrap',
                  overflow: 'hidden',
                  whiteSpace: 'pre'
                }}>
                  <DoneIcon fill="seagreen" width={16} height={16} />
                  Saved to firebase
                </span>
              )
            )}
          </div>
        </header>
        <main className="workspace">
          <div className="submissions-wrapper">
            <div className="submission pending">
              <Submission approve={this.approveSubmission} reject={this.rejectSubmission} update={this.updateSubmission} type="pending" ls={pending} />
            </div>
            <div className="submission approved">
              <Submission approve={this.approveSubmission} reject={this.rejectSubmission} update={this.updateSubmission} type="approved" ls={approved} />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

const Submission = ({ type, ls, approve, reject, update }) => {
  return (
    <>
      <h3 className="sub-summary container">{Object.keys(ls).length} {type} submissions</h3>
      {Object.keys(ls).length !== 0 && (
        <div className="table-wrapper container">
          <table>
            <thead>
              <tr>
                <th style={{ minWidth: '120px' }}>Author</th>
                <th style={{ minWidth: '160px' }}>Title</th>
                <th style={{ minWidth: '400px' }}>Content</th>
                <th style={{ minWidth: '120px' }}>Date added</th>
                {type === 'pending' ? (<>
                  <th>Reject</th>
                  <th>Approve</th>
                </>) : (
                  <th style={{ minWidth: '64px', whiteSpace: 'pre' }}>Move to pending</th>
                )}
              </tr>
            </thead>
            <tbody>
              {Object.keys(ls).map(id => {
                const { author, title, desc, imgUrl, created } = ls[id]
                return (<tr key={id}>
                  <td>{author}</td>
                  <td>
                    <PreviewedInput value={title}
                    updateVal={(txt) => { update(type, 'title', id, txt) }} 
                    />
                  </td>
                  <td>
                    <PreviewedInput value={desc}
                    updateVal={(txt) => { update(type, 'desc', id, txt) }}
                    />
                    {imgUrl.length > 0 && (
                      <div style={{
                        margin: '1rem 0 0',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: '1rem'
                      }}>
                        {imgUrl.map(url => (
                          <div style={{ maxWidth: '450px', }}>
                            <img style={{ width: '100%', height: 'auto' }} key={url} src={url} alt="" />
                          </div>
                        ))}
                      </div>
                    )}
                  </td>
                  <td>{created}</td>
                  {type === 'pending' ? (<>
                    <td>
                      <button className="action-btn remove" type="button"
                      onClick={(e) => { reject(id, 'reject') }}
                      >
                        <RemoveIcon />
                      </button>
                    </td>
                    <td>
                      <button className="action-btn add" type="button"
                      onClick={(e) => { approve(id) }}
                      >
                        <DoneIcon />
                      </button>
                    </td>
                  </>) : (
                    <td>
                      <button className="action-btn remove" type="button"
                      onClick={(e) => { reject(id, 'remove') }}
                      >
                        <RemoveIcon />
                      </button>
                    </td>
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
