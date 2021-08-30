import React from 'react';
import styles from './ProductsTitleFilterComponent.module.scss';
import { productModule} from '../../../../helpers/GetState';
import { TextField , InputAdornment} from '@material-ui/core';
import { useSelector } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search';

export default function ProductsTitleFilterComponent({onChangedFilterTitle}) {

    const { title } = useSelector(state => productModule(state).filterData)

    const changedFilterTitleHandler = (e) => { 

        const { value } = e.target;
        onChangedFilterTitle('title' , value);
    }

    return (
        <TextField 
            label="Поиск по названию" 
            classes={{root: `${styles['input-filed-root']} ${styles['search-title-fileld']}`}}
            variant="outlined" 
            value={title} 
            onChange={changedFilterTitleHandler}
            size="small"
            InputProps={{
                endAdornment: (<InputAdornment position="end">
                    <SearchIcon />
                </InputAdornment>)
            }} />
    )
}