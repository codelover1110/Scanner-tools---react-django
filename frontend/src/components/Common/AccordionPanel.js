import * as React from 'react' ;

import { useMeasure } from 'react-use';

import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;
import { ExpandedItem } from '../../redux/actions/accordions';

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
        width : '100%',
        overflowX : 'hidden',
        "& div" : {
            minHeight : 70,
            display : 'flex',
        }
    },
    expandedColumn : {
        background : 'linear-gradient(0deg, rgba(253,123,16,1) 10%, rgba(250,250,250,1) 52%, rgba(112,112,111,0) 100%) !important',
    }
})) ;

const SOLDIV_WIDTH = 170 ;

const AccordionPanel = (props) => {
    
    const classes = useStyles() ;

    const {
        title , 
        context,
        idx,
        droppableId,
        draggableList
    } = props ;

    const [expanded , setExpaned] = React.useState(false) ;

    const {
        ExpandedItem,
        expandedItem
    } = props ;

    const [ listDiv, {width , height} ] = useMeasure() ;

    const [listModel, setListModel] = React.useState({
        rowCount : 0,
        colCount : 0,
        leftOverIndex : 0,
        estDivWidth : 0
    }) ;

    const TriggerExpandedItem = async (e, expanded, itemIndex) => {
        await ExpandedItem(itemIndex) ;
        setExpaned(expanded) ;
    }
    
    React.useEffect(() => {
        if(expandedItem !== idx){
            setExpaned(false) ;
        }
    }, [expandedItem]) ;

    React.useEffect(() => {
        if(draggableList.length) {
            let colCount = Math.floor(width / SOLDIV_WIDTH) ;
            let estDivWidth = width / colCount ;
            let rowCount = Math.floor(draggableList.length / colCount) ;
            let leftOverIndex = colCount * rowCount ;

            if(Number.isInteger(colCount) && Number.isInteger(rowCount) && Number.isInteger(leftOverIndex)) {
                setListModel({
                    colCount : colCount,
                    rowCount : rowCount,
                    leftOverIndex : leftOverIndex,
                    estDivWidth : estDivWidth
                });
            }
        }
    }, [width, draggableList]) ;

    return (
        <Accordion  className={classes.root} expanded={expanded} id={droppableId + '_div'}
            onChange={(e, expanded) => {
                TriggerExpandedItem(e, expanded, idx)
            }}
        >
            <AccordionSummary
                expandIcon={expanded ===false ? <AddIcon className={classes.expandIcon}/> : <RemoveIcon className={classes.expandIcon}/>}
                aria-controls={`panel1a-content-${title}`}
                id={`panel1a-header-${title}`}
                
                sx={{ background : expanded  ?  'linear-gradient(0deg, rgba(255,200,115,1) 10%, rgba(250,250,250,1) 52%, rgba(112,112,111,0) 100%) !important' : 'linear-gradient(0deg, rgba(180,180,180,1) 10%, rgba(250,250,250,1) 52%, rgba(112,112,111,0) 100%) !important'}}
            >
                <Box>{title}</Box>
            </AccordionSummary>
            <AccordionDetails>
                <Box className={classes.draggableListDiv} sx={{display : expanded ? 'block' : 'none'}}
                    ref={listDiv}
                >
                    {
                        
                        [...Array(listModel.rowCount)].map((item, rowIndex) => {
                            return (
                                <Droppable droppableId={droppableId + "_" + rowIndex}
                                    direction={'horizontal'}
                                    key={'row_'+rowIndex}
                                >
                                    {
                                        (provided) => (
                                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                            {
                                                <Box  className={classes.rowDiv}>
                                                    {
                                                        [...Array(listModel.colCount)].map((item, colIndex) => {
                                                            return (
                                                                <Box sx={{width : listModel.estDivWidth}} className={classes.colDiv} key={'cell_' + rowIndex * listModel.colCount + colIndex }>
                                                                    <DragListItem key={draggableList[rowIndex * listModel.colCount + colIndex]?.id} item={draggableList[rowIndex * listModel.colCount + colIndex]} index={rowIndex * listModel.colCount + colIndex} />
                                                                </Box>
                                                            )
                                                        })
                                                    }
                                                </Box>
                                            }
                                            {provided.placeholder}
                                            </div>
                                        )
                                    }
                                </Droppable>
                            )
                        })
                    }

                    {
                        listModel.leftOverIndex < draggableList.length && 
                        <Droppable droppableId={droppableId + "_" + listModel.rowCount}
                            direction={'horizontal'}
                        >
                            {
                                (provided) => (
                                    <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {
                                        <Box key={'row_'+ listModel.rowCount + 1} className={classes.rowDiv}>
                                        {
                                            [...Array(draggableList.length - listModel.leftOverIndex)].map((item, colIndex) => {
                                                return (
                                                    <Box sx={{width : listModel.estDivWidth}} className={classes.colDiv} key={'cell_' + listModel.leftOverIndex + colIndex }>
                                                        <DragListItem key={draggableList[listModel.leftOverIndex + colIndex]?.id} item={draggableList[listModel.leftOverIndex + colIndex]} index={listModel.leftOverIndex + colIndex} />
                                                    </Box>
                                                )
                                            })
                                        }
                                        </Box>
                                    }
                                    {provided.placeholder}
                                    </div>
                                )
                            }
                        </Droppable>
                    }
                    
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}
AccordionPanel.propTypes = {
    ExpandedItem : PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    expandedItem : state.accordions.expandedItem
})
const mapDispatchToProps = {
    ExpandedItem
}
export default connect(mapStateToProps, mapDispatchToProps)(AccordionPanel) ;

