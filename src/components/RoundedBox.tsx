import React, { MouseEventHandler, PropsWithChildren, ReactElement } from "react";
import styled, { css } from "styled-components";
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

interface RoundedBoxProps {
    center?: boolean;
    padding?: string;
    flexDirection?: string;
    href?: string;
    width?: string;
    height?: string;
    hash?: string;
    shadow?: string;
    margin?: string;
}

interface RoundedBoxState {
    menuOpened: boolean

}

// ** this goes above so we can use useQuery
// function useQuery() {
//     const { search } = useLocation();

//     return React.useMemo(() => new URLSearchParams(search), [search]);
// }

// **this is supposed to be like instead of class RoundedBox -> 
// export function GlobalNavigation (props: Props) {
//     let query = useQuery();
//     const navigate = useNavigate();

const RoundedBox: React.FC<PropsWithChildren<RoundedBoxProps>> = ({ shadow, children, hash, width, height, flexDirection, center, padding, href, margin }) => {
    const navigate = useNavigate()
    return (<StyledReactBox shadow={shadow} width={width} height={height} flexDirection={flexDirection} center={center} hover={href !== undefined} padding={padding} margin={margin} onClick={href || hash ? () => {
        navigate({ pathname: href, hash: hash })
    } : undefined}>
        {children}
    </StyledReactBox>);
}

export default RoundedBox;

const StyledReactBox = styled.div<{ height?: string, width?: string, center?: boolean, padding?: string, flexDirection?: string, shadow?: string, hover: boolean, onClick?: VoidFunction, margin?: string }>`
    border-radius: 15px;
    background: rgba(241, 243, 249, 0.58);
    padding: ${p => p.padding || "0"};
    margin: ${p => p.margin || "0"};
    display: flex;
    width: ${p => p.width || "100%"};
    height: ${p => p.height || "100%"};
    flex-direction: ${p => p.flexDirection || "column"};
    align-items: ${p => p.center ? "center" : "flex-start"};
    justify-content: ${p => p.center ? "center" : "flex-start"};
    transition: ease 0.15s;
    box-shadow: ${p => p.shadow};
    ${p => p.hover && css`
        
        &:hover{
            transition: ease 0.15s;
            transform: scale(1.05);
        }
    ` }
    
`;