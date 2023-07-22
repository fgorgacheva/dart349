import React, { useEffect } from "react";
import styled from "styled-components";
import { NavBar } from "./NavBar";
import HomePage from "../pages/HomePage";
import UXGallery from "../pages/UXGallery";
import ThreeDGallery from "../pages/ThreeDGallery";
import { Project } from "./Project";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import MiscGallery from "../pages/MiscGallery";
import UXPortfolio from "../pages/UXPortfolio";
import { NotFound } from "../pages/NotFound";
import { isMobile } from 'react-device-detect';
import Text from "./Text";
interface LayoutProps {

}


const Layout = ({ }) => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView(false);
                }
            }, 0);
        }
    }, [pathname, hash, key]); // do this on route change
    const rootPath = pathname.split("/")[1]?.toUpperCase();
    let display = "";

    switch (rootPath) {
        case "HOME":
            display = 'home'
            break;
        case "MISC":
            display = 'misc'
            break;
        case "404":
            display = '¯\\_ツ_/¯'
            break;
        default:
            display = rootPath
            break;
    }

    return (<>
        {isMobile && <><MobileView><Text padding={"150px 100px 15px"} fontSize="30px"><span>Sorry :(</span></Text><Text padding={"0 100px"} fontSize="20px">The mobile version is still under construction.</Text><Text fontSize="20px" padding={"15px 100px"}> Please view it on a desktop browser for optimal experience.</Text></MobileView></>}
        {
            !isMobile && <MainLayout>
                <NavBar title={display}></NavBar>
                <div></div>
                <Content>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
                        <Route path='/home' element={<HomePage></HomePage>} ></Route>
                        <Route path='/3D' element={<ThreeDGallery></ThreeDGallery>} ></Route>
                        <Route path='/misc' element={<MiscGallery></MiscGallery>} />
                        <Route path='/ux' element={<UXGallery></UXGallery>} ></Route>
                        <Route path='/ux/portfolio' element={<UXPortfolio></UXPortfolio>} ></Route>
                        {/* <Route path='/uxportfolio' element={<UXPortfolio></UXPortfolio>} ></Route>
                    <Route path='/3dportfolio' element={<ThreeDPortfolio></ThreeDPortfolio>} ></Route> */}
                        <Route path='/:type/project/:alias' element={<Project></Project>} ></Route>
                        <Route path="/404" element={<NotFound />}></Route>
                        <Route path='*' element={<Navigate to="/404"></Navigate>} />
                    </Routes>
                </Content>
            </MainLayout>
        }
        <BackgroundImg></BackgroundImg>
    </>);
}

export default Layout;

const MainLayout = styled.div`
    display: grid;
    grid-template-columns: minmax(0,125px) minmax(0,1fr);
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`

const BackgroundImg = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url('/images/background.png');
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Content = styled.div`
    
`

const MobileView = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`