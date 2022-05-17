import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
export const SearchInput = () => {
  return (
    <div>
      <SContainer>
        <Input placeholder="Search word" />
        <SButtonWrapper>
          <PrimaryButton>Search</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
    </div>
  );
};

const SContainer = styled.div`
  display: flex;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
