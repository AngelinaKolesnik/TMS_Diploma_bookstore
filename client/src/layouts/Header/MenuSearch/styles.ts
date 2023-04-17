import styled from "styled-components";

export const Search = styled.form`
  width: 500px;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const MenuSearchInput = styled.input`
  width: calc(100% - 40px);
  height: 100%;
  border-radius: 0 5px 5px 0;
  border: 0;
  padding: 10px;
  font-size: 16px;

  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }
`;

export const MenuSearchIcon = styled.div`
  width: 40px;
  height: 100%;
  border-radius: 5px 0 0 5px;
  color: ${(props) => props.theme.lightGreen};
  background-color: ${(props) => props.theme.green};
  opacity: 0.8;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
