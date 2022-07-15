import *as React from 'react' ;

import { Routes , Route, useNavigate } from "react-router-dom";

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import {
    Box,
    Grid
} from '@mui/material' ;

import ScreenView from '../../components/ScreenView';

import { useStyles } from './StyledDiv/index.styles';

const MSTool = () => {
    const classes = useStyles() ;
    const navigate = useNavigate() ;

    const [selectedTab, setSelectedTab] = React.useState('screens') ;

    const handleSelectedTab = (selectedTab) => {
        setSelectedTab(selectedTab) ;
        switch(selectedTab) {
            case "screens" :
                navigate('/screens') ;
                return ;
            case "alerts" :
                navigate('/alerts') ;
                return ;
            case "notes" :
                navigate('/notes') ;
                return ;
            default :
                break ;
        }
    }
    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={1}>
                    <Box sx={{textAlign : 'center', mt : '10px', mb : '10px'}}>
                        <QuestionMarkIcon sx={{color : 'white'}} />
                    </Box>
                    <Box className={classes.tabsDiv}>
                        <Box className={selectedTab === 'screens' ? classes.tabActiveDiv : classes.tabDiv}
                            onClick={() => handleSelectedTab('screens')}
                        >
                            Screens
                        </Box>
                        <Box className={selectedTab === 'alerts' ? classes.tabActiveDiv : classes.tabDiv}
                            onClick={() => handleSelectedTab('alerts')}
                        >
                            Alerts
                        </Box>
                        <Box className={selectedTab === 'notes' ? classes.tabActiveDiv : classes.tabDiv}
                            onClick={() => handleSelectedTab('notes')}
                        >
                            Notes
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={11}>
                    <Routes>
                        <Route path='/*' element={<ScreenView />} />
                        <Route path="/screens" element={<ScreenView />} />
                    </Routes>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MSTool ;