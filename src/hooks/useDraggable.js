import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

export const useDraggable = (dragNext, dragPrev) => {
  const draggableRef = useRef(null);

  useEffect(() => {
    if (draggableRef.current) {
      Draggable.create(draggableRef.current, {
        type: "x",
        minimumMovement: 10,
        dragClickables: false,
        onDragStart: function () {
          if (this.getDirection() === "left") {
            dragNext();
          } else {
            dragPrev();
          }
        },
      });
    }
  });

  return draggableRef;
};
