import React from 'react'
import { Paper , Typography } from '@material-ui/core'
import styles from './ErrorServerComponent.module.scss';

export function ErrorServerComponent({ children , data }) {

    if(!data) {
        return children
    }

    const { message } = data;

    return (
        <div className="container">
        <Paper classes={{root: styles['error-paper-root']}} variant="outlined">

            <Typography variant="h4" component="h4">
                Ошибка запроса
            </Typography>

            <Typography className={styles['error-msg-root']} variant="body1" component="p">
                { message }
            </Typography>
        </Paper>
        </div>
    )
}
