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
        if (person["lastName"] && person["firstInitials"]) { return true; }
      } else if ((person["type"] === "PI") || (person["type"] === "CoPI")) {
        if (person["name"] && person["designation"] && person["department"]) {
          return true;
        }
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
    const { personType, multiple } = this.props
    if (personType === "author") {
      return (
        // lastname and firstInitials
        <div className='person-form'>
          <Field labeltxt="Last name" showLabel={this.state.lastName.length}>
            <input
              type="text"
              placeholder='Last name'
              required
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </Field>

          <Field labeltxt="First initials (second initials)" showLabel={this.state.firstInitials.length}>
            <input
              type="text"
              placeholder='First initials (second initials)'
              required
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
              name="investigatorType"
              required
              defaultValue={"PI"}
              onChange={this.handleChange}
              value={this.state.investigatorType}
            >
              <option value="PI">PI</option>
              {multiple === "1" && (
                <option value="CoPI">CoPI</option>
              )}
            </select>
          </Field>

          <Field labeltxt="Name" showLabel={this.state.name.length}>
            <input
              type="text"
              placeholder='Name'
              required
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Field>

          <Field labeltxt="Designation" showLabel={this.state.designation.length}>
            <input
              type="text"
              placeholder='Designation'
              required
              name="designation"
              value={this.state.designation}
              onChange={this.handleChange}
            />
          </Field>

          <Field labeltxt="Department" showLabel={this.state.department.length}>
            <input
              type="text"
              placeholder='Department'
              required
              name="department"
              value={this.state.department}
              onChange={this.handleChange}
            />
          </Field>

          {this.state.investigatorType === "CoPI" && (
            <Field labeltxt="Institute name (if from outside NITAP)" showLabel={this.state.insName.length}>
              <input
                type="text"
                placeholder='Institute name (if from outside NITAP)'
                required
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
