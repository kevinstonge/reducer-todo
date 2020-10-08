import React from "react";
import styled from "styled-components";
import { styles, mixins } from "../baseStyles";
import FontAwesome from "react-fontawesome";

const List = styled.div`
  ${mixins.flexR}
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: ${styles.sizes.lg};
  ${mixins.box}
  border-color: ${styles.colors.e4};
  box-shadow: 0 0 0.5rem 0.1rem ${styles.colors.e4},
    inset 0 0 0.5rem 0.1rem ${styles.colors.e4};
  overflow-y: auto;
  p {
    ${mixins.flexR}
    gap: ${styles.sizes.md};
  }
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
  font-size: 110%;
  font-weight: bold;
  background: linear-gradient(
    to right,
    ${(props) => props.color1} 0%,
    ${styles.colors.b3} 2.5rem,
    ${styles.colors.b1} 100%
  );
  border: 1px solid ${(props) => props.color1};
  color: ${styles.colors.f1};
  padding: ${styles.sizes.md};
  margin: ${styles.sizes.sm};
  border-radius: 0 ${styles.sizes.md} 0 ${styles.sizes.md};
  &:focus {
    box-shadow: 0 0 1px 1px ${styles.colors.f1};
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 3pt 2pt ${(props) => props.color2};
  }
`;
function Todos(props) {
  return (
    <List>
      {props.todos.length > 0 ? (
        props.todos.map((todo) => {
          const faIcon = todo.completed ? "check" : "arrow-right";
          const color1 = todo.completed ? styles.colors.e1 : styles.colors.e3;
          const color2 = todo.completed ? styles.colors.e3 : styles.colors.e1;
          return (
            <Card
              color1={color1}
              color2={color2}
              key={todo.id}
              onClick={() =>
                props.dispatch({ type: "TOGGLE", payload: todo.id })
              }
            >
              <FontAwesome name={`${faIcon} fa-fw`} size="2x" />

              <p>{todo.item}</p>
            </Card>
          );
        })
      ) : (
        <p>
          <FontAwesome name="thumbs-o-up" size="2x" /> nothing to do!
        </p>
      )}
    </List>
  );
}
export default Todos;
