import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default function PageLoading() {
    return <CircularProgress color={'#c80000'} style={{margin: '10px auto', display: 'block'}} />;
}
