import React, { Component } from "react"
import { Droppable } from "react-beautiful-dnd";
import styled from 'styled-components';

import { Task } from './task'

const Container = styled.div`
  margin: 0.5rem;
  border: 1px solid lightgrey;
  border-radius: 0.125rem;
  width: 220px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 0.5rem;
`;

const TaskList = styled.div`
  padding: 0.5rem;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
`;

class DndSubmissions extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {this.props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
          )}
        </Droppable>
      </Container>
    )
  }
}

export { DndSubmissions }