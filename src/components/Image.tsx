import React, { PropsWithChildren } from "react";
import styled from "styled-components";


interface Props {
    src: string,
    width?: string,
    height?: string,
}
function Image({ width, height, src }: PropsWithChildren<Props>) {
    return (<StyledImage src={src}
        width={width}
        height={height}>
    </StyledImage>);
}

const StyledImage = styled.img<Props>`
    width: ${p => p.width};
    height: ${p => p.height};
`

export default Image;