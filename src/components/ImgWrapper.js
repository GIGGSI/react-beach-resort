import React from 'react'
import styled from 'styled-components'
import { imgData } from './data/imgData'

const ImgWrapper = () => {
    const [data, setData] = React.useState(imgData)

    return <ImgSection>
        <ImgContainer>
            {data.map((item) => {
                return <SingleImg key={item.id}>
                    <img src={item.imgUrl} alt="img" />
                </SingleImg>
            })}
        </ImgContainer>
    </ImgSection>
}

const ImgSection = styled.div`
padding-top:5rem;
width:100%;
height:100%;
/* background:#222; */
`

const ImgContainer = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;


@media screen and (max-width: 900px) {
    grid-template-columns:1fr 1fr;

}
@media screen and (max-width: 640px) {
    grid-template-columns:1fr;

}
`
const SingleImg = styled.div`

img {
    width:100%;
    /* height:30rem; */
    opacity:0.9;
    &:hover{
opacity:1;
}
}

`

export default ImgWrapper;