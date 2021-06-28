import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const CustomButton = (props) => {
    const {text, variant} = props

    return (
        <Button variant={variant}>{text}</Button>
    )
}

export default CustomButton