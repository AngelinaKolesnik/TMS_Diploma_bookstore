import styled from "styled-components";

export const ListOfBooks = styled.div`
  max-width: 1400px;
  width: 100%;
  padding: 0 15px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const SearchZeroText = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: ${(props) => props.theme.darkGreen};
  display: flex;
  justify-content: center;
  font-style: italic;
`;
