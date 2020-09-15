import React from "react";
import styles from "./baseStyles";
import styled from "styled-components";
//TODO: change 'props.todos.length' calls below to be based on a filter for completed tasks
const Head = styled.header`
  ${styles.flexR}
  justify-content: space-between;
  width: 100%;
  padding: ${styles.sizes.md};
  background-color: ${styles.colors.b2};
  color: ${styles.colors.e1};
  border-radius: 0 ${styles.sizes.md} 0 ${styles.sizes.md};
  //   border: 1px solid ${styles.colors.e5};
  h1 {
    font-size: ${styles.sizes.xl};
    color: ${styles.colors.e3};
  }
  p {
    ${styles.flexR};
    color: ${(props) =>
      props.todos.length === 0 ? styles.colors.e1 : styles.colors.e5};
    span {
      font-weight: bolder;
      font-size: 200%;
      margin-right: ${styles.sizes.sm};
    }
  }
`;
function Header(props) {
  return (
    <Head todos={props.todos}>
      <h1>React.ToDo</h1>
      <p>
        <span>{props.todos.length}</span> incomplete todos
      </p>
    </Head>
  );
}

export default Header;
