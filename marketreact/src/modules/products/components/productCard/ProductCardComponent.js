import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function ProductCardComponent ({ title , discription }) {

    return (
        <div className="col-4">
        <Card>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {discription}
                </Typography>
            </CardContent>
        </Card>
        </div>
    )
}