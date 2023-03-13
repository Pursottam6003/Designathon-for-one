import { Component, PureComponent } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Section } from "../dnd/dndSubmissions"
import styled from "styled-components"

const Container = styled.div`
  margin: 0.5rem 0;
  border-radius: 2px;
  display: flex;
  user-select: none;
`;

class SectionWrapper extends PureComponent {
  render() {
    const { section, subSectionMap, activities, index } = this.props;
    const mappedsubSecs = section.subSecIds.map(subSecId => subSectionMap[subSecId]);
    return <Section section={section} subSections={mappedsubSecs} activities={activities} index={index} />
  }
}

export class DndMain extends Component {
  onDragEnd = result => {

    const { destination, source, draggableId, type } = result;
    const { orders, updateOrders } = this.props

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    if (type === 'section') {
      const newSectionOrder = Array.from(orders.sectionOrder);
      newSectionOrder.splice(source.index, 1);
      newSectionOrder.splice(destination.index, 0, draggableId);

      const newOrders = {
        ...orders,
        sectionOrder: newSectionOrder,
      };
      updateOrders(newOrders)
      return;
    }

    if (type === 'subSection') {
      const start = orders.sections[source.droppableId];
      const finish = orders.sections[destination.droppableId];
      if (start === finish) {
        const newSubSecIds = Array.from(start.subSecIds);
        newSubSecIds.splice(source.index, 1);
        newSubSecIds.splice(destination.index, 0, draggableId);

        const newSection = {
          ...start,
          subSecIds: newSubSecIds,
        };

        const newOrders = {
          ...orders,
          sections: {
            ...orders.sections,
            [newSection.id]: newSection,
          },
        };

        updateOrders(newOrders);
        return;
      }

      // Moving from one section to another
      const startSubSecIds = Array.from(start.subSecIds);
      startSubSecIds.splice(source.index, 1);
      const newStart = {
        ...start,
        subSecIds: startSubSecIds,
      };

      const finishSubSecIds = Array.from(finish.subSecIds);
      finishSubSecIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        subSecIds: finishSubSecIds,
      };

      const newOrders = {
        ...orders,
        sections: {
          ...orders.sections,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      updateOrders(newOrders);
      return;
    }

    const start = orders.subSections[source.droppableId];
    const finish = orders.subSections[destination.droppableId];

    if (start === finish) {
      const newActivityIds = Array.from(start.activityIds);
      newActivityIds.splice(source.index, 1);
      newActivityIds.splice(destination.index, 0, draggableId);

      const newSubSection = {
        ...start,
        activityIds: newActivityIds,
      };

      const newOrders = {
        ...orders,
        subSections: {
          ...orders.subSections,
          [newSubSection.id]: newSubSection,
        },
      };

      updateOrders(newOrders);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.activityIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      activityIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.activityIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      activityIds: finishTaskIds,
    };

    const newOrders = {
      ...orders,
      subSections: {
        ...orders.subSections,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    updateOrders(newOrders);
  };

  render() {
    const { orders } = this.props
    return (
      <div className="dnd-h-scroll">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="all-columns" direction="horizontal" type="section">
            {provided => (
              <Container
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {orders.sectionOrder.map((sectionId, index) => {
                  const section = orders.sections[sectionId];
                  return <SectionWrapper key={`sw${sectionId}`} section={section} index={index} subSectionMap={orders.subSections} activities={orders.activities} />
                })}
                {provided.placeholder}
              </Container>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    )
  }
}
