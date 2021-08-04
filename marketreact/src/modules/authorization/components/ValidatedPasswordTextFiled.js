import React from 'react';
import ValidatedTextField from './ValidatedTextField';
import VisiblyAdornment from './VisiblyAdornment';

export default function ValidatedPasswordTextFiled({ filedData, name , onVisible , ...rest}) {

    const { isVisible } = filedData; 
    const getType = () => isVisible ? 'text' : 'password';

    return (
        <ValidatedTextField 
            { ...rest } 
            filedData={filedData} 
            name = {name}
            type={ getType() }
            InputProps={{
                endAdornment: <VisiblyAdornment 
                name={name}
                isVisible={isVisible} 
                onSetVisiblity={onVisible}/>,
        }}/>
    )
}