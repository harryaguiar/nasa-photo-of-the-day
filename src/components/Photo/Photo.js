import React from 'react'
import styled from 'styled-components'

function Photo({ photo }) {




    return (
        <PhotoDiv>
            {photo.media_type === 'image' ? <PhotoStyle tt src={photo.url} alt="" /> : <iframe width="560" height="315" src={photo.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}


        </PhotoDiv>
    )
}

export default Photo

const PhotoDiv = styled.div`
display: flex;

align-items: center;
justify-Content: center;
`

const PhotoStyle = styled.img`

    border: 5px solid;
    border-color: ${ props => props.tt ? 'red' : 'yellow'};
    margin: auto;
    text-align: center;
    `