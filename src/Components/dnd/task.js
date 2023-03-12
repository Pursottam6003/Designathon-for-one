import React, { Component, PureComponent } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';


const Container = styled.div`
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem; 
  background-color: white;
  border: ${props => (props.isDragging ? '2px solid #777' : '1px solid lightgrey')};
  box-shadow: ${props => (props.isDragging ? '0 2px 8px rgb(0 0 0 / 12%)' : 'none')};
  overflow: hidden;
  transition: border 0.1s ease-out, box-shadow 0.3s ease-out;
`
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`

const TaskList = styled.div`
  padding: 0.5rem;
  background-color: ${props => (props.isDraggingOver ? '#f0eff4' : 'inherit')};
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Title = styled.h5`
  padding: 0.5rem;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;


const Content = styled.div``
const Desc = styled.article`
  font-size: 0.8rem;
  height: 2.4rem;
  overflow: hidden;
  strong {
    font-weight: 550;
  }
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

class Activities extends PureComponent {
  render() {
    return this.props.activities.map((activity, index) => (
      <Activity key={activity.id} activity={activity} index={index} />
    ))
  }
}

export const Activity = ({ activity, index }) => {
  const { id, content, created, author } = activity;
  const date = created.slice(0, 11);
  return (
    <Draggable draggableId={id} index={index}>
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
                <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                />
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

export const SubSection = ({ subSection, index, activities }) => {
  return (
    <Draggable draggableId={subSection.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            isDragging={snapshot.isDragging}
          >
            <Title {...provided.dragHandleProps}>
              {subSection.title}
            </Title>
            <Droppable droppableId={subSection.id} type="activity">
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <Activities activities={activities} />
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )
      }}
    </Draggable>
  )
}

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
                  <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                  />
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