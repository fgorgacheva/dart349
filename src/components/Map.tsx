import React, { Component } from 'react';
import styled from 'styled-components';
import RoundedBox from './RoundedBox';
import UxIcon from '../images/ux-glass-clear.png'
import ThreeDGlassIcon from '../images/3D-glass-clear.png'
import MiscIcon from '../images/misc.png'
import MapMenuButton from './MapMenuButton';
import Text from './Text';
import Image from './Image';
import { Link } from 'react-router-dom';


interface Props {
  children?: React.ReactNode;
}

interface State {

}

export class Map extends Component<Props, State> {
  render() {
    return (
      <Main>
        <Welcome>Welcome!</Welcome>
        <Brief>This is my <span>virtual library</span>. It contains all the work I am most proud of <br></br> and that I am eager to share with the world!</Brief>

        <MainGrid>

          <LeftSection>
            {/* about me */}
            <RoundedBox padding="0px 30px" href="" flexDirection='column'>
              <Text padding='20px 0' fontSize='25px'>Explore and learn more about <span>me</span> and my <span>work</span>!</Text>
              <Text fontSize='20px'>I specialize in UX Design and 3D modeling and I love cats!</Text>
              <Image src="/images/decoration/bobacat-spill.png" width='100%' />
            </RoundedBox>
            <BottomHalf>
              {/* cv button */}
              <RoundedBox padding="10px" href="/ux/project/this" center>
                <Image src="/images/icons/about.png" width='5vh' />
                <Text fontSize="20px" fontWeight='800' padding='10px 0 0 0'></Text>
              </RoundedBox>
              {/* contact button */}
              <RoundedBox padding="15px" href="/" hash='contact'>
                <Icons>
                  <img src="/images/icons/mail1.png" alt="" />
                  <img src="/images/icons/linkedin1.png" alt="" />
                  <img src="/images/icons/github1.png" alt="" />
                </Icons>
              </RoundedBox>
            </BottomHalf>
          </LeftSection>

          <CenterSection>
            {/* photo */}
            <img src="/images/me.jpg" alt='' />
          </CenterSection>

          <RightSection>
            {/* Ux  */}
            <MapMenuButton invert={true}
              topMenuButton={<RoundedBox padding='15px' href="" center>
                <Text fontSize={"20px"}>Portfolio</Text>
              </RoundedBox>}
              bottomMenuButton={<RoundedBox padding='15px' href="/ux" center>
                <Text fontSize={"20px"}>Gallery</Text>
              </RoundedBox>}
              onClick={() => { }} center={true}>
              <ButtonImage src={UxIcon} />
            </MapMenuButton>
            {/* 3d */}
            <MapMenuButton invert={false}
              topMenuButton={<></>
                // <RoundedBox padding='15px' href="" center>
                //   <Text fontSize={"20px"}>Portfolio</Text>
                // </RoundedBox>
              }
              bottomMenuButton={<RoundedBox padding='15px' href="/3d" center>
                <Text fontSize={"20px"}>Gallery</Text>
              </RoundedBox>}
              onClick={() => { }} center={true}>
              <ButtonImage src={ThreeDGlassIcon} />
            </MapMenuButton>
            {/* misc */}
            <MapMenuButton topMenuButton={<></>}
              bottomMenuButton={<></>} onClick={() => { }} center={true}>
              <ButtonImage src={MiscIcon} />
            </MapMenuButton>
          </RightSection>
        </MainGrid>

        <Contact id="contact">
          <Text fontSize='30px' padding='0 0 15px 0'><span>Contact</span> me!</Text>
          <ContactContainer >
            <RoundedBox height="100%" padding={"0"}>
              <Links>
                <StyledLink href="mailto:fgorgacheva@gmail.com">
                  <img src="/images/icons/mail1.png" alt="" />
                  <Text fontSize='20px'>fgorgacheva@gmail.com</Text>
                </StyledLink>
                <StyledLink target='_blank' rel='noopener noreferrer' href="https://linkedin.com/in/fgorgacheva">
                  <img src="/images/icons/linkedin1.png" alt="" />
                  <Text fontSize='20px'>in/fgorgacheva</Text>
                </StyledLink>
                <StyledLink target='_blank' rel='noopener noreferrer' href="https://github.com/fgorgacheva">
                  <img src="/images/icons/github1.png" alt="" />
                  <Text fontSize='20px'>/fgorgacheva</Text>
                </StyledLink>
              </Links>
              <JijiDiv>
                <JijiImage src='/images/decoration/bobacat-stack.png' height="100%" />
              </JijiDiv>

            </RoundedBox>

            <BobaDiv>
              <RoundedBox center>
                <Image src='/images/decoration/bobacat.png' height='100%' width='100%' />

              </RoundedBox>
            </BobaDiv>
          </ContactContainer>


        </Contact>

      </Main>
    )
  }
}

// Main Styles ---------------------------------------------------------
const Main = styled.div`
  width: calc(100vw - 150px);
  height: 100vh;

  font-family: nunito;
  color: #5f5f5f;

  font-size: 80%;

  padding-left: 5%;
  padding-right: 5%;

`;

const Welcome = styled.h2`
font-weight: 600;
`;

const Brief = styled.h1`
  margin-top: 50px;
  font-weight: 300;
  span{
    font-weight: 800;
  }
`;

const MainGrid = styled.div`
  height: 40vh;
  align-items: center;
  margin-top: 5%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
`;

// Left Styles ---------------------------------------------------------

const LeftSection = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-column: 1 1/2;
  grid-row: 1 1;
  row-gap: 15px;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  img{
    margin: auto;
    width: 60px;
    height: 60px;
  }
`;

const BottomHalf = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  column-gap: 15px;
`;

// Center Styles ---------------------------------------------------------

const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center;s */
  
  img{
    border-radius: 100%;
    height: 20vw;
    /* width: 50%; */
    
    box-shadow: -5px 10px 15px -3px rgba(0,0,0,0.1);
  }
`;

// Right Styles -----------------------------------------------------------

const RightSection = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  grid-template-rows:   minmax(0,1fr);
`;

const ButtonImage = styled.img`
  /* width: 15vh; */
  width: 100%;
  padding: 15px;
`;



// Contact Styles -----------------------------------------------------------

const Contact = styled.div`
  padding-top: 30vh;
  padding-bottom: 10vh;
`;

const ContactContainer = styled.div`
  
  display: grid;
  grid-template-columns: minmax(0,4fr) minmax(0,200px);
  column-gap: 20px;
  grid-template-rows: minmax(0,1fr);
  height: 300px;
  position: relative;
`;

const Links = styled.div`
  padding: 20px 20px;
  width: 100%;
  display: flex;
  grid-gap: 5%;
  flex-wrap: wrap;
`;

const StyledLink = styled.a`
  align-items: center;
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  text-decoration: none;
  img{
    width: 40px;
    margin:0;
    padding: 0;
  }
  text-align: left;
`;

const JijiImage = styled(Image)`
`
const JijiDiv = styled.div`
  align-items: flex-end;
  justify-content: center;
  height: 50%;
  position: absolute;
  bottom: 0;
  width: 80%;
  display: flex;
  img{
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

const BobaDiv = styled.div`
img{
  object-fit: contain
}
`