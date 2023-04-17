import styled from "styled-components";

export const BookContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const BookWrap = styled.div`
  display: flex;
`;

export const BookImg = styled.img`
  height: 500px;
  margin-right: 50px;
`;

export const BookInfoWrap = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  align-items: space-between;
  flex-direction: column;
`;

export const BookInfo = styled.div`
  height: 100%;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BookInfoContainer = styled.div`
  width: 450px;
  text-align: end;
  display: flex;
  align-items: center;
  justify-content: end;
`;
