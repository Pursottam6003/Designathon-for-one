import React, { Component } from "react"
import { Field } from './Field'

export class Person extends Component {
  initialState = {
    name: '',
    lastName: '',
    firstInitials: '',
    designation: '',
    department: '',
    insName: '',
    investigatorType: 'PI'
  }

  state = this.initialState

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  addPerson = () => {
    const validPerson = (person) => {
      if (person["type"] === "author") {
        return person["lastName"] && person["firstInitials"]
      } else if ((person["type"] === "PI") || (person["type"] === "CoPI")) {
        return person["name"] && person["designation"] && person["department"]
      }
      return false;
    }

    if (this.props.personType === "author") {
      const newPerson = {
        type: "author",
        lastName: this.state.lastName,
        firstInitials: this.state.firstInitials
      }
      if (validPerson(newPerson)) {
        this.props.handleSubmit(newPerson);
        this.setState(this.initialState)
      }
    } else {
      const newPerson = {
        type: this.state.investigatorType,
        name: this.state.name,
        designation: this.state.designation,
        department: this.state.department,
        insName: this.state.insName
      }
      if (validPerson(newPerson)) {
        this.props.handleSubmit(newPerson);
        this.setState(this.initialState)
      }
    }
  }

  render() {
    const { personType, first } = this.props

    if (personType === "author") {
      return (
        <div className='person-form'>
          <Field cls="short-field" labeltxt="Last name" showLabel={this.state.lastName.length}>
            <input
              className="short-field"
              type="text"
              placeholder='Last name'
              required={first}
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </Field>

          <Field cls="short-field" labeltxt="First initials (second initials)" showLabel={this.state.firstInitials.length}>
            <input
              className="short-field"
              type="text"
              placeholder='First initials (second initials)'
              required={first}
              name="firstInitials"
              value={this.state.firstInitials}
              onChange={this.handleChange}
            />
          </Field>

          <Field labeltxt="" showLabel={0}>
            <input
              type="button"
              value="+"
              className='list-add'
              onClick={this.addPerson}
            />
          </Field>
        </div>
      )
    } else {
      return (
        <div className='person-form'>
          <Field labeltxt="Select PI or CoPI" showLabel={0}>
            <select
              type="text"
              required={first}
              name="investigatorType"
              onChange={this.handleChange}
              value={this.state.investigatorType}
            >
              <option value="PI">PI</option>
              {!first && <option value="CoPI">CoPI</option>}
            </select>
          </Field>

          <Field cls="short-field" labeltxt="Name" showLabel={this.state.name.length}>
            <input
              className="short-field"
              type="text"
              placeholder='Name'
              required={first}
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Field>

          <Field cls="short-field" labeltxt="Designation" showLabel={this.state.designation.length}>
            <input
              className="short-field"
              type="text"
              placeholder='Designation'
              required={first}
              name="designation"
              value={this.state.designation}
              onChange={this.handleChange}
            />
          </Field>

          <Field cls="short-field" labeltxt="Department" showLabel={this.state.department.length}>
            <input
              className="short-field"
              type="text"
              placeholder='Department'
              required={first}
              name="department"
              value={this.state.department}
              onChange={this.handleChange}
            />
          </Field>

          {this.state.investigatorType === "CoPI" && (
            <Field labeltxt="Institute name (outside NITAP)" showLabel={this.state.insName.length}>
              <input
                type="text"
                placeholder='Institute name (outside NITAP)'
                required={first}
                name="insName"
                value={this.state.insName}
                onChange={this.handleChange}
              />
            </Field>
          )}

          <Field labeltxt="" showLabel={0}>
            <input
              type="button"
              value="+"
              className='list-add'
              onClick={this.addPerson}
            />
          </Field>
        </div>
      )
    }
  }
}
