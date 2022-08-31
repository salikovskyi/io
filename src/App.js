import React from "react";
import Users from "./data";
import { ListContainer, ListItem } from "./styles";
import { DragHandle } from "./partials/DragHandle";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const App = () => {
  const user = Users.getUsers();
  return (
    <div className="App">
      <DragDropContext
        onDragEnd={(param) => {
          const srcI = param.source.index;
          const desI = param.destination?.index;
          if (desI) {
            user.splice(desI, 0, user.splice(srcI, 1)[0]);
            Users.saveUsers(user);
          }
        }}
      >
        <ListContainer>
          <h1>люди</h1>
          <Droppable droppableId="droppable-1" >     
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps} >
                {user.map((item, i) => (
                  <Draggable
                    key={item.id}
                    draggableId={"draggable-" + item.id}
                    index={i}
                    
                  >
                    {(provided, snapshot) => (
                      <ListItem
                      {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{
                          ...provided.draggableProps.style,
                          boxShadow: snapshot.isDragging
                            ? "0 0 .4rem #666"
                            : "none",
                        }}
                      >
                        <span>{item.title}</span>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ListContainer>
      </DragDropContext>
    </div>
  );
};

export default App;