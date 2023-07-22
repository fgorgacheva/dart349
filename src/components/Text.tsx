import React, { PropsWithChildren } from "react";
import styled from "styled-components";


interface Props {
    fontSize: string,
    fontWeight?: string,
    padding?: string,
    color?: string,
    fontFamily?: string,
    blend?: boolean
}
function Text({ children, fontSize, fontWeight, padding, color, fontFamily, blend }: PropsWithChildren<Props>) {
    return (<StyledText
        fontSize={fontSize}
        fontWeight={fontWeight}
        padding={padding}
        color={color}
        blend={blend}
        fontFamily={fontFamily}>
        {children}
    </StyledText>);
}

const StyledText = styled.p<Props>`
    color: ${p => p.color || "#5f5f5f"};
    font-family: ${p => p.fontFamily || "nunito"};
    font-size: ${p => p.fontSize};
    font-weight: ${p => p.fontWeight};
    padding: ${p => p.padding || "0"};
    margin: 0%;
    ${p => p.blend && { ...{ mixBlendMode: "difference" } }}
    line-height: 150%;
    white-space: pre-line;
    span{
        font-weight: 800;
    }
`

export default Text;