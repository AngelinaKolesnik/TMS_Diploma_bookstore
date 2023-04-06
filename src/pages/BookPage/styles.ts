import styled from "styled-components";

export const BookContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

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

export const BookDescription = styled.div`
  font-size: 24px;
  margin: 30px 0 15px;
  font-weight: 600;
`;

export const BookDescriptionText = styled.div`
  font-size: 21px;
`;

export const BookRating = styled.div`
  display: flex;
  align-items: center;
`;

export const BookAuthor = styled.div`
  width: 450px;
  text-align: end;
`;
