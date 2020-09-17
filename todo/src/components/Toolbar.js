import React, { useState, useRef, useEffect } from "react";
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
  > input,
  > button {
    width: 100%;
    height: 100%;
  }
  form {
    ${mixins.flexR}
    gap: ${styles.sizes.sm};
    align-self: stretch;
    height: 100%;
    > input {
      height: 100%;
      width: 100%;
      max-width: 15rem;
      border: 1px solid ${styles.colors.b1};
      background-color: ${styles.colors.b4};
      color: ${styles.colors.f1};
      font-weight: bold;
      font-size: 110%;
    }
    > button {
      height: 100%;
    }
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
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <Bar>
      <Tool color={styles.colors.e1}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setNewText("");
            props.dispatch({ type: "ADD", payload: newText });
          }}
        >
          <input
            type="text"
            id="newTodo"
            ref={inputRef}
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button type="submit">
            <FontAwesome name="plus-circle" /> add
          </button>
        </form>
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
