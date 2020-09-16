import React, { useState } from "react";
import styled from "styled-components";
import { styles, mixins } from "../baseStyles";
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
  const [newText, setNewText] = useState("");
  return (
    <Bar>
      <Tool color={styles.colors.e1}>
        <input
          type="text"
          id="newTodo"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <button
          onClick={() => props.dispatch({ type: "ADD", payload: newText })}
        >
          <FontAwesome name="plus-circle" /> add todo
        </button>
      </Tool>
      <Tool color={styles.colors.e5}>
        <button onClick={() => props.dispatch({ type: "DELETE" })}>
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
