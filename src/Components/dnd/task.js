import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 0.125rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`

export class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => {
          return (
              <Container
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}   // passing the dragHandleProps to the Container
                //  makes the whole Container component the draghandle, 
                // passing it to other div could make that draggable   
                isDragging={snapshot.isDragging}
              >
                {this.props.task.content}
              </Container>
          )
        }}
      </Draggable>
    )
  }
}