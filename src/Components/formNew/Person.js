import { useEffect, useState } from "react"
import styles from './Form.module.scss';
import cx from "classnames";
import { TextInput } from "./InputComponents";

export const PersonFC = ({ personType, first=false, handleSubmit }) => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevData => ({ ...prevData, [name]: value }));
  }

  const checkValid = (person) => {
    if (person.type === 'author') {
      return person.lastName && person.firstInitials
    } else if (person.type === 'PI' || person.type === 'CoPI') {
      return person.name && person.designation && person.department
    }
    return false;
  }

  const addPerson = (e) => {
    e.preventDefault();
    if (!checkValid(state)) return;
    setState(prevData => ({ type: prevData.type }));
    handleSubmit(state);
  }

  useEffect(() => {
    if (!personType) return;
    if (personType === 'author') {
      setState(prevData => ({ ...prevData, type: 'author' }))
    } else {
      setState(prevData => ({ ...prevData, type: 'PI' }))
    }
  }, [personType])

  return (
    <div className={styles['person-form']}>
      {personType === 'author' ? (<>
        <TextInput
          name="lastName"
          onChange={handleChange}
          placeholder="Last name"
          required={first}
          value={state.lastName}
        />
        <TextInput
          name="firstInitials"
          onChange={handleChange}
          placeholder="First (second) initials"
          required={first}
          value={state.firstInitials}
        />
        <div className={styles['form-field']}>
          <button type="button" onClick={addPerson}>+</button>
        </div>
      </>) : (<>
        <div className={cx(styles['form-field'], styles['select-field'])}>
          <select
            className={styles['form-control']}
            type="text"
            required={first}
            name="type"
            onChange={handleChange}
            value={state.type}
          >
            <option value="PI">PI</option>
            {!first && <option value="CoPI">CoPI</option>}
          </select>
        </div>
        <TextInput
          name="name"
          onChange={handleChange}
          placeholder="Name"
          required={first}
          value={state.name}
        />
        <TextInput
          name="designation"
          onChange={handleChange}
          placeholder="Designation"
          required={first}
          value={state.designation}
        />
        <TextInput
          name="department"
          onChange={handleChange}
          placeholder="Department"
          required={first}
          value={state.department}
        />
        {state.type === "CoPI" && (
          <TextInput
            name="insName"
            onChange={handleChange}
            placeholder="Institute (if not NITAP)"
            value={state.insName}
          />
        )}
        <div className={styles['form-field']}>
          <button type="button" onClick={addPerson}>+</button>
        </div>
      </>)}
    </div>
  )
}
