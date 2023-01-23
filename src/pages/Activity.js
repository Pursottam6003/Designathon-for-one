import React, { Component, useEffect, useState } from "react"
import { db } from '../config/config'
import { getDocs, query, collection, where } from "firebase/firestore";
import { ReactComponent as SpinnerIcon } from '../images/icons/spinner.svg'

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';


export const Activity = ({ user }) => {
  const [pending, setPending] = useState([]);
  const [approved, setApproved] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSubmissions = () => {
    const qa = query(collection(db, "approved"), where("uid", "==", user.uid));
    const qp = query(collection(db, "pendings"), where("uid", "==", user.uid));

    getDocs(qp).then(snapshot => {
      const pendingArr = [];
      snapshot.forEach(doc => {
        pendingArr.push({
          ...doc.data(),
          id: doc.id
        });
      })
      setPending(pendingArr);
    })
      .catch(err => { console.log(err) });

    getDocs(qa).then(snapshot => {
      const approvedArr = [];
      snapshot.forEach(doc => {
        approvedArr.push({
          ...doc.data(),
          id: doc.id
        });
      })
      setApproved(approvedArr);
    })
      .catch(err => { console.log(err) })
      .finally(() => { setLoading(false) });
  }

  useEffect(() => {
    if (user) fetchSubmissions();
  }, [user])

  return (
    <div className="activity-component">
      <div className="container">
        <header className="page-header">
          <h1 className="heading">My Activity</h1>
        </header>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th style={{ minWidth: '120px' }}>Date added</th>
                <th style={{ minWidth: '160px' }}>Title</th>
                <th>Content</th>
              </tr>
            </thead>
            {loading ? <SpinnerIcon /> : (
              <tbody>
                {approved.map(sub => <Submission {...sub} type='Approved' key={sub.id} />)}
                {pending.map(sub => <Submission {...sub} type='Pending' key={sub.id} />)}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  )
}

const Submission = ({ type, created, title, desc, imgUrl }) => (
  <tr>
    <td>{type}</td>
    <td>{created}</td>
    <td>
      <ReactMarkdown children={title} rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
      />
    </td>
    <p>
      <td>
        <p>
          <ReactMarkdown children={desc} rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          />
        </p>
        <div style={{
          maxWidth: '400px', margin: '1rem 0'
        }}>
          {imgUrl.map(url => <img style={{ width: '100%', height: 'auto' }} key={url} src={url} alt="" />)}
        </div>
      </td>
    </p>
  </tr>
)