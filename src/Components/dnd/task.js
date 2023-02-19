import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem; 
  background-color: white;
  border: ${props => (props.isDragging ? '2px solid #777' : '1px solid lightgrey')};
  box-shadow: ${props => (props.isDragging ? '0 2px 8px rgb(0 0 0 / 12%)' : 'none')};
  transition: border 0.1s ease-out, box-shadow 0.3s ease-out;
`
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`

const Content = styled.div``
const Desc = styled.p`
  font-size: 0.8rem;
`
const Author = styled.p`
  font-size: 0.75rem;
  background-color: rgb(227, 252, 239);
  color: rgba(9, 30, 66, 0.71);
  padding: 0.15rem 0.3rem;
  border-bottom: solid 2px rgb(9 30 66 / 16%);
`
const Created = styled.time`
  display: block;
  font-family: monospace;
  font-weight: 600;
  font-size: 0.7rem;
`

export class Task extends Component {
  render() {
    const { content, created, author } = this.props.task
    const date = created.slice(0, 11);
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => {
          return (
            <Container
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              isDragging={snapshot.isDragging}
            >
              <Content>
                <Desc>
                  {`${content}`.slice(0, 84)}{content.length > 84 ? `...` : ``}
                </Desc>
                <Flex>
                  <Author>
                    {author}
                  </Author>
                  <Created>
                    {date}
                  </Created>
                </Flex>
              </Content>
            </Container>
          )
        }}
      </Draggable>
    )
  }
}