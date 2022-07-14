import * as React from 'react';

import { connect } from 'react-redux';

import { SetDepositAmount, SetWithdrawAmount } from '../../redux/actions/order';

import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import {
    Box,
    InputAdornment,
    Button,
    DialogTitle,
    Dialog,
    DialogContent,
    DialogActions,
    TextField,
    Tooltip,
    IconButton,
    Input,
    InputLabel,
    Avatar
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    dialog : {
        "& .MuiDialogContent-root" : {
            padding : '0px'
        },
    },
    root : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'flex-start',
        justifyContent : 'space-around',
        height : '250px',

        "& .MuiOutlinedInput-root" : {
            width : '250px',
            height : '40px',
            ['@media (max-width : 500px)'] : {
                width : '180px',
            }
        },
        "& .MuiAvatar-img" : {
            objectFit : 'unset'
        },
        "& .MuiAvatar-root" : {
            width : '100px',
            height : '100px'
        },
        "& .MuiInputLabel-root" : {
            display : 'flex',
            alignItems : 'center'
        }
    },
    address : {
        display : 'flex',
        alignItems : 'center',
        marginLeft : '30px',

        ['@media (max-width : 500px)'] : {
            fontSize : '14px',
            marginLeft : '20px',
        }
    },
    amount : {
        display : 'flex',
        alignItems : 'center',
        marginLeft : '80px',

        ['@media (max-width : 500px)'] : {
            fontSize : '14px',
            marginLeft : '65px',
        }
    },
    currency : {
        marginLeft : '80px',
        
        ['@media (max-width : 500px)'] : {
            fontSize : '14px',
            marginLeft : '55px',
        }
    }
}));

const DetailDialog = (props) => {

    const { open, onClose, title, SetDepositAmount, SetWithdrawAmount } = props;
    
    const classes = useStyles();

    const addressCtrl = React.useRef(null);
    const [ text, setText ] = React.useState('');
    const [ depositAmount, setDepositAmount ] = React.useState();
    const [ screen, setScreen ] = React.useState({ preview: "", raw: "" });
  
    const handleClose = () => { 
        onClose();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDepositAmount(event.target.value);
    }

    const handleSubmit = async () => {
        if(title === 'Deposit')
            await SetDepositAmount(parseFloat(depositAmount));
        if(title === 'Withdraw')
            await SetWithdrawAmount(parseFloat(depositAmount));
        onClose();
    }

    const copyToClipboard = async () => {
        setText('0x2Fc3b6eA92181Db2B98a66940AA5A3e0Bf1ff8da');
        await navigator.clipboard.writeText(text);
    }

    const handleFileChange = (e) => {
        if(e.target.files.length) {
            setScreen({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
        }
    }
    return (
      <Dialog onClose={handleClose} open={open} className={classes.dialog} fullWidth>
        <DialogTitle sx={{textAlign : 'center'}}>{title}</DialogTitle>
        <DialogContent className={classes.root}>
            <Box className={classes.currency}>
                Currency : TRC_USDT
            </Box>
            <Box className={classes.address}>
                Wallet&nbsp;address&nbsp;
                    <TextField
                        ref = {addressCtrl}
                        size = {'small'}
                        value = {'0x2Fc3b6eA92181Db2B98a66940AA5A3e0Bf1ff8da'}
                        disabled
                        InputProps = {{
                            endAdornment : <InputAdornment position='end' className={classes.copyIcon}>
                                    <Tooltip title="Copy" placement="right" arrow>
                                        <IconButton onClick={() => copyToClipboard()}><ContentCopyOutlinedIcon /></IconButton>
                                    </Tooltip>
                            </InputAdornment>,
                            inputProps: {
                                min : 0
                            }
                        }}
                    />
            </Box>
            <Box className={classes.amount}>
                Amount&nbsp;
                <TextField
                    required
                    fullWidth
                    value={depositAmount}
                    onChange={handleChange}
                />
            </Box>
            {
                title === 'Deposit' &&
                <Box sx={{width : '100%', display : 'flex', justifyContent : 'center'}}>
                    <InputLabel htmlFor='upload-screen'>
                        {
                            screen.preview ? (
                                <Avatar src={screen.preview}/>
                            ) : (
                                <>
                                    <CloudUploadIcon/> &nbsp;&nbsp;&nbsp; Upload Screen.
                                </>
                            )
                        }
                    </InputLabel>
                    <Input
                        type='file'
                        id="upload-screen"
                        style={{display : 'none'}}
                        onChange={handleFileChange}
                    />
                </Box>
            }
        </DialogContent>
        <DialogActions sx={{display : 'flex', justifyContent : 'space-between', p : 3}}>
            
            <Button variant='contained' color='error' sx={{width : '170px'}} onClick={handleClose}>
                Cancel
            </Button>
            <Button variant='contained' sx={{width : '170px'}} onClick={handleSubmit}>
                Submit
            </Button>
        </DialogActions>
      </Dialog>
    );
}

const mapStateToProps = state => ({
}) ;

const mapDispatchToProps = {
    SetDepositAmount,
    SetWithdrawAmount
}

export default connect(mapStateToProps , mapDispatchToProps)(DetailDialog) ;