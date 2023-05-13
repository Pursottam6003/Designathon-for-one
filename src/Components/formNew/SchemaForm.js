import { Field } from "../form/Field";
import TextInput from "./TextInput";
import { List } from "../form/List";
import { Person } from "../form/Person";
import { schema } from "../../helpers";

const SchemaForm = ({ currentCategory, formData, handleInputChange, addPerson, removePerson }) => {
  const fields = schema[currentCategory];

  return (
    fields ? fields.map((field, i) => {
      if (field.type === 'text') {
        return (
          <TextInput
            key={i}
            type="text"
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
            required={field.required}
            placeholder={field.placeholder}
          />
        )
      } else if (field.type === 'sectionHeading') {
        return <p key={i} className='sub-label'>{field.label}</p>
      } else if (field.type === 'date') {
        return (
          <div key={i} className='date-wrapper'>
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                required={field.required}
              />
            </Field>
          </div>
        )
      } else if (field.type === 'month') {
        return (
          <div key={i} className="date-wrapper">
            <Field labeltxt="Date" showLabel={0}>
              <input type="month"
                className='form-control'
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                required={field.required}
              />
            </Field>
          </div>
        )
      } else if (field.type === 'dateRange') {
        const { from, to } = field;
        return (
          <div key={i} className="date-wrapper">
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                name={from.name}
                value={formData[from.name]}
                onChange={handleInputChange}
                required={from.required}
              />
            </Field>
            <span>to</span>
            <Field labeltxt="Date" showLabel={0}>
              <input type="date"
                className='form-control'
                name={to.name}
                value={formData[to.name]}
                onChange={handleInputChange}
                required={to.required}
              />
            </Field>
          </div>
        )
      } else if (field.type === 'list') {
        return (
          <List key={i} items={
            formData[field.itemType.toLowerCase()]
              ? formData[field.itemType.toLowerCase()]
              : []
          } itemType={field.itemType}
            removeItem={removePerson}
          />
        )
      } else if (field.type === 'person') {
        return (
          <Person key={i} personType={field.personType}
            notFirst={
              formData[field.personType.toLowerCase()]
                ? formData[field.personType.toLowerCase()].length
                : false
            } handleSubmit={addPerson}
          />
        )
      } else if (field.type === 'number') {
        return (
          <TextInput
            key={i}
            type="number"
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
            required={field.required}
            placeholder={field.placeholder}
            attrs={field.attrs}
          />
        )
      } else if (field.type === 'radio') {
        return (
          <div key={i} className='form-field'>
            <Field showLabel={1} labeltxt="Journal type">
              <div className='radio-inputs'>
                {field.radios.map((radioInp, i) => (
                  <div key={i} className='radio-btn'>
                    <input type="radio"
                      value={radioInp.value}
                      required={field.required}
                      defaultChecked={i === 0}
                      onChange={handleInputChange}
                      name={field.name}
                    /> {radioInp.label}
                  </div>
                ))}
              </div>
            </Field>
          </div>
        )
      } else if (field.type === 'file') {
        return (
          <div key={i} className='form-field'>
            <input type="file"
              name={field.name}
              className='form-control'
              accept={field.accept}
              required={field.required}
              onChange={handleInputChange}
            />
          </div>
        )
      } else if (field.type === 'textarea') {
        return (
          <textarea
            key={i}
            className='form-control raw-md-desc'
            name={field.name}
            placeholder={field.placeholder}
            onChange={handleInputChange}
            required={field.required}
          />
        )
      }
      else return <div key={i}>TODO: {field.type}</div>
    }) : <p>Invalid category</p>
  )
}

export default SchemaForm;