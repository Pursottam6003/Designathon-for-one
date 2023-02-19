import React from "react"
import { NavLink } from "react-router-dom"
import { ReactComponent as EmptyLetterBoxSvg } from '../../images/emptyletterbox.svg';
import styles from './NoPreview.module.scss';

const NoPreview = () => (
  <div className={styles.nocontent}>
    <div className={styles.illustration}>
      <EmptyLetterBoxSvg />
    </div>

    <h2>There's nothing to show yet.</h2>
    <p>
      Select an activity category first and fill the form, then use this preview mode to edit the generated text or
    </p>
    <p>Already filled? <NavLink to={'/activity'}>View your submissions</NavLink></p>
  </div>
)

export default NoPreview;