import React from 'react';
import { TextField  , Button} from '@material-ui/core';

import styles from './RegisterMainComponent.module.scss';

export default function RegisterMainComponent(props) {

    return (
        <div className="col-12">

            <form className={styles['form-box']} noValidate autoComplete="off">

                <h2 className={styles['title']}>Регистрация</h2>

                <div className={styles['group-inputs']}>
                    <TextField id="standard-basic" classes={{root: styles['input-filed-root']}} label="Email"></TextField>
                </div>
                <div className={styles['group-inputs']}>
                    <TextField id="standard-basic" classes={{root: styles['input-filed-root']}} label="Логин"></TextField>
                </div>
                <div className={styles['group-inputs']}>
                    <TextField id="standard-basic" classes={{root: styles['input-filed-root']}} label="Пароль"></TextField>
                </div>
                <div className={styles['group-inputs']}>
                    <TextField id="standard-basic" classes={{root: styles['input-filed-root']}} label="Повторите пароль"></TextField>
                </div>
                <div className={styles['group-button']}>
                    <Button color="primary" variant="contained" className={styles['sender-btn']}>Регистрация</Button>
                </div>
            </form>
        </div>
    )
}