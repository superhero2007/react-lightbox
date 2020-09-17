// Dependencies
import React from 'react';
import styled from 'styled-components';

// Interface
interface Props {
  url: string
}

interface ImageProps {
  url: string
}

// Component
const ImagePreview = ({ url }: Props) => {
  return (
    <DivContainer>
      <ImagePreviewImage url={url} />
    </DivContainer>
  )
};

// Styles
const DivContainer = styled.div`
  border: 1px solid lightgray;
  padding: 20px;
`;

const ImagePreviewImage = styled.div<ImageProps>`
  width: 200px;
  height: 200px;
  background-repeat:no-repeat;
  background-position: center;
  background-size: contain;
  background-color: white;
  background-image: url(${props => props.url});
`;

// Export ImagePreview Component
export default ImagePreview;
