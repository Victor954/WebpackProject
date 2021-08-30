import React from 'react'
import styles from './TitleComponent.module.scss';
import { Typography } from '@material-ui/core';

export function TitleComponent({ text }) {

    return (
        <div className="container">
            <Typography className={styles['title-root']} variant="h4" component="h4">
                { text }
            </Typography>
        </div>
    )
}