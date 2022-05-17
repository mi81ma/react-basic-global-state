import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondoryButton";
export const Top = () => {
  const onClickAdmin = () => alert("Admin");
  const onClickGeneral = () => alert("General");
  return (
    <SContainer>
      <h2>TOP Page</h2>
      <SecondaryButton onClick={onClickAdmin}>Admin User</SecondaryButton>
      <SecondaryButton onClick={onClickGeneral}>User</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
