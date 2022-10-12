import React, { Component } from "react"
import { DragDropContext } from "react-beautiful-dnd"

import { Field } from "../form/Field"
import { DndSubmissions } from "../dnd/dndSubmissions"
import styled from "styled-components"

const Container = styled.div`
  margin: 0.5rem;
  border: 1px solid lightgrey;
  border-radius: 2px;
  display: flex;
`;


// import { fs } from '../../config/config'
// import { Drag, Drop, DragAndDrop, reorder } from "../../drag-and-drop"
// import "../../scss/dnd.scss"
// import { Categories } from "../../helpers"

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

export class Draft extends Component {
  initialState = {
    title: '',
    vol: '',
    iss: '',
    month: '',
    year: '',
    formView: true,
    orders: {
      tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbage' },
        'task-2': { id: 'task-2', content: 'Watch my favorite show' },
        'task-3': { id: 'task-3', content: 'Charge my phone' },
        'task-4': { id: 'task-4', content: 'Cook dinner' },
      },
      columns: {
        'column-1': {
          id: 'column-1',
          title: 'To do',
          taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
          id: 'column-2',
          title: 'In progress',
          taskIds: [],
        },
        'column-3': {
          id: 'column-3',
          title: 'Done',
          taskIds: [],
        },
      },

      columnOrder: ['column-1', 'column-2', 'column-3'],
    }
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


  // render() {
  //   const { title, vol, iss, month, year, formView, orders } = this.state
  //   const formProps = { title: title, vol: vol, iss: iss, month: month, year: year }
  //   return (
  //     <div className="draft">
  //       <div className="container">
  //         <header className="page-header">
  //           <h1 className="heading">Draft an Issue</h1>
  //         </header>

  //         <main className="workspace">
  //           {formView ? (
  //             <DraftForm handleChange={this.handleChange} {...formProps} />
  //           ) : (
  //             {return () {
  //               orders.columnOrder.map(columnId => {
  //                 const column = orders.columns[columnId];
  //                 const tasks = column.taskIds.map(taskId => orders.tasks[taskId]);

  //                 return <DndSubmissions key={column.id} column={column} tasks={tasks} />;
  //               })
  //             }}
  //           )}


  //           <div className="btns-group">
  //             <button className="btn" onClick={this.switchView} type="button">
  //               {formView ? 'Next' : 'Previous'}
  //             </button>

  //             {formView ? (
  //               <button className="btn submit" onClick={() => { console.log('TODO: Publish') }} type="button" disabled>
  //                 Publish
  //               </button>

  //             ) : (
  //               <button className="btn submit" onClick={() => { console.log('TODO: Publish') }} type="button">
  //                 Publish
  //               </button>

  //             )}

  //           </div>
  //         </main>
  //       </div>
  //     </div>
  //   )
  // }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    const { orders } = this.state;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = orders.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newOrders = {
      ...orders,
      columns: {
        ...orders.columns,
        [newColumn.id]: newColumn,
      },
    };

    this.setState({ orders: newOrders });
  }

  render() {
    const { orders } = this.state
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          {orders.columnOrder.map(columnId => {
            const column = orders.columns[columnId];
            const tasks = column.taskIds.map(taskId => orders.tasks[taskId]);

            return <DndSubmissions key={column.id} column={column} tasks={tasks} />;
          })}
        </Container>
      </DragDropContext>
    )
  }
}