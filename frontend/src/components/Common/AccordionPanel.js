import * as React from 'react' ;

import { useMeasure } from 'react-use';

import { Droppable } from "react-beautiful-dnd";
import DragListItem from '../ResultView/DragListItem';

import clsx from 'clsx';

import {
    Accordion ,
    AccordionSummary,
    AccordionDetails,
    Box,
    Typography,
    List,
    ListItem
} from '@mui/material' ;


import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root :{
            fontFamily: "Montserrat",
            color : "black !important" ,
            margin : '0px 0px !important',

            "&::before": {
                content: 'none !important'
            },
        
            "& svg" :{
                color: "black !important",
                margin : '0px 10px'
            },

            "& .MuiButtonBase-root" : {
                minHeight : '10px'
            },
            "& .MuiAccordionSummary-root" : {
                minHeight : '30px !important',
                padding : '0px',
                paddingLeft : '20px',
                "&:hover" : {
                    background : 'linear-gradient(0deg, rgba(253,123,16,1) 10%, rgba(250,250,250,1) 52%, rgba(112,112,111,0) 100%) !important',
                }
            },
            "& .MuiAccordionSummary-content" : {
                borderRight : '1px solid rgba(180,180,180,1)',
                margin : '0px 0px !important',
            },
            "& .MuiAccordionDetails-root" : {
                background : '#ffefd7 !important',
            },
    },
    draggableListDiv : {
        overflowX : 'auto',
        "& div" : {
            minHeight : 70,
            display : 'flex',
        }
    },
    expandedColumn : {
        background : 'linear-gradient(0deg, rgba(253,123,16,1) 10%, rgba(250,250,250,1) 52%, rgba(112,112,111,0) 100%) !important',
    }
})) ;

const AccordionPanel = (props) => {
    
    const classes = useStyles() ;

    const {
        title , 
        context,
        droppableId,
        draggableList
    } = props ;

    const [expanded , setExpaned] = React.useState(false) ;

    const onChangeExpanded = () => {
        setExpaned(!expanded) ;
    }

    const [draggableListRef, { x, y, width, height, top, right, bottom, left }] = useMeasure() ;

    React.useEffect(() => {
        console.log(x, y, width, height, top, right, bottom, left) ;
    }, [x, y, width, height, top, right, bottom, left]);

    return (

        <Accordion  className={classes.root} defaultExpanded={false}>
            <AccordionSummary
                expandIcon={expanded ===false ? <AddIcon className={classes.expandIcon}/> : <RemoveIcon className={classes.expandIcon}/>}
                aria-controls={`panel1a-content-${title}`}
                id={`panel1a-header-${title}`}
                onClick={() => onChangeExpanded()}
                sx={{ background : expanded  ?  'linear-gradient(0deg, rgba(255,200,115,1) 10%, rgba(250,250,250,1) 52%, rgba(112,112,111,0) 100%) !important' : 'linear-gradient(0deg, rgba(180,180,180,1) 10%, rgba(250,250,250,1) 52%, rgba(112,112,111,0) 100%) !important'}}
            >
                <Box>{title}</Box>
            </AccordionSummary>
            <AccordionDetails>
                <Box className={classes.draggableListDiv} sx={{display : expanded ? 'block' : 'none'}}
                    ref={draggableListRef}
                >
                    <Droppable droppableId={droppableId}
                        direction={'horizontal'}
                    >
                        {
                            (provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                {
                                    draggableList.map((item, index) => (
                                        <DragListItem key={item.id} item={item} index={index} />
                                    ))
                                }
                                {provided.placeholder}
                                </div>
                            )
                        }
                    </Droppable>
                </Box>
            </AccordionDetails>
        </Accordion>

    )
}
export default AccordionPanel ;