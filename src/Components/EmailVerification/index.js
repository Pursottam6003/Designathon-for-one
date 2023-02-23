import React, { useState } from "react";
import AlertComponent from "../AlertComponent";
import { sendEmailVerification } from "firebase/auth";
import { ReactComponent as SpinnerIcon } from '../../images/icons/spinner.svg';
import styles from './EmailVerification.module.scss';

const EmailVerification = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const verifyEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    sendEmailVerification(user).then(() => {
      setLoaded(true);
    }).catch(err => {
      console.error(err);
      setErrorMsg(err.message);
    })
  }

  return (
    <div className={styles.verify}>
      {errorMsg ?
        <AlertComponent
          msg={errorMsg}
          type='error'
        /> : !loaded ?
          <AlertComponent
            msg={'Verify your email to view your form submissions, reset passwords and more'}
            type='info'
          />
          : <AlertComponent msg={`Verification link sent ${user.email}`} type='success' />
      }
      <h4>Instructions</h4>
      <ul>
        <li>An email containing a verification link will be sent to {user ? <strong>{user.email}</strong> : 'your email'} once you click "Verify now".</li>
        <li>Visit the verification link and your email will be verified. Login again to see the changes.</li>
      </ul>

      {(!errorMsg && !loaded) && (
        !loading
          ? <button className="btn submit" onClick={verifyEmail}>Verify now</button>
          : <button className="btn submit" disabled>
            <SpinnerIcon />
          </button>
      )}
    </div>
  )
}

export default EmailVerification;