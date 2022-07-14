

import React, { useState, useEffect } from 'react' ;

import { useNavigate } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import ViewListIcon from '@mui/icons-material/ViewList';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import PersonIcon from '@mui/icons-material/Person';
import GRAB_IMAGE from '../../../assets/Layout/grab.jpg';

import {
    Box ,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        position : 'relative',
        zIndex : 10000,
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        height : '60px',
        boxShadow: '4px 10px 4px 10px rgba(0, 0, 0, 0.25), 10px 10px 20px 10px rgba(0, 0, 0, 0.25)',

        "& .MuiSvgIcon-root" : {
            width : '40px',
            height : '40px',
            cursor : 'pointer',
            "&:hover" : {
                transform: 'scale(1.3)',
                transition: '0.3s',
                cursor: 'pointer',
            },

            ['@media (max-width : 700px)'] : {
                width : '30px',
                height : '30px',
            }
        },

        ['@media (max-width : 700px)'] : {
            height : '50px',
        }
    },
    leftSection : {
        width : '40%',
        display : 'flex',
        justifyContent : 'space-around'
    },
    rightSection : {
        width : '40%',
        display : 'flex',
        justifyContent : 'space-around'
    },
    grab : {
        position : 'absolute',
        left : 'calc(50vw - 40px)',
        bottom : 0,
        cursor : 'pointer',
        width : '80px',
        height : '80px',

        ['@media (max-width : 700px)'] : {
            width : '60px',
            height : '60px',
        }
    }
}));

const Footer = () => {

    const classes = useStyles() ;
    const navigate = useNavigate();

    const [ active, setActive ] = useState(null);

    const handleChange = (value) => {
        setActive(value);
        switch(value) {
            case 'home' : 
                navigate('/landing/');
                break;
            case 'order' :
                navigate('/landing/order')
                break;
            case 'grab' :
                navigate('/landing/grab')
                break;
            case 'online' :
                navigate('/landing/online')
                break;
            case 'profile' :
                navigate('/landing/profile')
                break;
            default :
                return false;
        }
    }

    return (
        <Box className = {classes.root}>
            <Box className={classes.leftSection}>
                <HomeIcon onClick={() => handleChange('home')} sx={{color : active === 'home' ? 'rgb(65,139,235)' : 'none'}}/>
                <ViewListIcon onClick={() => handleChange('order')} sx={{color : active === 'order' ? 'rgb(65,139,235)' : 'none'}}/>
            </Box>

            <Box component={'img'} src={GRAB_IMAGE} className={classes.grab} onClick={() => handleChange('grab')}/>

            <Box className={classes.rightSection}>
                <OnlinePredictionIcon onClick={() => handleChange('online')} sx={{color : active === 'online' ? 'rgb(65,139,235)' : 'none'}}/>
                <PersonIcon onClick={() => handleChange('profile')} sx={{color : active === 'profile' ? 'rgb(65,139,235)' : 'none'}}/>
            </Box>
        </Box>
    )
}
export default Footer ;