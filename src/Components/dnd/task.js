
import React, { Component, PureComponent, useEffect, useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ReactComponent as EditIcon } from '../../images/icons/edit.svg'
import { ReactComponent as DoneIcon } from '../../images/icons/done2.svg'
import { ReactComponent as DeleteIcon } from '../../images/icons/delete.svg'


const Container = styled.div`
  padding: 0.5rem 0.5rem 0;
  margin-bottom: 0.5rem; 
  background-color: white;
  border: ${props => (props.isDragging ? '2px solid #777' : '1px solid lightgrey')};
  box-shadow: ${props => (props.isDragging ? '0 2px 8px rgb(0 0 0 / 12%)' : 'none')};
  overflow: hidden;
  transition: border 0.1s ease-out, box-shadow 0.3s ease-out;
`
const TaskContainer = styled.div`
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem; 
  background-color: white;
  border: ${props => (props.isDragging ? '2px solid #777' : '1px solid lightgrey')};
  height: fit-content;
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
  padding: 0.5rem 0.5rem 1.4rem;
  background-color: ${props => (props.isDraggingOver ? '#f0eff4' : 'transparent')};
  max-height: ${props => (props.isActive) ? 'fit-content' : '7.8125rem'};
  border: ${props => (props.isActive ? 'dashed 1px darkblue' : 'none')};
  margin-bottom: ${props => (props.isActive ? '1rem' : 'unset')};
  flex-grow: 1;
  overflow: hidden;
`;

const Title = styled.h5`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0.5rem;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  cursor: ${props => (props.draggable ? 'grab' : 'default')}
`;

const TitleText = styled.span`
  flex-grow: 1;
  margin-right: 0.8rem;
`
const TitleEdit = styled.input`
  padding: 0.325rem 0.625rem;
  font-size: inherit;
  font-family: 'Zilla Slab', serif;
  width: 100%;
`
const Btn = styled.div`
  display: flex;
  flex-direaction: row;
  button {
    border: solid 1px transparent; 
    background-color: transparent;
    border-radius: 4px;
    padding: 4px;
    transition: 0.15s all ease-in;
    height: 24px;
    width: 24px;

    &:hover {
      border: solid 1px #97c89f;
      background-color: #f0f7f1;
      cursor: pointer;

      svg {
        fill: darkgreen;
      }
    }
  }
  svg {
    width: 14px;
    height: 14px;
    fill: #888;
  }
`

const Content = styled.div``
const Desc = styled.article`
  font-size: 0.8rem;
  height: 2.4rem;
  overflow: hidden;
  strong {
    font-weight: 550;
  }
`
const ActivityTitle = styled.h2`
    font-family: "Open Sans", sans-serif;
    font-weight: 550;
    text-transform: uppercase;
    color: rgb(134, 142, 150);
    font-size: 0.75rem;
    line-height: 1.4;
    letter-spacing: 0.12rem;
    white-space: pre;
    overflow: hidden;
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
      <Activity key={activity.id} activity={activity} index={index} isDragDisabled={this.props.isDragDisabled} />
    ))
  }
}

export const Activity = ({ activity, index, isDragDisabled }) => {
  const { id, title, content, created, author } = activity;
  const date = created.slice(0, 11);
  return (
    <Draggable draggableId={id} index={index} isDragDisabled={isDragDisabled}>
      {(provided, snapshot) => {
        return (
          <TaskContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            <Content>
              {title && <ActivityTitle>{title}</ActivityTitle>}
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
          </TaskContainer>
        )
      }}
    </Draggable>
  )
}

export const SubSection = ({ subSection, index, activities, updateTitle, deleteSubSection }) => {
  const [isActive, setIsActive] = useState(false);
  const [subSecTitle, setSubSecTitle] = useState('');

  useEffect(() => {
    if (subSection) setSubSecTitle(subSection.title);
  }, [subSection])

  const handleChange = (e) => {
    setSubSecTitle(e.target.value);
  }

  return (
    <Draggable draggableId={subSection.id} index={index} isDragDisabled={isActive} >
      {(provided, snapshot) => {
        return (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            isDragging={snapshot.isDragging}
          >
            <Title {...provided.dragHandleProps} >
              <TitleText>
                {isActive ?
                  <TitleEdit placeholder='Title' value={subSecTitle} onChange={handleChange} />
                  : subSection.title ? subSection.title : <em>Untitled</em>}
              </TitleText>
              <Btn>
                <button type='button' onClick={(e) => {
                  e.preventDefault();
                  setIsActive(!isActive);
                  if (subSecTitle !== subSection.title) updateTitle(subSection.id, subSecTitle)
                }}>
                  {isActive ? <DoneIcon /> : <EditIcon />}
                </button>

                {subSection.activityIds.length === 0 && (
                  <button type='button' onClick={(e) => {
                    e.preventDefault();
                    deleteSubSection(subSection.id);
                  }}>
                    <DeleteIcon />
                  </button>
                )} 
              </Btn>
            </Title>
            <Droppable droppableId={subSection.id} type="activity" isDropDisabled={!isActive}>
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                  isActive={isActive}
                >
                  <Activities activities={activities} isDragDisabled={!isActive} />
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