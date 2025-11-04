import styled, { css } from "styled-components";

export const Header = styled.h1`
  text-align: center;
  margin: 20px auto;
`;

export const Info = styled.p`
  text-align: center;
  padding: 20px;
`;

export const Title = styled.span`
  margin-right: 15px;
`;

export const Content = styled.div`
  margin: 20px;
`;

export const StyledText = styled.pre`
  white-space: pre-wrap;
  font-size: 15px;
  margin-bottom: 80px;

  ${({ $processed }) =>
    $processed &&
    css`
      color: darkblue;
    `}
`;
