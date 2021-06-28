import React from 'react'
import CustomButton from "../common/CustomButton.js"
import { styled } from '@material-ui/core/styles';

const CustomDiv = styled.div`
margin: 100px;
`

const Home = () => {
    return (
        <div>
            <h1>
                Home
            </h1>
            <CustomDiv>
                <CustomButton variant = "outlined" text = "Default" />
            </CustomDiv>
            <CustomButton variant = "contained" text = "Hoiiii" />
        </div>
    )
}
export default Home