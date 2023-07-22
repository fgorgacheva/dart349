import React from "react";
import { ContentContainer } from "../components/ContentContainer";
import Text from "../components/Text";
import styled from "styled-components";
import RoundedBox from "../components/RoundedBox";
import { useNavigate } from "react-router-dom";
import GalleryTile from "../components/GalleryTile";
import { UXProjects } from "../UXProjectsData";

interface UXGalleryProps {

}

interface UXGalleryState {

}

class UXGallery extends React.Component<UXGalleryProps, UXGalleryState> {
    render() {
        return (
            <ContentContainer>
                <Main>
                    <Header>
                        <Text fontSize="30px" fontFamily="montserrat" padding="0 0 50px 0"><span>UX</span> Gallery</Text>
                        <RoundedBox height="fit-content" width="fit-content" padding="15px" href="/ux/portfolio">
                            <Text fontSize="15px" fontFamily="montserrat">PORTFOLIO</Text>
                        </RoundedBox>
                    </Header>
                    <RoundedBox padding="20px">
                        <Text fontSize="20px" fontWeight="">
                            Here we have my academic and professional UX work.
                        </Text>
                    </RoundedBox>

                    <Collection>
                        {Object.keys(UXProjects).map((key) => {
                            const project = UXProjects[key];
                            return <GalleryTile width="24vw" href={`/ux/project/${key}`} imgSrc={`/images/projects/UX/${key}/${project.thumbnail}`} title={project.title}>
                            </GalleryTile>
                        })}

                    </Collection>

                </Main>



            </ContentContainer>);
    }
}

export default UXGallery;

const Main = styled.div`
    width: 100%;
    padding: 5%;
    text-align: left;
    
`;

const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    div {
        justify-self: flex-end;
    }
`;

const Collection = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;