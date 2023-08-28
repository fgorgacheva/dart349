import React from "react";
import { ContentContainer } from "../components/ContentContainer";
import Text from "../components/Text";
import styled from "styled-components";
import RoundedBox from "../components/RoundedBox";
import { UXProjects } from "../UXProjectsData";
import Image from "../components/Image";

interface UXPortfolioProps {

}

interface UXPortfolioState {

}

class UXPortfolio extends React.Component<UXPortfolioProps, UXPortfolioState> {
    render() {
        return (
            <ContentContainer>
                <Main>
                    <Header>
                        <Text fontSize="30px" fontFamily="montserrat" padding="0 0 50px 0"><span>UX</span> Portfolio</Text>
                        <BtnGroup>

                            <RoundedBox height="fit-content" width="fit-content" padding="15px" href="">
                                <a target="_blank" style={{ textDecoration: 'none' }} href="/files/FGorgacheva_UX_CV_2023.pdf">

                                    <Text fontSize="15px" fontFamily="montserrat" fontWeight="700">CV</Text>
                                </a>
                            </RoundedBox>
                            {/* <RoundedBox height="fit-content" width="fit-content" padding="15px" href="/ux">
                                <Text fontSize="15px" fontFamily="montserrat">GALLERY</Text>
                            </RoundedBox> */}
                        </BtnGroup>
                    </Header>
                    <RoundedBox padding="20px">
                        <Text fontSize="20px" fontWeight="">
                            My drive for UX design stems from a love of creating intuitive and user-centered experiences. I am fascinated by the art of crafting interfaces that seamlessly connect with users, solving their problems and leaving a positive impact.
                        </Text>
                    </RoundedBox>

                    <Text fontSize="30px" fontFamily="montserrat" padding="50px 0 10px 0">Creative <span>Statement</span>
                    </Text>
                    <Text fontSize="20px" fontWeight="">
                        In our ever-rising digital society, user experience grows exponentially. It began with "The Design of Everyday Things" where Don Norman explained and emphasized the importance of the design of the objects of our corporeal world. Now let's imagine an entire universe we can't touch or manipulate other than with tools and pixels on a screen. The majority of tools we use, processes we must complete, even our entertainment, are nearly all digital: banking, messaging, picking movies, playing games, etc. More and more home appliances have screens too now: thermostats, toasters, fridges, even stoves, to name a few!
                        <br></br><br></br>The more things we have to deal with, the more we have to navigate. This is the most important point where understanding the sheer significance of UX and interaction design is crucial. If in a day, we have to sort out our bills, send a few emails, make a some calls, then go to the kitchen to use the screen on the fridge, maybe lower the temperature in the house because it's a little too hot, get back to some screen in the kitchen, and finally perhaps watch something while we finish our meal, isn't it key for us as users to be able to deal with this panoply of applications and displays as effectively as possible?
                        <br></br><br></br>I believe so, and with my drive and determination, I want to add to this world of easy, simple, and modern designs that will surround us to improve our user experience with the "new" every day things. My design ideology stands with "Don't Make Me Think!" by Steve Krug, a book that my design professor recommended and made everything make sense. I am determined to contribute to our digital world, one design at a time!

                    </Text>

                    <Text fontSize="30px" fontFamily="montserrat" padding="50px 0 10px 0"><span>Featured</span> Projects</Text>

                    <Collection>
                        <RoundedBox href="/ux/project/this" shadow='0px 10px 15px -3px rgba(0,0,0,0.1)'>
                            <FeaturedProject>
                                <Image src={`/images/projects/UX/this/${UXProjects['this'].thumbnail || ""}`}></Image>
                                <Text fontSize="30px" fontFamily="montserrat" >{UXProjects['this'].title}</Text>
                            </FeaturedProject>
                        </RoundedBox>
                        <RoundedBox href="/ux/project/neptronic" shadow='0px 10px 15px -3px rgba(0,0,0,0.1)'>
                            <FeaturedProject>
                                <Image src={`/images/projects/UX/neptronic/${UXProjects['neptronic'].thumbnail || ""}`}></Image>
                                <Text fontSize="30px" fontFamily="montserrat">{UXProjects['neptronic'].title}</Text>
                            </FeaturedProject>
                        </RoundedBox>
                        <RoundedBox href="/ux/project/avatar-project" shadow='0px 10px 15px -3px rgba(0,0,0,0.1)'>
                            <FeaturedProject>
                                <Image src={`/images/projects/UX/avatar-project/${UXProjects['avatar-project'].thumbnail || ""}`}></Image>
                                <Text fontSize="30px" fontFamily="montserrat">{UXProjects['avatar-project'].title}</Text>
                            </FeaturedProject>

                        </RoundedBox>
                    </Collection>

                </Main>



            </ContentContainer>);
    }
}

export default UXPortfolio;

const Main = styled.div`
    width: 100%;
    padding: 5%;
    text-align: left;
    
`;

const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;

    
`;

const Collection = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px;
`;

const FeaturedProject = styled.div`
    display: grid;
    grid-template-columns: minmax(0,1fr) minmax(0,2fr);
    grid-template-rows: minmax(0,1fr);
    grid-gap: 10px;
    max-height: 150px;
    width: 100%;
    align-items: center;
    justify-items: center;
    img {
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const BtnGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: flex-end;
`