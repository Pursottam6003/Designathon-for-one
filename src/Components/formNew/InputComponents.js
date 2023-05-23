import styles from './Form.module.scss';
import cx from 'classnames';

const TextInput = ({ value = '',
  title = '',
  pattern = '.*',
  onChange,
  name,
  placeholder,
  type = 'text',
  attrs = {},
  required = false
}) => (
  <div className={cx(styles['form-field'], {[styles.filled]: value })}>
    <label htmlFor={name}
      data-name={`${placeholder} ${required ? '*' : ''}`}
      className={cx({ [styles.filled]: value })}>
      <input
        className={styles['form-control']}
        pattern={pattern}
        title={title}
        type={type}
        required={required}
        name={name}
        id={name}
        value={value}
        {...attrs}
        onChange={(e) => { onChange(e) }}
      />
    </label>
    <fieldset aria-hidden="true">
      <legend>
        <span>{`${placeholder} ${required ? '*' : ''}`}</span>
      </legend>
    </fieldset>
  </div>
)

const TextareaInput = ({
  name, placeholder, onChange, required = false, value
}) => (
  <div className={cx(styles['form-field'], styles['textarea-field'])}>
    <label htmlFor={name}
      data-name={`${placeholder} ${required ? '*' : ''}`}
      className={cx({ [styles.filled]: value })}>
      <textarea
        className={styles['form-control']}
        name={name}
        onChange={onChange}
        required={required}
      />
    </label>
    <fieldset aria-hidden="true">
      <legend>
        <span>{`${placeholder} ${required ? '*' : ''}`}</span>
      </legend>
    </fieldset>
  </div>
)

const DateInput = ({
  name, onChange, required = false, value = '', type
}) => (
  <div className={styles['form-field']}>
    <input type={type}
      className={styles['form-control']}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
    <fieldset aria-hidden="true">
      <legend >
      </legend>
    </fieldset>
  </div>
)

const RadioInput = ({
  name, label, onChange, required, radios,
}) => (
  <div className={styles['form-field']}>
    <label htmlFor={name}>{label}</label>
    <div className={styles['radio-group']}>
      {radios.map((radioInp, i) => (
        <div key={i} className={styles['radio-option']}>
          <input className={styles['radio']}
            type="radio"
            value={radioInp.value}
            defaultChecked={i === 0}
            required={required}
            onChange={onChange}
            name={name}
          />
          <label className={styles['radio-label']} htmlFor={radioInp.value}>
            {radioInp.label}
          </label>
        </div>
      ))}
    </div>
  </div>
)

const DateRangeInput = ({ from, to, fromValue, toValue, onChange }) => (
  <div className={styles["date-wrapper"]}>
    <DateInput {...from} value={fromValue} onChange={onChange} />
    <span>to</span>
    <DateInput {...to} value={toValue} onChange={onChange} />
  </div>
)

const FileInput = ({ name, onChange, required = false, accept = '*', attrs }) => (
  <div className={styles['form-field']}>
    <input type="file"
      className={styles['form-control']}
      name={name}
      onChange={onChange}
      required={required}
      accept={accept}
      {...attrs}
    />
    <fieldset aria-hidden="true">
      <legend >
      </legend>
    </fieldset>
  </div>
)

export { TextInput, TextareaInput, DateInput, DateRangeInput, FileInput, RadioInput };