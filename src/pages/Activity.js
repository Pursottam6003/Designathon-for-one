import React from "react"
import { where } from "firebase/firestore";
import { ReactComponent as SpinnerIcon } from '../images/icons/spinner.svg'

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useGetSubmissions } from "../hooks/hooks";


export const Activity = ({ uid }) => {
  const { docs: pending, fetching: fetchingPending } = useGetSubmissions('submissions', [
    where("uid", "==", uid),
    where("approved", "==", false),
  ])

  const { docs: approved, fetching: fetchingApproved } = useGetSubmissions('submissions', [
    where("uid", "==", uid),
    where("approved", "==", true),
  ])

  return (
    <div className="activity-component">
      <div className="container">
        <header className="page-header">
          <h1 className="heading">My Activity</h1>
        </header>
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
                  {Object.keys(approved).map(id => <Submission {...approved[id]} type='Approved' key={id} />)}
                  {Object.keys(pending).map(id => <Submission {...pending[id]} type='Pending' key={id} />)}
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