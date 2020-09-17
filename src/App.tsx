// Dependencies
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

// Components
import ImagePreview from './ImagePreview';
import ImageModal from './ImageModal';

interface KeyboardEvent {
  keyCode: number;
}

// Constants
const IMAGE_URLS: Array<string> = [
  "https://lh3.googleusercontent.com/YEcRcfKUaq3mA3vHN_VcE2G4TN8ZzvyTJnjfOXgVHjfCO3u2zKjJmK6xTdEUm6q5F8OTTcTB7EoiZ4ePpknxq8Jz",
  "https://lh3.googleusercontent.com/0jGB0WpcTOTGUAjSkLZFjV2lox-9rZ1WhduWJYdXlThaaowvZVm7RfvB0F7S6SkaRZTA1L3-O8Ik5x47d4bt8riR",
  "https://lh3.googleusercontent.com/BTmQVc1Rmcee-9JxVcqSeklCQyZbEStqdO43NSnfY-FzhARq66bqJl2LRsvRydmyLGFwn9kxnhCpTmsf5kiUZ5xR=s300",
  "https://lh3.googleusercontent.com/wWyUN_8wHRMxhanvt9jm0ZYFfv72jLArs3AgJVBmSRODdaZ8I9vr9CRxtB9LNWV5uYfw5Yxaqktc7tgDm_sp6V7aNA=s700",
  "https://lh3.googleusercontent.com/yeqH5r517R1hEsotL3Yfk00ntwFdxmFf5s6gU9fui9d1BSnJVojsWkWbOqRN2JlaCt3oRKcbEMfaHKwJATRgHIEy",
];

function App() {
  const [selected, setSelected] = useState(-1);

  const handleUserKeyPress = useCallback((event: KeyboardEvent) => {
    if (selected === -1) return;
    const { keyCode } = event;

    if (keyCode === 37) {
      setSelected((selected + IMAGE_URLS.length - 1) % IMAGE_URLS.length);
    }

    if (keyCode === 39) {
      setSelected((selected + 1) % IMAGE_URLS.length);
    }
  }, [selected]);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const onClose = () => {
    setSelected(-1);
  };

  return (
    <DivContainer>
      <AppInstructions>
        Click an image below
      </AppInstructions>

      <AppItemsContainer>
        {IMAGE_URLS.map((imageUrl, index ) =>
          <AppItem key={imageUrl} onClick={() => setSelected(index)}>
            <ImagePreview url={imageUrl} />
          </AppItem>
        )}
      </AppItemsContainer>

      {selected !== -1 && <ImageModal url={IMAGE_URLS[selected]} onClose={onClose} />}
    </DivContainer>
  );
}

// Styles
const DivContainer = styled.div`
  width: 100%;
`;

const AppInstructions = styled.div`
  margin-bottom: 20px;
`;

const AppItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AppItem = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
`;

// Export App
export default App;
