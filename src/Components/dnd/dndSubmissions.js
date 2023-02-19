import React, { Component, PureComponent } from "react"
import styled from 'styled-components';
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Task } from './task'

const Container = styled.div`
  box-sizing: content-box;
  margin: 0.5rem 1rem 0.5rem 0;
  border-radius: 6px;
  overflow: hidden;
  width: 350px;
  background-color: #f6f8fa;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border: ${props => (props.isDragging ? '2px solid #0969da' : '1px solid #bdbdbd')};
  box-shadow: ${props => (props.isDragging ? '0 8px 20px rgb(0 0 0 / 20%)' : 'none')};
  transition: border 0.1s ease-out, box-shadow 0.3s ease-out;
`;
const Title = styled.h5`
  padding: 0.8rem;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const TaskList = styled.div`
  padding: 0.5rem;
  background-color: ${props => (props.isDraggingOver ? '#dfe4e9' : 'inherit')};
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;

class InnerList extends PureComponent {
  render() {
    return this.props.tasks.map((task, index) => (
      <Task key={task.id} task={task} index={index} />
    ))
  }
}

class DndSubmissions extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container {...provided.draggableProps} ref={provided.innerRef} isDragging={snapshot.isDragging} >
            <Title {...provided.dragHandleProps}>
              <span style={{
                backgroundColor: 'rgb(175 184 193 / 20%)',
                fontWeight: '500',
                fontSize: '90%',
                padding: '4px 8px',
                borderRadius: '8px',
                marginRight: '8px',
                height: '24px'
              }}>
                {this.props.tasks.length}
              </span>
              <span style={{lineHeight: '24px'}}>
                {this.props.column.title}
              </span>
            </Title>
            <Droppable droppableId={this.props.column.id} type="task">
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList tasks={this.props.tasks} />
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    )
  }
}

export { DndSubmissions }