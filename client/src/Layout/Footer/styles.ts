import styled from "styled-components";

export const Name = styled.p`
  font-size: 3rem;
`;

export const MadeIn = styled.p`
  font-weight: 500;
  color: #8463fb;
`;

export const FindMe = styled.p`
  margin-bottom: 0rem;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 1rem;
  color: #999999;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

interface IconProps extends React.HTMLAttributes<HTMLAnchorElement> {
  color?: string;
}

export const SocialIcon = styled.a<IconProps>`
  margin-right: 1rem;
  color: ${(props) => props.color};
  font-size: 1.5rem;
  cursor: pointer;
`;
