import { Component, PureComponent } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { DndSubmissions } from "../dnd/dndSubmissions"
import styled from "styled-components"

const Container = styled.div`
  margin: 0.5rem 0;
  border-radius: 2px;
  display: flex;
`;

class InnerList extends PureComponent {
  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <DndSubmissions column={column} tasks={tasks} index={index} />
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

    if (type === 'column') {
      const newColumnOrder = Array.from(orders.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newOrders = {
        ...orders,
        columnOrder: newColumnOrder,
      };
      updateOrders(newOrders)
      return;
    }

    const start = orders.columns[source.droppableId];
    const finish = orders.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newOrders = {
        ...orders,
        columns: {
          ...orders.columns,
          [newColumn.id]: newColumn,
        },
      };

      updateOrders(newOrders);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newOrders = {
      ...orders,
      columns: {
        ...orders.columns,
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
        <div className="dnd-wrapper">
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="all-columns" direction="horizontal" type="column">
              {provided => (
                <Container
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {orders.columnOrder.map((columnId, index) => {
                    const column = orders.columns[columnId];

                    return <InnerList key={column.id} column={column} taskMap={orders.tasks} index={index} />
                  })}
                  {provided.placeholder}
                </Container>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    )
  }
}