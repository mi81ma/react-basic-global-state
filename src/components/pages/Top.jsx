import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { useSetRecoilState } from "recoil";
import { SecondaryButton } from "../atoms/button/SecondoryButton";
// import { useContext } from "react";
// import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";
import { useSetRecoilState } from "recoil";

export const Top = () => {
  const navigate = useNavigate();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

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
