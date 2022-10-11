import { Draggable } from "react-beautiful-dnd";
import { ReactComponent as DragIcon } from "../images/icons/drag.svg"

export const Drag = ({ id, index, ...props }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        return (
          <div ref={provided.innerRef} {...provided.draggableProps} {...props}>
            <div className="drag-handle" {...provided.dragHandleProps}>
              <DragIcon />
            </div>
            {props.children}
          </div>
        );
      }}
    </Draggable>
  );
};
