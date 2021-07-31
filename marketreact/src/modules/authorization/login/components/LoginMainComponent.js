import React from 'react';
import { TextField  , Button} from '@material-ui/core';

import styles from './LoginMainComponent.module.scss';

export default function LoginMainComponent(props) {

    return (
        <div className="col-12">

            <form className={styles['form-box']} noValidate autoComplete="off">

                <h2 className={styles['title']}>Войти</h2>

                <div className={styles['group-inputs']}>
                    <TextField id="standard-basic" classes={{root: styles['input-filed-root']}} label="Логин"></TextField>
                </div>
                <div className={styles['group-inputs']}>
                    <TextField id="standard-basic" classes={{root: styles['input-filed-root']}} label="Пароль"></TextField>
                </div>
                <div className={styles['group-button']}>
                    <Button color="primary" variant="contained" className={styles['sender-btn']}>Войти</Button>
                </div>
            </form>
        </div>
    )
}