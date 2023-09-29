import React, { PropsWithChildren } from "react";
import styled from "styled-components";


interface Props {
    fontSize: string,
    fontWeight?: string,
    padding?: string,
    color?: string,
    fontFamily?: string,
    blend?: boolean,
    align?: string,
    margin?: string,
    whiteSpace?: string,
}
function Text({ children, fontSize, fontWeight, padding, margin, color, fontFamily, blend, align, whiteSpace }: PropsWithChildren<Props>) {
    return (<StyledText
        fontSize={fontSize}
        fontWeight={fontWeight}
        padding={padding}
        margin={margin}
        color={color}
        blend={blend}
        align={align}
        fontFamily={fontFamily}
        whiteSpace={whiteSpace}>
        {children}
    </StyledText>);
}

const StyledText = styled.p<Props>`
    color: ${p => p.color || "#5f5f5f"};
    font-family: ${p => p.fontFamily || "nunito"};
    font-size: ${p => p.fontSize};
    font-weight: ${p => p.fontWeight};
    text-align: ${p => p.align || "left"};
    padding: ${p => p.padding || "0"};
    margin: ${p => p.margin || "0"};;
    ${p => p.blend && { ...{ mixBlendMode: "difference" } }}
    line-height: 150%;
    white-space: ${p => p.whiteSpace || "pre-line"};
    
    span{
        font-weight: 800;
    }
`

export default Text;