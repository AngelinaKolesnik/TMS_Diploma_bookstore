import { Link } from "react-router-dom";
import styled from "styled-components";

export const ItemOfBooks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  padding: 15px;

  &:hover {
    background-color: ${(props) => props.theme.lightGreen};
    transform: scale(1.05);
    transition-duration: 0.3s;
    box-shadow: 0px 0px 25px ${(props) => props.theme.softGreen};
    border-radius: 5px;
  }
`;

export const BookImg = styled.img`
  height: 350px;
`;

export const BookTitle = styled.div`
  font-size: 18px;
  line-height: 18px;
  color: ${(props) => props.theme.darkGreen};
  text-transform: capitalize;
`;

export const BookPrice = styled.div`
  margin-top: 10px;
  font-weight: 600;
  color: #703c2e;
`;

export const BookLink = styled(Link)`
  text-decoration: none;
`;
