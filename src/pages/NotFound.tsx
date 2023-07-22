import styled from "styled-components"
import React from 'react'
import Image from "../components/Image"
import Text from "../components/Text"

export const NotFound = () => {
    return <Container>
        <ImageContainer>
            <div>
                <Text fontSize="200px"><span>404</span></Text>
                <Text fontSize="30px">Oops! This bubble popped :(</Text>
            </div>

        </ImageContainer>

    </Container>
}

const Container = styled.div`
    height: 100%;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    overflow: hidden;
`
const ImageContainer = styled.div`
    background: url('/images/decoration/bubble.png');
    background-size: cover;
    background-repeat: no-repeat;
    margin: 5% 30%;
    width: 700px;
    height: 700px;
    position: relative;

    animation: slide-bubble 10s ease-in-out infinite;
    @keyframes slide-bubble {
    0% {
        -webkit-transform: translateY(5%);
                transform: translateY(5%);
    }
    50% {
        -webkit-transform: translateY(0%);
                transform: translateY(0%);
    }
    100% {
        -webkit-transform: translateY(5%);
                transform: translateY(5%);
    }
    }
`