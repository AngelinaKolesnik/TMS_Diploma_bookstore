import styled from "styled-components";
import { logoGreen } from "../../constants/colors";

export const StyledLoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

export const StyledLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const StyledLoaderImage = styled.img`
  width: 80vh;
`;

export const StyledLoaderText = styled.p`
  font-size: 36px;
  color: ${logoGreen};
  font-weight: 600;
  font-style: italic;
  margin: 24px 0 0;
`;
