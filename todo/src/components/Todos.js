import React from "react";
import styled from "styled-components";
import { styles, mixins } from "../baseStyles";
import FontAwesome from "react-fontawesome";

const List = styled.div`
  ${mixins.flexC}
  ${mixins.box}
  border-color: ${styles.colors.e4};
  margin-top: ${styles.sizes.md};
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: ${styles.sizes.md};
  }
  &::-webkit-scrollbar-track {
    background: ${styles.colors.e4};
    border-radius: 0 ${styles.sizes.sm} 0 0;
  }
  &::-webkit-scrollbar-thumb {
    background: ${styles.colors.e3};
    border-radius: 0 ${styles.sizes.sm} 0 0;
    &:hover {
      background: #fff;
      cursor: pointer; //idk why this doesn't work!
    }
  }
`;

const Card = styled.button`
  ${mixins.flexR}
  gap: ${styles.sizes.md};
  background: linear-gradient(
    to right,
    ${styles.colors.e3} 0%,
    ${styles.colors.b3} 2.5rem,
    ${styles.colors.b1} 100%
  );
  border: 1px solid ${styles.colors.e3};
  color: ${styles.colors.f1};
  padding: ${styles.sizes.md};
  margin: ${styles.sizes.sm};
  border-radius: 0 ${styles.sizes.md} 0 ${styles.sizes.md};
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 3pt 2pt ${styles.colors.e1};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 3pt 2pt ${styles.colors.e1};
  }
`;
function Todos(props) {
  return (
    <List>
      {props.todos.map((todo) => {
        const faIcon = todo.completed ? "check" : "arrow-right";
        return (
          <Card
            key={todo.id}
            onClick={() => props.dispatch({ type: "TOGGLE", payload: todo.id })}
          >
            <FontAwesome name={faIcon} size="2x" />

            <p>{todo.item}</p>
          </Card>
        );
      })}
    </List>
  );
}
export default Todos;
