import React from "react";
import styled from "styled-components";
import styles from "./baseStyles";

const List = styled.div`
  ${styles.flexC}
  width: 100%;
  background-color: ${styles.colors.b2};
  margin-top: ${styles.sizes.md};
  padding: ${styles.sizes.md};
  border-radius: 0 ${styles.sizes.md} 0 ${styles.sizes.md};
  // border: 1px solid ${styles.colors.e5};
`;

const Card = styled.button`
  background-color: ${styles.colors.b3};
  border: 1px solid ${styles.colors.e5};
  color: ${styles.colors.e3};
  padding: ${styles.sizes.sm};
  margin: ${styles.sizes.sm};
`;
function Todos(props) {
  return (
    <List>
      <Card>asdf</Card>
      <Card>asdf</Card>
    </List>
  );
}
export default Todos;
