import React, { Component } from "react"
import { Field } from "../form/Field"
import { Drag, Drop, DragAndDrop, reorder } from "../../drag-and-drop"
import "../../scss/dnd.scss"

class DraftForm extends Component {
  handleChange = (e) => {
    const { name, value } = e.target
    this.props.handleChange(name, value)
  }

  render() {
    const { title, vol, iss, month, year } = this.props
    return (
      <form id="draftForm" className="draft-form form-group">
        <input
          type="text"
          name="title"
          className='form-control form-title'
          placeholder="Title of newsletter"
          onChange={this.handleChange}
          value={title}
        />

        <p className='sub-label'>Issue details</p>
        <Field labeltxt="Volume no." showLabel={vol.length}>
          <input type="text"
            className='form-control'
            required
            name="vol"
            value={vol}
            onChange={this.handleChange}
            placeholder="Volume no."
          />
        </Field>

        <Field labeltxt="Issue" showLabel={iss.length}>
          <input type="text"
            className='form-control'
            required
            name="iss"
            value={iss}
            onChange={this.handleChange}
            placeholder="Issue"
          />
        </Field>
        <Field labeltxt="Month" showLabel={month.length}>
          <input type="text"
            className='form-control'
            required
            name="month"
            value={month}
            onChange={this.handleChange}
            placeholder="Month"
          />
        </Field>

        <Field labeltxt="Year" showLabel={year.length}>
          <input type="text"
            className='form-control'
            required
            name="year"
            value={year}
            onChange={this.handleChange}
            placeholder="Year"
          />
        </Field>
      </form>
    )
  }
}

class DndSubmissions extends Component {
  initialState = {
    categories: [
      {
        id: 'q101',
        name: 'Category 1',
        items: [
          { id: 'abc', name: 'First' },
          { id: 'def', name: 'Second' },
        ],
      },
      {
        id: 'wkqx',
        name: 'Category 2',
        items: [
          { id: 'ghi', name: 'Third' },
          { id: 'jkl', name: 'Fourth' },
        ],
      },
    ]
  }

  state = this.initialState

  handleOnDragEnd = (result) => {
    const { type, source, destination } = result;
    const { categories } = this.state

    if (!destination) return;

    const sourceCategoryId = source.droppableId
    const destinationCategoryId = destination.droppableId

    // Reordering items
    if (type === 'droppable-item') {
      // If reordering within the same category
      if (sourceCategoryId === destinationCategoryId) {
        const updatedOrder = reorder(
          categories.find((category) => category.id === sourceCategoryId).items,
          source.index,
          destination.index
        )
        const updatedCategories = categories.map((category) =>
          category.id !== sourceCategoryId ? category : { ...category, items: updatedOrder }
        )

        this.setState({ categories: updatedCategories })
      } else {
        // Dragging to a different category
        const sourceOrder = categories.find((category) => category.id === sourceCategoryId).items
        const destinationOrder = categories.find(
          (category) => category.id === destinationCategoryId
        ).items

        const [removed] = sourceOrder.splice(source.index, 1)
        destinationOrder.splice(destination.index, 0, removed)

        destinationOrder[removed] = sourceOrder[removed]
        delete sourceOrder[removed]

        const updatedCategories = categories.map((category) =>
          category.id === sourceCategoryId
            ? { ...category, items: sourceOrder }
            : category.id === destinationCategoryId
              ? { ...category, items: destinationOrder }
              : category
        )

        this.setState({ categories: updatedCategories })
      }
    }

    // Reordering categories
    if (type === 'droppable-category') {
      const updatedCategories = reorder(categories, source.index, destination.index)

      this.setState({ categories: updatedCategories })
    }
  }

  render() {
    const { categories } = this.state
    return (
      <div className="submissions-dnd">
        <DragAndDrop onDragEnd={this.handleOnDragEnd}>
          <Drop id="droppable" type="droppable-category" droppableDir="horizontal">
            {categories.map((category, categoryIndex) => {
              return (
                <Drag key={category.id} id={category.id} index={categoryIndex}>
                  <div>
                    <h2>{category.name}</h2>

                    <Drop key={category.id} id={category.id} type="droppable-item" droppableDir="vertical">
                      {category.items.map((item, index) => {
                        return (
                          <Drag key={item.id} id={item.id} index={index}>
                            <div>{item.name}</div>
                          </Drag>
                        )
                      })}
                    </Drop>
                  </div>
                </Drag>
              )
            })}
          </Drop>
        </DragAndDrop>
      </div>
    )
  }
}

export class Draft extends Component {
  initialState = {
    title: '',
    vol: '',
    iss: '',
    month: '',
    year: '',
    formView: true
  }
  state = this.initialState

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  switchView = (e) => {
    this.setState({ formView: !this.state.formView })
  }


  render() {
    const { title, vol, iss, month, year, formView } = this.state
    const formProps = { title: title, vol: vol, iss: iss, month: month, year: year }
    return (
      <div className="draft">
        <div className="container">
          <header className="page-header">
            <h1 className="heading">Draft an Issue</h1>
          </header>

          <main className="workspace">
            {formView ? (
              <DraftForm handleChange={this.handleChange} {...formProps} />
            ) : (
              <DndSubmissions />
            )}


            <button onClick={this.switchView} type="button">
              {formView ? 'Next' : 'Previous'}
            </button>
          </main>
        </div>
      </div>
    )
  }
}