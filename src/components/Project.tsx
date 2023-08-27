import React, { Component } from 'react';
import styled from 'styled-components';
import Text from './Text';
import { ThreeDProjects } from "../3DProjectsData";
import { useLocation, useParams } from 'react-router-dom';
import Image from './Image';
import RoundedBox from './RoundedBox';
import { UXProjects } from '../UXProjectsData';
import { MiscProjects } from '../MiscProjectData';
interface Props {
}
// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}
function getProject(type: string, alias: string) {
    switch (type) {
        case "ux":
            return UXProjects[alias + ""];
        case "3D":
            return ThreeDProjects[alias + ''];
        case "misc":
            return MiscProjects[alias + ''];
    }
}
export const Project = ({ }: Props) => {

    let { alias, type } = useParams();



    const project = getProject(type + "", alias + "");

    console.log(ThreeDProjects)
    return (<>
        {project &&
            <Main>

                <Cover>
                    <Image src={`/images/projects/${type === "ux" ? type.toLocaleUpperCase() : type}/${alias}/${project.cover}`} width='100%' height='100%'></Image>
                </Cover>

                <Header>

                    <Text fontSize="30px" fontFamily="montserrat" padding="0 0 50px 0"><span>{project.title}</span></Text>
                    <Icons>
                        {project.apps?.map(icon =>
                            <Image src={`/images/projects/${type === "ux" ? type.toLocaleUpperCase() : type}/${icon}`} width='35px' height='35px'></Image>
                        )}
                    </Icons>
                </Header>

                <RoundedBox margin='0 15% 50px' width='70%' padding='30px' >
                    <Text fontSize="20px" fontFamily="nunito" >{project.brief}</Text>
                </RoundedBox>


                {project.extraImages && <Carousel numImg={project.extraImages.length} >
                    {project.extraImages.map(src => {
                        return <Image src={`/images/projects/${type === "ux" ? type.toLocaleUpperCase() : type}/${alias}/${src}`} />
                    })}
                </Carousel>}


                {/* <Carousel>extra images of the project that people can view should eventually be clickable to enlarge</Carousel> */}
                {project.descriptions && project.images &&
                    project.descriptions.map((description, index) => {
                        const length = project.images?.length ? project.images?.length : 0;
                        let text = <Text fontSize="18px" padding={"0 15%"} fontFamily="nunito">{description}</Text>

                        if (description.startsWith("##")) {
                            const split = description.split("\n\n");
                            const title = split[0].replace("##", "");
                            const body = split[1];
                            text = <><Text fontSize="18px" fontFamily="nunito" padding={"50px 15% 10px"} fontWeight='800'>{title}</Text>
                                <Text fontSize="20px" padding={"0 15%"} fontFamily="nunito">{body}</Text></>
                        }
                        return <>
                            {text}
                            {length > index ? <UXImage src={`/images/projects/UX/${alias}/${project.images![index]}`} /> : ''}
                        </>

                    })
                }
                {project.description && <Text fontSize="18px" fontFamily="nunito" padding='30px 15%'>{project.description}</Text>}

            </Main >}</>
    )
}

const Main = styled.div`
        width: calc(100vw - 150px);
        padding: 5% 10%;
        text-align: left;
        `;

const Header = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 15%;
        padding-top: 40px;
        margin-bottom: auto;
        `;

const UXImage = styled.img`
    width: 70%;
    margin: 5% 15%;
    border-radius: 15px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`
const Icons = styled.div`
        img {
        margin-left: 15px;
        display: flex;
        justify-content: right;
        align-items: right;
        
    }
        display: flex;
        justify-content: right;
        `;

const Cover = styled.div`
        img {
            border-radius: 30px;
            box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        }
        `;

const Carousel = styled.div<{ numImg: number }>`
        width: 70%;
        margin: 0px 15%;
        display: grid;
        grid-template-columns: ${p => p.numImg > 3 ? `repeat(3, 1fr)` : `repeat(${p.numImg}, 1fr)`};
        gap: 15px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 15px;
            box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        }
        `