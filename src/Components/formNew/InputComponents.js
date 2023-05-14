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
  <div className={styles['form-field']}>
    <label htmlFor={name} 
      data-name={`${placeholder} ${required ? '*' : ''}`} 
      className={cx({ [styles.filled]: value })}>
      <input
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
  </div>
)

const TextareaInput = ({
  name, placeholder, onChange, required = false
}) => (
  <div className={styles['form-field']}>
    <textarea
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  </div>
)

const DateInput = ({
  name, onChange, required = false, value='', type
}) => (
  <div className={styles['form-field']}>
    <input type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
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

const FileInput = ({ name, onChange, required = false, accept = '*' }) => (
  <div className={styles['form-field']}>
    <input type="file"
      name={name}
      onChange={onChange}
      required={required}
      accept={accept}
    />
  </div>
)

export { TextInput, TextareaInput, DateInput, DateRangeInput, FileInput, RadioInput };