import React from "react";
import styled from "styled-components";
import styles from "./baseStyles";
const Bar = styled.div`
  ${styles.flexR}
  justify-content: center;
  gap: ${styles.sizes.md};
  width: 100%;
  padding: ${styles.sizes.md};
  background-color: ${styles.colors.b2};
  margin-top: ${styles.sizes.md};
  //   border: 1px solid ${styles.colors.e5};
  border-radius: ${styles.sizes.md} 0 ${styles.sizes.md} 0;
`;
const Tool = styled.div`
  ${styles.flexC}
  align-self: stretch;
  input,
  button {
    width: 100%;
    height: 100%;
  }
  button {
    background-color: ${styles.colors.b3};
    border: none;
    color: ${styles.colors.e3};
  }
`;
function Toolbar(props) {
  return (
    <Bar>
      <Tool>
        <input type="text" id="newTodo" />
        <button>add todo</button>
      </Tool>
      <Tool>
        <button>
          <p>delete all</p>
          <p>completed todos</p>
        </button>
      </Tool>
      <Tool>
        <input type="text" id="filter" />
        <button>filter</button>
      </Tool>
    </Bar>
  );
}

export default Toolbar;
