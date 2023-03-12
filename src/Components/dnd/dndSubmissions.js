import React, { PureComponent } from "react"
import styled from 'styled-components';
import { Draggable, Droppable } from "react-beautiful-dnd";
import { SubSection } from './task'

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
const Title = styled.h4`
  padding: 0.8rem;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
const TitleText = styled.span`
  line-height: 24px;
`

const SubSectionList = styled.div`
  background-color: ${props => (props.isDraggingOver ? '#dfe4e9' : 'inherit')};
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1rem 0;
`

const CountBadge = styled.span`
  background-color: rgba(175, 184, 193, 0.2);
  font-weight: 500;
  font-size: 90%;
  padding: 4px 8px;
  border-radius: 8px;
  margin-right: 8px;
  height: 24px;
`

class SubSections extends PureComponent {
  render() {
    return this.props.subSections.map((subSection, index) => {
      const activities = subSection.activityIds.map((activityId) => this.props.activities[activityId])
      return <SubSection key={subSection.id} subSection={subSection} activities={activities} index={index} />
    })
  }
}

const Section = ({ section, subSections, activities, index }) => (
  <Draggable draggableId={section.id} index={index}>
    {(provided, snapshot) => (
      <Container {...provided.draggableProps} ref={provided.innerRef} isDragging={snapshot.isDragging} >
        <Title {...provided.dragHandleProps}>
          <CountBadge>{subSections.length}</CountBadge>
          <TitleText>{section.title}</TitleText>
        </Title>
        <Droppable droppableId={section.id} type="subSection">
          {(provided, snapshot) => (
            <SubSectionList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              <SubSections subSections={subSections} activities={activities} />
              {provided.placeholder}
            </SubSectionList>
          )}
        </Droppable>
      </Container>
    )}
  </Draggable>
)

export { Section }