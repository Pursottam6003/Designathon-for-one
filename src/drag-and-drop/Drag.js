import { Draggable } from "react-beautiful-dnd";
import { ReactComponent as DragIconOuter } from "../images/icons/drag.svg"
import { ReactComponent as DragIconInner } from "../images/icons/dragInner.svg"

export const Drag = ({ id, index, outer, ...props }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        return (
          <div ref={provided.innerRef} {...provided.draggableProps} {...props}>
            <div className="drag-handle" {...provided.dragHandleProps}>
              {outer ? (
                <DragIconOuter />
              ) : (
                <DragIconInner />
              )}
            </div>
            {props.children}
          </div>
        );
      }}
    </Draggable>
  );
};
