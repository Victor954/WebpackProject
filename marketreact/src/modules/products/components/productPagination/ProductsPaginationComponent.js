import React from 'react'
import { Pagination } from '@material-ui/lab';

export default function ProductsPaginationComponent ({onChangePagination , pageCount , page}) {

    const onChangePaginationHandler = (event , value) => {

        onChangePagination(value)
    }

    return (

        <div className="row">
            <div className="col-12">
                <Pagination count={pageCount} page={page} onChange={onChangePaginationHandler} />
            </div>
        </div>
    )
}