import React, { useEffect, useState } from "react"
import Submission from "../Submission"
import { db, storage } from '../../config/config'
import { arrayRemove } from "firebase/firestore"
import { ReactComponent as SpinnerIcon } from '../../images/icons/spinner.svg'
import { where, orderBy, setDoc, doc, deleteDoc } from 'firebase/firestore'
import { useFetchCollection } from "../../hooks/hooks"
import { LoadingPage } from "../Loading"
import { deleteFileFromStorage } from "../../helpers/helpers"

export const Submissions = () => {
  const [unsaved, setUnsaved] = useState({});
  const [storageDeletes, setStorageDeletes] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  const {
    docs: pending,
    setDocs: setPending,
    fetching: fetchingPending,
    refetch: refetchPending
  } = useFetchCollection('submissions', [
    orderBy('createdInSeconds', 'desc'),
    where("approved", "==", false)
  ]);

  const {
    docs: approved,
    setDocs: setApproved,
    fetching: fetchingApproved,
    refetch: refetchApproved
  } = useFetchCollection('submissions', [
    orderBy('createdInSeconds', 'desc'),
    where("approved", "==", true)
  ]);

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
    const ls = pending;
    let urls = pending[id].imgUrl;
    if (pending[id].brochureUrl) urls.push(pending[id].brochureUrl);
    delete ls[id];
    setPending({ ...ls });

    handleUpdate(id, 'delete', true, urls);
  }

  const update = (id, type, field, value) => {
    const ls = type === 'pending' ? pending : approved;
    const setLs = type === 'pending' ? setPending : setApproved;

    if (field === 'imgUrl') {
      ls[id][field] = ls[id][field].filter(url => url !== value);
      if (ls[id][field].length === 0) update(id, type, 'imgCaption', '');
    } else {
      ls[id][field] = value;
    }

    setLs({ ...ls });

    handleUpdate(id, field, value);
  }

  const handleUpdate = (id, key, value, urls=[]) => {
    if (key === 'imgUrl') {
      setStorageDeletes([...storageDeletes, ...urls, value]);
      value = arrayRemove(value);
    } else {
      setStorageDeletes([...storageDeletes, ...urls]);
    }
    setUnsaved(prevData => ({ ...prevData, [id]: { ...prevData[id], [key]: value } }))
  }

  const saveChanges = () => {
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

    // delete storage files
    storageDeletes.forEach((url, i) => {
      if (!url) return;
      const ref = storage.refFromURL(url);
      deleteFileFromStorage(ref);
      if (i <= storageDeletes.length - 1) {
        setStorageDeletes([]);
      }
    })
  }

  const refresh = () => {
    refetchPending();
    refetchApproved();
    setUnsaved({});
    setStorageDeletes([]);
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
          {(fetchingApproved || fetchingPending) || uploading ? <SpinnerIcon /> : (<>
            <p>Last updated: {lastUpdated}</p>
            {Object.keys(unsaved).length !== 0 && (
              <button className="btn submit" onClick={saveChanges}>
                Save changes
              </button>
            )}
            <button className="btn" onClick={refresh}>
              Refresh
            </button>
          </>)}
        </div>
      </header>
      <main className="workspace">
        {fetchingPending || fetchingApproved ? <LoadingPage /> : (
          <div className="submissions-wrapper">
            <div className="submission pending">
              <SubmissionSection type='pending'
                approve={approve} reject={reject} update={update} moveBack={moveBack}
                ls={pending} fetching={fetchingPending}
              />
            </div>
            <div className="submission approved">
              <SubmissionSection type='approved'
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

const SubmissionSection = ({ type, ls, approve, reject, update, moveBack }) => {
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
                <Submission key={`${id}sub`} {...ls[id]} type={type} approve={approve}
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
