import * as React from 'react' ;

import { connect } from "react-redux";
import { SetChangeDataResult } from '../../../redux/actions/result';

import { useResultViewInfo } from '../../../contexts/ResultViewContext';

import {
    Box,
    TableContainer,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Table,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/Summary.styles';
import { element } from 'prop-types';

const Summary = (props) => {
    const classes = useStyles() ;

    const {
        InitialResultViewPoint,
    } = useResultViewInfo() ;

    const {
        selectedItem,
        stateFormData,
        oldStateFormData,
        SetChangeDataResult
    } = props ;

    const [ changeData, setChangeData ] = React.useState({});
    const [ changeField, setChangeField ] = React.useState({});

    let count = 0;
    let temp = [];

    React.useEffect(() => {

        if(stateFormData !== oldStateFormData){
            Object.keys(stateFormData).forEach( element => {
                let temp_new = JSON.stringify( stateFormData[element] ) ;
                let temp_old = JSON.stringify( oldStateFormData[element] ) ;
                // console.log( temp_new, temp_old, element,'"sldf"')

                // if(typeof(stateFormData[element]) === 'object')
                //     console.log( element ,'element' )
                //     console.log(temp_new, temp_old, temp_new === temp_old , 'check')

                if( ( temp_new != temp_old ) ) {
                    console.log( element , 'element')
                    console.log(stateFormData[element], oldStateFormData[element], 'not equeal');
                    changeData[element] = stateFormData[element]
                    setChangeData({...changeData})
                    console.log(changeData);

                    Object.entries(stateFormData).map((row, index) => {
                        if(row[0] === element)
                            temp.push(row[0])
                    })
                    setChangeField(temp)
                }
            });
        }

    }, [stateFormData])

    const getCount = (value) => {
        
        let count = 0;
        changeField && changeField.map((element, index) => {
            if(element.slice(0,-4) === value)
                count ++ ;
        })
        return count;
    }

    return (
        <Box className={classes.root}>
            {
                selectedItem === 'favorite' && <>
                    <Box className={classes.titleDiv}>
                        Screen Summary
                    </Box>
                    <TableContainer >
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>CRITERIA</TableCell>
                                    <TableCell>VALUES</TableCell>
                                    <TableCell>REMAINING</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                <TableRow>
                                    <TableCell colSpan={3}>
                                        Screen from : MarketSmith Database
                                    </TableCell>
                                </TableRow>
                                
                                {
                                    Object.entries(changeData).map( (element, index) => {
                                        return (
                                            <TableRow key={index}>
                                            {
                                                <>
                                                    {
                                                        (element[0].includes('min') || element[0].includes('max')) &&
                                                        
                                                            !(getCount(element[0].slice(0,-4)) === 2 && element[0].includes("max")) &&
                                                            <>
                                                                <TableCell>{element[0].slice(0,-4)}</TableCell>
                                                                {
                                                                    (getCount(element[0].slice(0,-4)) === 2) ?
                                                                        <TableCell>
                                                                            {
                                                                                element[0].includes("min") &&
                                                                                    <Box> { element[1]} {"-"} {stateFormData[element[0].slice(0,-4) + '_max']}</Box>
                                                                            }
                                                                        </TableCell>
                                                                        :
                                                                        <>
                                                                            {
                                                                                element[0].includes("min") ?
                                                                                    <TableCell>
                                                                                            {
                                                                                                <Box> {">="} { element[1]} </Box>
                                                                                            }
                                                                                    </TableCell>
                                                                                    :
                                                                                    <TableCell>
                                                                                            {
                                                                                                <Box> {"<="} { element[1]} </Box>
                                                                                            }
                                                                                    </TableCell>
                                                                            }
                                                                        </>
                                                                }
                                                                <TableCell>164</TableCell>
                                                            </> 
                                                    }
                                                    {
                                                        (element[1] === "yes" || element[1] === "no") &&
                                                        <>
                                                            <TableCell>{element[0]}</TableCell>
                                                            <TableCell>
                                                                {
                                                                        <Box> { element[1] } </Box>
                                                                }
                                                            </TableCell>
                                                            <TableCell>164</TableCell>
                                                        </>
                                                    }
                                                    {
                                                        (element[1].includes(',')) &&
                                                        <>
                                                            <TableCell>{element[0]}</TableCell>
                                                            <TableCell>
                                                                {
                                                                        <Box> { element[1].split(',') } </Box>
                                                                }
                                                            </TableCell>
                                                            <TableCell>164</TableCell>
                                                        </>
                                                    }
                                                    {
                                                        typeof(element[1]) === 'object' &&
                                                        <>
                                                            <TableCell>{element[0]}</TableCell>
                                                            <TableCell>
                                                                {
                                                                    element[1].map((row, index) => {
                                                                        return(
                                                                            <Box component={'span'} key={index}>
                                                                                {
                                                                                    index !== 0  &&  <Box component={'span'}>{","}</Box>
                                                                                }
                                                                                <Box component={'span'}> { row } </Box>
                                                                            </Box>
                                                                        )
                                                                    })
                                                                }
                                                            </TableCell>
                                                            <TableCell>164</TableCell>
                                                        </>
                                                    }
                                                </>
                                            }
                                            </TableRow>
                                        )                               
                                    })
                                
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box className={classes.buttonDiv}>
                        <Button variant='contained' className={classes.buttonCss}
                            onClick={async () => {
                                await InitialResultViewPoint(250) ;
                                await SetChangeDataResult(changeData);
                            }}
                        >
                            View Screen Results
                        </Button>
                    </Box>
                </>
            }
        </Box>
    )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
    SetChangeDataResult
}

export default connect(mapStateToProps, mapDispatchToProps) (Summary) ;