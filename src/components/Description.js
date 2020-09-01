import React from 'react'
import styled from 'styled-components'

function Description({ photo }) {
    return (
        <div>
            <Title>{photo.title}</Title>
            <Paragraph>{photo.explanation}</Paragraph>
        </div>
    )
}

export default Description

const TextDiv = styled.div`
display: flex;
background-color: #ddd;
`


const Title = styled.h1`
text-align: center;
margin: auto;
margin-top: 10px;
margin-bottom: 10px;
`

const Paragraph = styled.p`
width: 80%;
text-align: center;
margin: auto;
`