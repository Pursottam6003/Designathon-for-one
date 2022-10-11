import { Droppable } from "react-beautiful-dnd";

export const Drop = ({ id, type, droppableDir, outer, ...props }) => {
  return (
    <Droppable droppableId={id} type={type} direction={droppableDir}>
      {(provided) => {
        return (
          <div ref={provided.innerRef} {...provided.droppableProps} {...props}>
            {props.children}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
