import React, { useState, useEffect } from "react";
import { where, orderBy } from "firebase/firestore";
import { reauth } from "../config/config";
import { ReactComponent as SpinnerIcon } from '../images/icons/spinner.svg';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useFetchCollection } from "../hooks/hooks";
import styles from './styles/Activity.module.scss';
import EmailVerification from "../Components/EmailVerification";

export const Activity = ({ displayName, uid }) => {
  const [lastUpdated, setLastUpdated] = useState(null);
  const [emailVerified, setEmailVerified] = useState(false);
  const [user, setUser] = useState(null);

  const { docs: pending, fetching: fetchingPending, refetch: refetchPending } = useFetchCollection('submissions', [
    orderBy('createdInSeconds', 'desc'),
    where("uid", "==", uid),
    where("approved", "==", false),
  ]);

  const { docs: approved, fetching: fetchingApproved, refetch: refetchApproved } = useFetchCollection('submissions', [
    orderBy('createdInSeconds', 'desc'),
    where("uid", "==", uid),
    where("approved", "==", true),
  ]);

  const refresh = () => {
    refetchApproved();
    refetchPending();
  }

  useEffect(() => {
    setEmailVerified(reauth.currentUser.emailVerified);
    setUser(reauth.currentUser);
  }, [])

  useEffect(() => {
    if (!(fetchingApproved && fetchingPending)) {
      setLastUpdated(new Date().toLocaleString('en-IN', {
        timeStyle: "medium",
        dateStyle: "medium"
      }))
    }
  }, [fetchingApproved, fetchingPending])

  return (
    <div className={styles["activity-component"]}>
      <div className="container">
        <header className="page-header">
          <h1 className="heading">My Activity</h1>
        </header>

        {!emailVerified ? (
          <EmailVerification user={user} />
        ) : (<>
          {lastUpdated && (
            <div className={styles["last-updated"]}>
              <p>Last updated: {lastUpdated}</p>
              <button onClick={refresh} className="btn">
                Refresh
              </button>
            </div>
          )}
          {fetchingApproved && fetchingPending ? <SpinnerIcon />
            : Object.keys(pending).length || Object.keys(approved).length ? (<>
              <div className={styles.summary}>
                <h2>
                  Hi{displayName && `, ${displayName.slice(0, displayName.search(' '))}`}!
                  {Object.keys(pending).length > 0 ? ` You have ${Object.keys(pending).length} pending submission${Object.keys(pending).length > 1 ? 's' : ''}`
                    : ` You don't have any pending submissions`}
                </h2>
              </div>
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
                  <tbody>
                    {Object.keys(pending).map(id => <Submission {...pending[id]} type='Pending' key={id} />)}
                    {Object.keys(approved).map(id => <Submission {...approved[id]} type='Approved' key={id} />)}
                  </tbody>
                </table>
              </div>
            </>) : <p>You haven't made any submissions for the current issue yet</p>}
        </>)}
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
    <td>
      <div>
        <ReactMarkdown children={desc} rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
        />
      </div>
      <div style={{
        maxWidth: '400px', margin: '1rem 0'
      }}>
        {imgUrl.map(url => <img style={{ width: '100%', height: 'auto' }} key={url} src={url} alt="" />)}
      </div>
    </td>
  </tr>
)