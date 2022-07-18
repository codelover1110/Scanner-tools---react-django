import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

import {
  Box
} from '@mui/material' ;

import { useStyles } from "./StyledDiv/DragListItem.styles";

const DragListItem = ({ item, index }) => {

  const classes = useStyles() ;

  return (
    
    <Draggable draggableId={item?.id} index={index}
    >
        {
            (provided, snapshot) => {
                return (
                    <Box className={classes.itemDiv}
                        ref={provided.innerRef}
                        snapshot={snapshot}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        {
                          item?.field
                        }
                    </Box>
                );
            }
        }
    </Draggable>
  );
};

export default DragListItem;
