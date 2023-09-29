import React, { PropsWithChildren } from "react";
import styled from "styled-components";


interface Props {
    src: string,
    width?: string,
    height?: string,
    objectFit?: string,
}
function Image({ width, height, src, objectFit }: PropsWithChildren<Props>) {
    return (<StyledImage src={src}
        width={width}
        height={height}
        objectFit={objectFit}>
    </StyledImage>);
}

const StyledImage = styled.img<Props>`
    width: ${p => p.width};
    height: ${p => p.height};
    object-fit: ${p => p.objectFit};
`

export default Image;