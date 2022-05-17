import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondoryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users", { state: { isAdmin: true } });
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users", { state: { isAdmin: false } });
  };

  return (
    <SContainer>
      <h2>TOP Page</h2>
      <SecondaryButton onClick={onClickAdmin}>Admin User</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>User</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
