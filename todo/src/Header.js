import React from "react";
import { styles, mixins } from "./baseStyles";
import styled from "styled-components";
//TODO: change 'props.todos.length' calls below to be based on a filter for completed tasks
const Head = styled.header`
  ${mixins.flexR}
  flex-wrap: wrap;
  ${mixins.box}
  border-color: ${styles.colors.e2};
  justify-content: space-between;
  h1 {
    font-size: ${styles.sizes.xl};
    color: ${styles.colors.e3};
  }
  p {
    ${mixins.flexR};
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
