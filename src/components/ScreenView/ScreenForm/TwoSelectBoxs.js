import * as React from 'react';

import {
    InputLabel,
    FormControl,
    Select,
    Box
} from '@mui/material' ;

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import { useStyles } from './StyledDiv/TwoSelectBox.styles';
import { useTheme } from '@mui/styles';

export const TwoSelectBox = (props) => {

    const classes = useStyles() ;
    const theme = useTheme() ;

    const {
        baseItems 
    } = props ;

    const [selectedItems, setSelectedItems] = React.useState([]);
    const [exportedItems, setExportedItems] = React.useState([]) ;
    const [tempItems, setTempItems] = React.useState([]) ;

    const handleChangeMultiple = (e, which) => {
        const { options } = e.target;
        const value  = [];

        for (let i = 0, l = options.length; i < l; i += 1) {
            if ( options[i].selected ) {
                value.push(options[i].value);
            }
        }
        if(which === 'selected') setSelectedItems(value);
        if(which === 'exported') setExportedItems(value) ;
    };

    const handleTempItems = (selectedItems) => {
        const value  = [];

        for (let i = 0, l = selectedItems.length; i < l; i += 1) {
            value.push(selectedItems[i]);
        }

        setTempItems([...value]) ;
    }
    return (
        <>
            <Box className={classes.root}>
                <FormControl>
                    <Select
                        multiple
                        native
                        value={selectedItems}
                        onChange={(e) => handleChangeMultiple(e, 'selected')}
                        inputProps={{
                            id: 'select-multiple-native',
                        }}
                    >
                    {
                        baseItems?.map((item) => (
                            <option key={item + '_selected'} value={item}>
                            {item}
                            </option>
                        ))
                    }
                    </Select>
                </FormControl>
                <DoubleArrowIcon sx={{cursor : 'pointer', "&:hover" : {color : theme.palette.brown.main + ' !important'}}} 
                    onClick={() => handleTempItems(selectedItems)}
                />
                <FormControl>
                    <Select
                        multiple
                        native
                        onChange={(e) => handleChangeMultiple(e, 'exported')}
                        value={exportedItems}
                        inputProps={{
                            id: 'select-multiple-native',
                        }}
                    >
                    {
                        tempItems?.map((item) => (
                            <option key={item + '_exported'} value={item}>
                            {item}
                            </option>
                        ))
                    }
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{textAlign : 'right'}}><u>Reset</u></Box>
        </>
    );
}

export default TwoSelectBox ;