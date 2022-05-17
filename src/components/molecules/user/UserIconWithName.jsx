import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name, isAdmin } = props;
  return (
    <SContainer>
      <SImg height={200} width={200} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  background-color: cyan;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;
