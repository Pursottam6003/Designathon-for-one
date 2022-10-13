import React, { Component, PureComponent } from "react"
import styled from 'styled-components';
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Task } from './task'

const Container = styled.div`
  margin: 0.5rem;
  border: 1px solid lightgrey;
  border-radius: 0.125rem;
  width: 250px;
  background-color: rgb(235, 236, 240);

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
const Title = styled.h4`
  padding: 0.5rem;
`;

const TaskList = styled.div`
  padding: 0.5rem;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
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
        {(provided) => (
          <Container {...provided.draggableProps} ref={provided.innerRef} >
            <Title {...provided.dragHandleProps}>
              {this.props.column.title}
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