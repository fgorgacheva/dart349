import React from "react";
import { ContentContainer } from "../components/ContentContainer";
import Text from "../components/Text";
import styled from "styled-components";
import RoundedBox from "../components/RoundedBox";
import { useNavigate } from "react-router-dom";
import GalleryTile from "../components/GalleryTile";
import { MiscProjects } from "../MiscProjectData";

interface UXGalleryProps {

}

interface UXGalleryState {

}

class MiscGallery extends React.Component<UXGalleryProps, UXGalleryState> {
    render() {
        return (
            <ContentContainer>
                <Main>
                    <Header>
                        <Text fontSize="30px" fontFamily="montserrat" padding="0 0 50px 0"><span>Miscellaneous</span> Gallery</Text>
                        {/* <RoundedBox height="fit-content" width="fit-content" padding="15px" href="/3D">
                            <Text fontSize="15px" fontFamily="montserrat">PORTFOLIO</Text>
                        </RoundedBox> */}
                    </Header>
                    <RoundedBox padding="20px">
                        <Text fontSize="20px" fontWeight="">
                            Art has always been a huge part of my life in so many ways and thus grew up very creative! This gallery includes all the uncategorized random art projects I am proud to share!
                        </Text>
                    </RoundedBox>

                    <Collection>
                        {Object.keys(MiscProjects).map((key) => {
                            const project = MiscProjects[key];
                            return <GalleryTile width="24vw" href={`/misc/project/${key}`} imgSrc={`/images/projects/misc/${key}/${project.cover}`} title={project.title}>
                            </GalleryTile>
                        })}

                    </Collection>

                </Main>



            </ContentContainer>);
    }
}

export default MiscGallery;

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