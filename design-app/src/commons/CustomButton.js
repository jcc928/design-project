import React from 'react';
import Button from '@material-ui/core/Button';


const CustomButton = (props) => {
    const {text, variant, buttonClicked, color} = props

    return (
        <Button color={color} onClick={(e) => buttonClicked(e)} variant={variant}>{text}</Button>
    )
}

export default CustomButton