import React from "react";
import styles from "./baseStyles";
import styled from "styled-components";

function Header(props) {
  //TODO: change 'props.todos.length' calls below to be based on a filter for completed tasks
  const Head = styled.header`
    ${styles.flexR}
    justify-content: space-between;
    width: 100%;
    padding: ${styles.sizes.sm} ${styles.sizes.md};
    background-color: ${styles.colors.b3};
    color: ${styles.colors.e1};
    border-radius: 0 0.5rem 0 0.5rem;
    border: 1px solid ${styles.colors.e5};
    h1 {
      font-size: ${styles.sizes.xl};
      color: ${styles.colors.e3};
    }
    p {
      ${styles.flexR};
      color: ${props.todos.length === 0 ? styles.colors.e1 : styles.colors.e5};
      span {
        font-weight: bolder;
        font-size: 200%;
        margin-right: ${styles.sizes.sm};
      }
    }
  `;
  return (
    <Head>
      <h1>React.ToDo</h1>
      <p>
        <span>{props.todos.length}</span> incomplete todos
      </p>
    </Head>
  );
}

export default Header;
