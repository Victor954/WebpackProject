import React from 'react';
import styles from './ProductsTitleFilterComponent.module.scss';
import { TextField , InputAdornment} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function ProductsTitleFilterComponent(props) {

    const [value , setValue] = React.useState('');

    const changedFilterTitleHandler = (event) => { 

        const { value } = event;
        setValue(value);
    }

    return (
        <TextField 
            label="Поиск по названию" 
            variant="outlined" 
            value={value} 
            onChange={changedFilterTitleHandler}
            size="small"
            InputProps={{
                endAdornment: (<InputAdornment position="end">
                    <SearchIcon />
                </InputAdornment>)
            }} />
    )
}