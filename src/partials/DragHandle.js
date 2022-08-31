import { DragIconWrapper } from "../styles";

import React from "react";

export function DragHandle(props) {
  return (
    <DragIconWrapper {...props}>
        <p>-</p>
    </DragIconWrapper>
  );
}