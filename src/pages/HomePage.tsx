import React from "react";
import { ContentContainer } from "../components/ContentContainer";
import { TitleScreen } from "../components/TitleScreen";
import { Map } from "../components/Map";

interface HomePageProps {

}

interface HomePageState {

}

class HomePage extends React.Component<HomePageProps, HomePageState> {
    render() {
        return (<ContentContainer>

            {/* TitleScreen  */}
            <TitleScreen></TitleScreen>

            {/* Map */}
            <Map></Map>




        </ContentContainer>);
    }
}

export default HomePage;