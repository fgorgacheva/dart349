import React from "react";
import { ContentContainer } from "../components/ContentContainer";
import Text from "../components/Text";
import styled from "styled-components";
import RoundedBox from "../components/RoundedBox";
import { useNavigate } from "react-router-dom";
import GalleryTile from "../components/GalleryTile";
import { ThreeDProjects } from "../3DProjectsData";

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
                        <Text fontSize="30px" fontFamily="montserrat" padding="0 0 50px 0"><span>3D</span> Gallery</Text>
                        {/* <RoundedBox height="fit-content" width="fit-content" padding="15px" href="/3D">
                            <Text fontSize="15px" fontFamily="montserrat">PORTFOLIO</Text>
                        </RoundedBox> */}
                    </Header>
                    <RoundedBox padding="20px">
                        <Text fontSize="20px" fontWeight="">
                            I am deeply fascinated by the world of 3D and its limitless possibilities. With an unwavering commitment to excellence, I aim to bring imagination to life through crafting intricate scenes and models that captivate and inspire!
                        </Text>
                    </RoundedBox>

                    <Collection>
                        {Object.keys(ThreeDProjects).map((key) => {
                            const project = ThreeDProjects[key];
                            return <GalleryTile href={`/3D/project/${key}`} imgSrc={`/images/projects/3D/${key}/${project.cover}`} title={project.title}>
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