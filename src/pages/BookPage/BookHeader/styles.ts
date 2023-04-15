import styled from "styled-components";

export const BookTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: ${(props) => props.theme.darkGreen};
  margin: 15px 50px;
`;

export const BookSubtitle = styled.h3`
  font-size: 28px;
  color: ${(props) => props.theme.darkGreen};
  font-style: italic;
  margin: 0 50px 30px;
`;
