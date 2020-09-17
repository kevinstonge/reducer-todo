import React, { useReducer, useEffect } from "react";
import todoReducer from "./reducers/todoReducer";
import styled from "styled-components";
import { styles, mixins } from "./baseStyles";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Todos from "./components/Todos";
const Container = styled.div`
  ${mixins.flexC}
  gap: ${styles.sizes.xl};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: ${styles.sizes.xl};
  background-color: ${styles.colors.b1};
  color: ${styles.colors.e3};
`;
const initialState = JSON.parse(window.localStorage.getItem("todos")) || [];
function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);
  return (
    <>
      <Container>
        <Header todos={state} />
        <Toolbar todos={state} dispatch={dispatch} />
        <Todos todos={state} dispatch={dispatch} />
      </Container>
    </>
  );
}

export default App;
