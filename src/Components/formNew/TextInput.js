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
    <div className={cx(styles['form-field'], 'form-field')}>
        <label htmlFor={name} data-name={placeholder} className={cx(
            { [styles.filled]: value }
        )}>
            <input
                className={'form-control'}
                pattern={pattern}
                title={title}
                type={type}
                required={required}
                name={name}
                id={name}
                value={value}
                {...attrs}
                onChange={(e) => {onChange(e)}}
            />
        </label>
    </div>
)

export default TextInput;