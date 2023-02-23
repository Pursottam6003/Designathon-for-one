import React from 'react';
import { ReactComponent as ErrorIcon } from '../../images/icons/error.svg';
import { ReactComponent as SuccessIcon } from '../../images/icons/success.svg';
import { ReactComponent as WarningIcon } from '../../images/icons/warning.svg';
import { ReactComponent as InfoIcon } from '../../images/icons/info.svg';
import styles from './AlertComponent.module.scss';
import cx from 'classnames';

const AlertIcon = ({type}) => {
  if (type === 'info') {
    return <InfoIcon />
  } else if (type === 'success') {
    return <SuccessIcon />
  } else if (type === 'warning') {
    return <WarningIcon />
  } else {
    return <ErrorIcon />
  }
}

const AlertComponent = ({msg, type='info'}) => {
  return (
    <div className={styles.alert}>
      {msg && <div className={cx(styles.msg, styles[type])}>
        <div className={styles.icon}>
          <AlertIcon type={type} />
        </div>
        {msg}
      </div>}
    </div>
  )
}

export default AlertComponent;