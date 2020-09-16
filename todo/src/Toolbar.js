import React from "react";
import styled from "styled-components";
import { styles, mixins } from "./baseStyles";
import FontAwesome from "react-fontawesome";
const Bar = styled.div`
  ${mixins.flexR}
  flex-wrap: wrap;
  ${mixins.box}
  border-color: ${styles.colors.e3};
  margin-top: ${styles.sizes.md};
  justify-content: flex-start;
  gap: ${styles.sizes.md};
`;
const Tool = styled.div`
  ${mixins.flexC}
  align-self: stretch;
  input,
  button {
    width: 100%;
    height: 100%;
  }
  button {
    background-color: ${styles.colors.b3};
    border: none;
    color: ${(props) => props.color};
    &:hover {
      cursor: pointer;
      background-color: ${styles.colors.b4};
    }
  }
`;
function Toolbar(props) {
  return (
    <Bar>
      <Tool color={styles.colors.e1}>
        <input type="text" id="newTodo" />
        <button>
          <FontAwesome name="plus-circle" /> add todo
        </button>
      </Tool>
      <Tool color={styles.colors.e2}>
        <input type="text" id="filter" />
        <button>
          <FontAwesome name="filter" /> filter
        </button>
      </Tool>
      <Tool color={styles.colors.e5}>
        <button>
          <p>
            <FontAwesome name="trash" /> delete all
          </p>
          <p>completed todos</p>
        </button>
      </Tool>
    </Bar>
  );
}

export default Toolbar;
