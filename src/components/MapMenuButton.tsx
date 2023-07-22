import React, { Component, MouseEventHandler, PropsWithChildren, ReactElement } from "react";
import styled, { css } from "styled-components";

interface MapMenuButtonProps {
    onClick?: MouseEventHandler;
    center?: boolean;
    topMenuButton: ReactElement
    bottomMenuButton: ReactElement,
    invert?: boolean;
}

interface MapMenuButtonState {
    menuOpened: boolean
}

class MapMenuButton extends React.PureComponent<PropsWithChildren<MapMenuButtonProps>, MapMenuButtonState> {
    constructor(props: PropsWithChildren<MapMenuButtonProps>) {
        super(props)
        this.state = {
            menuOpened: false,
        }
    }
    render() {
        return (<StyledReactBox center={this.props.center}
            onMouseEnter={() => { this.setState({ menuOpened: true }) }}
            onMouseLeave={() => { this.setState({ menuOpened: false }) }}
            onClick={this.props.onClick}>

            {this.state.menuOpened && <Container>
                {this.props.invert === true ? (<>
                    <ExtraButtonContainer>
                        {this.props.topMenuButton}
                    </ExtraButtonContainer>
                    <ExtraButtonBottomContainer>
                        {this.props.bottomMenuButton}
                    </ExtraButtonBottomContainer>
                </>
                ) : (<>
                    <InvertedExtraButtonContainer>
                        {this.props.topMenuButton}
                    </InvertedExtraButtonContainer>
                    <InvertedExtraButtonBottomContainer>
                        {this.props.bottomMenuButton}
                    </InvertedExtraButtonBottomContainer>
                </>
                )}

                <ZIndexContainer>
                    {this.props.children}
                </ZIndexContainer>

            </Container>}
            {!this.state.menuOpened && this.props.children}
        </StyledReactBox>);
    }
}

export default MapMenuButton;

const StyledReactBox = styled.div<{ center?: boolean }>`
    border-radius: 15px;
    background: rgba(243, 243, 249, 0.58);
    align-items: ${p => p.center ? "center" : "flex-start"};
    justify-content: ${p => p.center ? "center" : "flex-start"};
    display: flex;
    transition: ease 0.15s;

    ${p => p.onClick && css`
        &:hover{
            transition: ease 0.15s;
            transform: scale(1.1);
        }
    ` }
    
`

const ExtraButtonContainer = styled.div`
    padding-bottom: 50%;
    position: absolute;
    display: flex;
    align-items: flex-start;  
    top: -55%; 
    width: 100%;
    height: 100%;
    z-index: -1;
    animation: slide-in-bl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    @keyframes slide-in-bl {
    0% {
        -webkit-transform: translateY(150%);
                transform: translateY(150%);
                
                opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0) translateX(0);
                transform: translateY(0) translateX(0);
                opacity: 1;
    }
    }
`

const ExtraButtonBottomContainer = styled.div<{ invert?: boolean }>`

    padding-bottom: 50%;
    position: absolute;
    display: flex;
    align-items: flex-end;  
    top: -110%;
    width: 100%;
    height: 100%;
    animation: slide-in-tl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    @keyframes slide-in-tl {
    0% {
        -webkit-transform: translateY(100%) ;
                transform: translateY(100%) ;
                
                opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0) translateX(0);
                transform: translateY(0) translateX(0);
                opacity: 1;
    }}
`

const InvertedExtraButtonContainer = styled(ExtraButtonContainer)`
    padding-bottom: 0;
    padding-top: 50%;
    top: unset;
    bottom: -110%;

    animation: slide-in-bl-inv 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    @keyframes slide-in-bl-inv {
    0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
                
                opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0) translateX(0);
                transform: translateY(0) translateX(0);
                opacity: 1;
    }
    }
`

const InvertedExtraButtonBottomContainer = styled(ExtraButtonBottomContainer)`
    padding-bottom: 0;
    padding-top: 50%;
    top: unset;
    bottom: -55%;
    animation: slide-in-tl-inv 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    @keyframes slide-in-tl-inv {
    0% {
        -webkit-transform: translateY(-150%) ;
                transform: translateY(-150%) ;
                
                opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0) translateX(0);
                transform: translateY(0) translateX(0);
                opacity: 1;
    }}
`


const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const ZIndexContainer = styled.div`
    z-index: 1;
    position: relative
`