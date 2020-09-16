import React from "react";
import { styles, mixins } from "../baseStyles";
import styled from "styled-components";
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
      props.incomplete === 0 ? styles.colors.e1 : styles.colors.e5};
    span {
      font-weight: bolder;
      font-size: 200%;
      margin-right: ${styles.sizes.sm};
    }
  }
`;
function Header(props) {
  const incomplete = props.todos.filter((todo) => !todo.completed).length;
  return (
    <Head incomplete={incomplete}>
      <h1>React.ToDo</h1>
      <p>
        <span>{incomplete}</span> incomplete todos
      </p>
    </Head>
  );
}

export default Header;
