import React from 'react';
import { InputAdornment , IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function VisiblyAdornment ({ name , isVisible , onSetVisiblity }) {

    const onClickVisibleHandler = (isVisiblity) => {
        
        onSetVisiblity(name , isVisiblity);
    }

    const getVisiblityIcon = () => {

        return isVisible ? <VisibilityOff /> : <Visibility />
    }

    return (
        <InputAdornment position="end">
            <IconButton 
                onMouseDown={e => onClickVisibleHandler(true)} 
                onMouseUp={e => onClickVisibleHandler(false)} 
                onMouseOutCapture={e => onClickVisibleHandler(false)}>
                    
            { getVisiblityIcon() }
            </IconButton>
        </InputAdornment>
    )
}