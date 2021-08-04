import React from 'react';
import { TextField } from '@material-ui/core';
import styles from './Form.module.scss';

export default function ValidatedTextField({
    name, 
    label,
    disabled, 
    filedData, 
    initialValdi, 
    onChange, 
    ...rest}) {
    
    const { textValue  , isChanegd } = filedData;
    
    const { msg , isValidate }  = initialValdi(textValue, name);

    return (
        <div className={styles['group-inputs']}>
            <TextField
                size="small"
                variant="outlined"
                classes={{root: styles['input-filed-root']}}
                name={name}
                label={label}
                disabled={disabled}
                value={textValue} 
                helperText={(isChanegd) ? msg : ''}
                onChange={onChange}
                error={!isValidate && isChanegd}
                {...rest}>     
            </TextField>
        </div>
    )
}