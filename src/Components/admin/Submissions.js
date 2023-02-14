import React, { useEffect, useState } from "react"
import { db } from '../../config/config'
import { PreviewedInput } from '../MdInput'

import { ReactComponent as SpinnerIcon } from '../../images/icons/spinner.svg'

import { ReactComponent as DoneIcon } from '../../images/icons/done.svg'
import { ReactComponent as RemoveIcon } from '../../images/icons/remove.svg'
import { ReactComponent as UndoIcon } from '../../images/icons/undo.svg'

import { where, setDoc, doc, deleteDoc } from 'firebase/firestore'
import { useFetchSubmissions } from "../../hooks/hooks"
import { LoadingPage } from "../Loading"

export const Submissions = () => {
  const [unsaved, setUnsaved] = useState({});
  const [uploading, setUploading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  const {
    docs: pending,
    setDocs: setPending,
    fetching: fetchingPending,
    refetch: refetchPending
  } = useFetchSubmissions('submissions', [where("approved", "==", false)]);

  const {
    docs: approved,
    setDocs: setApproved,
    fetching: fetchingApproved,
    refetch: refetchApproved
  } = useFetchSubmissions('submissions', [where("approved", "==", true)]);

  const approve = (id) => {
    const ls = pending;
    setApproved({ [id]: ls[id], ...approved });
    delete ls[id];
    setPending({ ...ls });

    handleUpdate(id, 'approved', true);
  }

  const moveBack = (id) => {
    const ls = approved;
    setPending({ [id]: ls[id], ...pending });
    delete ls[id];
    setApproved({ ...ls });

    handleUpdate(id, 'approved', false);
  }

  const reject = (id) => {
    if (pending[id]) {
      const ls = pending;
      delete ls[id];
      setPending({ ...ls });
    } else {
      const ls = pending;
      delete ls[id];
      setPending({ ...ls });
    }

    handleUpdate(id, 'delete', true);
  }

  const update = (id, type, field, value) => {
    const ls = type === 'pending' ? pending : approved;
    const setLs = type === 'pending' ? setPending : setApproved;
    ls[id][field] = value;
    setLs({ ...ls });

    handleUpdate(id, field, value);
  }

  const handleUpdate = (id, key, value) => {
    const updates = unsaved;
    if (!updates[id]) {
      updates[id] = { [key]: value };
    } else {
      updates[id][key] = value;
    }
    setUnsaved(updates);
  }

  const saveChanges = (e) => {
    const updateDoc = (id) => {
      const docRef = doc(db, 'submissions', id);
      if (unsaved[id].delete) {
        return deleteDoc(docRef);
      } else {
        return setDoc(docRef, unsaved[id], { merge: true });
      }
    }

    setUploading(true);
    const n = Object.keys(unsaved).length;
    Object.keys(unsaved).forEach((id, i) => {
      updateDoc(id)
        .then(() => {
          delete unsaved[id];
          if (i === n - 1) setUploading(false);
        })
        .catch(err => { console.log(err) });
    })
  }

  const refresh = () => {
    refetchPending();
    refetchApproved();
    setUnsaved({});
  }

  useEffect(() => {
    if (!(fetchingApproved && fetchingPending)) {
      setLastUpdated(new Date().toLocaleString('en-IN', { 
        timeStyle: "medium", 
        dateStyle: "medium",
      }));
    }
  }, [fetchingApproved, fetchingPending])

  return (
    <div className="submissions">
      <header className="page-header">
        <h1 className="heading">Submissions</h1>
        <div className="btns-group">
          {(fetchingApproved && fetchingPending) || uploading ? (
            <button className="btn submit" disabled>
              <SpinnerIcon />
            </button>
          ) : (
            Object.keys(unsaved).length !== 0 ? (
              <button className="btn submit" onClick={() => { saveChanges() }}>
                Save changes
              </button>
            ) : (
              <p>Last updated: {lastUpdated}</p>
            )
          )}
          <button className="btn" onClick={refresh}>
            Refresh
          </button>
        </div>
      </header>
      <main className="workspace">
        {fetchingPending || fetchingApproved ? <LoadingPage /> : (
          <div className="submissions-wrapper">
            <div className="submission pending">
              <Submission type='pending'
                approve={approve} reject={reject} update={update} moveBack={moveBack}
                ls={pending} fetching={fetchingPending}
              />
            </div>
            <div className="submission approved">
              <Submission type='approved'
                approve={approve} reject={reject} update={update} moveBack={moveBack}
                ls={approved} fetching={fetchingApproved}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

const Submission = ({ type, ls, approve, reject, update, moveBack }) => {
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
                {type === 'pending'
                  ? <><th>Reject</th><th>Approve</th></>
                  : <th style={{ minWidth: '150px' }}>Await</th>
                }
              </tr>
            </thead>
            <tbody>
              {Object.keys(ls).map(id => (
                <Sub key={id} {...ls[id]} type={type} approve={approve}
                  reject={reject} update={update} moveBack={moveBack}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}

const Sub = ({ id, author, title, created, desc, type, imgUrl, update, reject, approve, moveBack }) => (
  <tr key={id}>
    <td>{author}</td>
    <td>
      <PreviewedInput value={title}
        updateVal={(txt) => { update(id, type, 'title', txt) }}
      />
    </td>
    <td>
      <PreviewedInput value={desc}
        updateVal={(txt) => { update(id, type, 'desc', txt) }}
      />
      {imgUrl.length !== 0 && (
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
          onClick={(e) => { reject(id) }}
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
        <button className="action-btn" type="button"
          onClick={(e) => { moveBack(id) }}
        >
          <UndoIcon />
        </button>
      </td>
    )}
  </tr>
)