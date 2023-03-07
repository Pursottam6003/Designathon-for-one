import React from 'react';
import styles from './styles/NotFound.module.scss';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={cx(styles['not-found'], 'container')}>
      <header className='page-header'>
        <h1 className='heading'>404 - Not found</h1>
      </header>

      <section>
        <p>We couldn't find the page you were looking for. This is either because:</p>
        <ul>
          <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
          <li>The page you are looking for has been moved or deleted.</li>
        </ul>
        <p>You can return to our homepage by <NavLink to='/'>clicking here</NavLink></p>
      </section>
    </div>
  )
}

export default NotFound;