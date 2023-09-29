import React from "react";
import { ContentContainer } from "../components/ContentContainer";
import styled from "styled-components";
import RoundedBox from "../components/RoundedBox";
import { UXProjects } from "../UXProjectsData";
import Text from "../components/Text";
import Image from "../components/Image";
import { UXProjectTile } from "../components/UXProjectTile";

interface UXPortfolioProps {

}

interface UXPortfolioState {

}

class UXPortfolio extends React.Component<UXPortfolioProps, UXPortfolioState> {
    render() {
        return (
            <ContentContainer>
                <Anchor id="top" />
                <Main>
                    <Intro>
                        <Greeting>
                            <Text fontSize="50px" fontFamily="nunito" fontWeight="600">Hi, my name's Felicia!</Text>
                            <Gap></Gap>
                            <Text fontSize="40px" fontFamily="nunito" fontWeight="400">I’m a creative designer, weaving pixels and dreams with a creative gleam!✨</Text>
                        </Greeting>
                        <Picture width="100px" height="100px"></Picture>
                    </Intro>

                    <Portfolio>

                        <Anchor id="portfolio" />
                        <Text fontSize="35px" fontFamily="nunito" fontWeight="700" align="center">PORTFOLIO</Text>
                        <Gap></Gap><Gap></Gap><Gap></Gap>
                        {Object.keys(UXProjects).map((key, i) => {
                            const project = UXProjects[key];
                            return <UXProjectTile rightSide={i % 2 === 1} projectKey={key} project={project}></UXProjectTile>
                        })}
                    </Portfolio>

                    <AboutMe>

                        <Anchor id="about" />
                        <Text fontSize="35px" fontFamily="nunito" fontWeight="700" align="center">ABOUT ME</Text>

                        <Description>
                            <Text fontSize="30px" fontFamily="nunito" fontWeight="400">I strive to craft <span>user-centered</span> and <span>visually appealing</span> designs that <span>elevate the user experience</span>.</Text>
                            <Gap></Gap>
                            <Text fontSize="25px" fontFamily="nunito" fontWeight="400">Based in Montreal, I am a recent graduate from Concordia University. I specialize in UI | UX Design. My passion stems from the potential to have a positive impact on people's digital experiences. I'm committed to conducting thorough user research, iterating based on feedback, and employing data-driven insights to continuously enhance the user experience. My goal is to craft accessible, creative, and polished designs that elevate product usability and user satisfaction.</Text>
                        </Description>


                    </AboutMe>



                </Main>
                <Details>

                    {/* Education */}
                    <Education>
                        <Text fontSize="25px" fontFamily="montserrat" fontWeight="400" color="#C092F9">EDUCATION</Text>
                        <table>
                            <tr>
                                <td><Text fontSize="20px" fontFamily="montserrat" fontWeight="400" color="#918CAB">B.F-A. Computation Arts</Text></td>
                                <td><Text fontSize="20px" fontFamily="montserrat" fontWeight="400" color="#918CAB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;2019</Text></td>
                            </tr>
                            <tr>
                                <td><Text fontSize="20px" fontFamily="montserrat" fontWeight="400" color="#918CAB">DEC Computer Science </Text></td>
                                <td><Text fontSize="20px" fontFamily="montserrat" fontWeight="400" color="#918CAB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;2023</Text></td>
                            </tr>
                        </table>
                    </Education>

                    {/* Experience */}
                    <Experience>
                        <Text fontSize="25px" fontFamily="montserrat" fontWeight="400" color="#C092F9">EXPERIENCE&nbsp;<br></br></Text>

                        <table>
                            <tr>
                                <td><Text fontSize="20px" fontFamily="montserrat" fontWeight="400" color="#918CAB">Neptronic - UI | UX Contract</Text></td>
                                <td><Text fontSize="20px" fontFamily="montserrat" fontWeight="400" color="#918CAB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;2021 - 2023</Text></td>
                            </tr>
                            <tr>
                                <td><Text fontSize="20px" fontFamily="montserrat" fontWeight="400" color="#918CAB">DevStack - Freelance</Text></td>
                                <td><Text fontSize="20px" fontFamily="montserrat" fontWeight="400" color="#918CAB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;2021</Text></td>
                            </tr>
                            <tr>
                                <td><Text fontSize="20px" fontFamily="montserrat" fontWeight="400" color="#918CAB">Summit-Tech - Programmer Internship</Text></td>
                                <td><Text fontSize="20px" fontFamily="montserrat" fontWeight="400" color="#918CAB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;2019</Text></td>
                            </tr>
                        </table>
                    </Experience>

                    {/* Skills */}
                    <Skills>
                        <Text fontSize="25px" fontFamily="montserrat" fontWeight="400" color="#C092F9">SKILLS</Text>
                        <Text fontSize="20px" fontFamily="montserrat" fontWeight="400" color="#918CAB">&nbsp;<br></br>UI | UX&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Interaction Design&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Figma&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Adobe XD&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Front-End Development (HTML, CSS, JS)&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;OOP <br></br> English  Fluent&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;French Proficient&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Bulgarian Native</Text>
                    </Skills>
                </Details>

                <Footer>
                    <Contact>
                        <Anchor id="contact" />
                        <Text fontSize="35px" fontFamily="nunito" fontWeight="700" color="white">Ready to turn curiosity into conversation? <br></br> Let's connect and make things happen! ✨</Text>
                        <Links>
                            <Email>
                                <Image width="30px" src="/images/icons/at.svg"></Image>
                                <Text fontSize="25px" fontFamily="nunito" fontWeight="500" color="white" padding="0 20px">fgorgacheva@gmail.com</Text>
                            </Email>

                            <LinkedIn>
                                <Image width="30px" src="/images/icons/in.svg"></Image>
                                <Text fontSize="25px" fontFamily="nunito" fontWeight="500" color="white" padding="0 20px">fgorgacheva/in</Text>
                            </LinkedIn>
                        </Links>
                    </Contact>

                    <Boba>
                        <Image width="400px" height="" src="/images/decoration/bobacat.png"></Image>
                    </Boba>
                </Footer>

            </ContentContainer>);
    }
}

export default UXPortfolio;

const Anchor = styled.a`
    display: block;
    position: relative;
    top: -100px;
    visibility: hidden;
    width: 50px;
    height: 50px;
`

const Main = styled.div`
    width: 100%;
    padding: 15% 20%;
    padding-bottom: 0;
    text-align: left;
    align-items: center;
    
`;

const Intro = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const Greeting = styled.div`
    margin: auto;
`;

const Picture = styled.img`
    /* background-image: url("/images/projects/3D/self/face_right.png"); */
    background-image: url("/images/me.jpg");
    width: 400px;
    height: 400px;
    border-radius: 100%;
    background-position: center;
    background-size: cover;

    display: block;
    margin-left: auto;
`;

const Portfolio = styled.div`
    margin-top: 30%;
    width: 150%;
    margin-left: -25%;
    text-align: center;
`;

const AboutMe = styled.div`
    margin-top: 30%;
    text-align: center;
`;

const Description = styled.div`
margin-top: 10%;
text-align: left;

span{
    color: #C092F9;
    font-weight: 700;
}
`;

const Gap = styled.div`
    margin-top: 5%;
`;

const Details = styled.div`
    background-image: url("/images/details.png");
    padding: 16% 20%;
    margin-top: 5%;
    background-size: cover;
    height: 500%;
    width: 100%;
    display: grid;
    grid: repeat(2, 1fr);

    text-align: left;

    table {
        padding-top: 20px;
        p {
            white-space: nowrap;
        }
    }
`;

const Education = styled.div`
    

`;

const Experience = styled.div`
    padding-left: 25px;
`;

const Skills = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    margin-top: 5%;
    
`;

const Footer = styled.div`
    margin-top: 10%;
    margin-bottom: 0%;
    padding: 10% 15% 5% 20%;
    background-image: url("/images/footer.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;

    display: grid;
    grid-template-columns: 3fr 1fr;
`;

const Contact = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

const Boba = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Links = styled.div`
    margin-top: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;

`;

const Email = styled.div`
    display: grid;
    grid-template-columns: 1fr 15fr;

`;

const LinkedIn = styled.div`
    display: grid;
    grid-template-columns: 1fr 15fr;

`;
