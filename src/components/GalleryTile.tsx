import React, { PropsWithChildren, useState } from "react";
import styled from "styled-components";
import Text from "./Text";
import Image from "./Image";


interface Props {
    //src, name,
    href: string;
    imgSrc: string;
    title: string;
    width?: string;
}

function GalleryTile({ imgSrc, title, href, width }: PropsWithChildren<Props>) {
    return (
        <Main href={href}>
            <ImageContainer width={width}>
                <Img src={imgSrc}></Img>
                <TextContainer>
                    <Text fontSize="1.5vw" fontFamily="montserrat" fontWeight="400" color="White">{title}</Text>
                </TextContainer>
            </ImageContainer>
        </Main>
    );
}

const Main = styled.a`
    position: relative;
`;

const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;

    &:hover{
        opacity: 50%;
    }
`

const ImageContainer = styled.div<{ width?: string }>`
    position: relative;
    margin: 50px 0;
    width: ${p => p.width || "18vw"};
    height: 18vw;

    border-radius: 15px;

    transition: ease 0.15s;
    overflow: hidden;

    box-shadow: -5px 10px 15px -3px rgba(0,0,0,0.1);
    &:hover{
        transition: ease 0.15s;
        transform: scale(1.05);

        div {
            display: flex;
        }
        img {
            transition: ease 0.15s;
            /* opacity: 80%; */
            filter: blur(5px);
        }
    }
`;

const TextContainer = styled.div`
    position: absolute;
    transform: scale(1.05);
    border-radius: 15px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    mix-blend-mode: difference;
    
`;

export default GalleryTile;