import React, { useState, useEffect } from "react";
import { where, orderBy } from "firebase/firestore";
import { ReactComponent as SpinnerIcon } from '../images/icons/spinner.svg';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useFetchCollection } from "../hooks/hooks";
import styles from './styles/Activity.module.scss';

export const Activity = ({ uid }) => {
  const [lastUpdated, setLastUpdated] = useState(null);

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

        {lastUpdated && (
          <div className={styles["last-updated"]}>
            <p>Last updated: {lastUpdated}</p>
            <button onClick={refresh} className="btn">
              Refresh
            </button>
          </div>
        )}
        {fetchingApproved && fetchingPending ? <SpinnerIcon />
          : Object.keys(pending).length || Object.keys(approved).length ? (
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
          ) : <p>No activity yet</p>}
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