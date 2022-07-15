import * as React from 'react' ;

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

const Summary = (props) => {
    const classes = useStyles() ;

    const {
        InitialResultViewPoint
    } = useResultViewInfo() ;

    const {
        selectedItem
    } = props ;

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
                                <TableRow
                                >
                                    <TableCell>Sales % Chg Lst Qtr</TableCell>
                                    <TableCell>{`>`} 100%</TableCell>
                                    <TableCell>164</TableCell>
                                </TableRow>
                                <TableRow
                                >
                                    <TableCell>Avg Sales % Chg 2Q</TableCell>
                                    <TableCell>{`>`} 100%</TableCell>
                                    <TableCell>116</TableCell>
                                </TableRow>
                                <TableRow
                                >
                                    <TableCell>Avg Sales % Chg 3Q</TableCell>
                                    <TableCell>{`>`} 100%</TableCell>
                                    <TableCell>93</TableCell>
                                </TableRow>
                                <TableRow
                                >
                                    <TableCell>Avg Sales % Chg 4Q</TableCell>
                                    <TableCell>{`>`} 100%</TableCell>
                                    <TableCell>78</TableCell>
                                </TableRow>
                                <TableRow
                                >
                                    <TableCell>Funds % Increase</TableCell>
                                    <TableCell>{`>`} 1%</TableCell>
                                    <TableCell>49</TableCell>
                                </TableRow>
                                <TableRow
                                >
                                    <TableCell>RS 3-Month Rating</TableCell>
                                    <TableCell>{`>`} 75</TableCell>
                                    <TableCell>26</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box className={classes.buttonDiv}>
                        <Button variant='contained' className={classes.buttonCss}
                            onClick={async () => {
                                await InitialResultViewPoint(37) ;
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

export default Summary ;