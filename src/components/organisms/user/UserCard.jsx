import { memo } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = memo((props) => {
  const { user } = props;
  const { isAdmin } = UserContext;

  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin} />
      <SDl>
        <dl>
          <dt>Mail</dt>
          <dd>{user.email}</dd>
          <dt>TEL</dt>
          <dd>{user.phone}</dd>
          <dt>Company Name</dt>
          <dd>{user.company.name}</dd>
          <dt>Web</dt>
          <dd>{user.website}</dd>
        </dl>
      </SDl>
    </Card>
  );
});

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
