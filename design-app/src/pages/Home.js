// React import
import React, {useState} from 'react'
//Custom components
import CustomButton from '../commons/CustomButton'
import {Button} from "@material-ui/core"

//Custom styling import
import styled from 'styled-components';

const CustomDiv = styled.div`
margin: 100px;
`


const Home = () => {

    const [background, setBackground] = useState('white');
    const buttonClicked = () => {
        setBackground('secondary')
        console.log(background)
    }
    return (
        <div>
            <h1>
                Home
            </h1>
            <Button onClick={(e) => buttonClicked(e)}>Press me</Button>
            <CustomDiv>
                <CustomButton color={background} buttonClicked={(e)=> buttonClicked(e)} variant="outlined" text="Default" />
            </CustomDiv>
            <CustomButton variant = "contained" text = "Hoiiii" />
        </div>
    )
}
export default Home