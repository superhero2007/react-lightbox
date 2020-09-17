// Dependencies
import React, { MouseEvent, createRef } from 'react';
import styled from 'styled-components';

// Interface
interface Props {
  url: string;
  onClose: () => void;
}

interface ContainerProps {
  onClick: (event: MouseEvent) => void;
}

interface ImageProps {
  url: string;
}


// Component
const ImageModal = ({ url, onClose }: Props) => {
  const contentRef = createRef<HTMLDivElement>();

  const handleClick = (event: MouseEvent) => {
    const { current } = contentRef;
    if (!current!.contains(event.target as HTMLElement)) {
      onClose();
    }
  };

  return (
    <DivContainer onClick={(event: MouseEvent) => handleClick(event)}>
      <ImageModalImage url={url} ref={contentRef} />
    </DivContainer>
  )
};

// Styles
const DivContainer = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageModalImage = styled.div<ImageProps>`
  width: 300px;
  height: 300px;
  background-repeat:no-repeat;
  background-position: center;
  background-size: contain;
  background-color: white;
  background-image: url(${props => props.url});
`;

// Export ImageModal Component
export default ImageModal;
