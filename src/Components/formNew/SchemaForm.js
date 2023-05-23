import { DateInput, DateRangeInput, FileInput, RadioInput, TextInput, TextareaInput } from "./InputComponents";
import { List } from "../form/List";
import { PersonFC } from "./Person";
import schema from "../../helpers/formSchema";
import styles from './Form.module.scss'
import cx from "classnames";

const SchemaForm = ({ currentCategory, formData, handleInputChange, addPerson, removePerson }) => {
  const fields = schema[currentCategory];

  return (
    fields ? fields.map((field, i) => {
      if (field.type === 'sectionHeading') {
        return <p key={i} className={cx(styles['section-heading'], 'sub-label')}>{field.label}</p>
      } else if (field.type === 'text' || field.type === 'number') {
        return (
          <TextInput
            key={i}
            {...field}
            value={formData[field.name]}
            onChange={handleInputChange}
          />
        )
      } else if (field.type === 'date' || field.type === 'month') {
        return (
          <DateInput key={i} {...field} onChange={handleInputChange} value={formData[field.name]} />
        )
      } else if (field.type === 'dateRange') {
        const { from, to } = field;
        return (
          <DateRangeInput key={i} {...field} 
            fromValue={formData[from.name]} 
            toValue={formData[to.name]} 
            onChange={handleInputChange} 
          />
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
          <PersonFC key={i} personType={field.personType}
            first={formData[field.itemType] ? formData[field.itemType].length === 0 : 1}
            handleSubmit={addPerson}
          />
        )
      } else if (field.type === 'radio') {
        return <RadioInput key={i} {...field} onChange={handleInputChange} />
      } else if (field.type === 'file') {
        return <FileInput key={i} {...field} onChange={handleInputChange} />
      } else if (field.type === 'textarea') {
        return <TextareaInput
          key={i}
          {...field}
          value={formData[field.name]}
          onChange={handleInputChange}
        />
      }
      else return <div key={i}>TODO: {field.type}</div>
    }) : <p>Invalid category</p>
  )
}

export default SchemaForm;