import React, { useState } from "react";
import styled from "styled-components";
import { styles } from "./baseStyles";
import Header from "./Header";
import Toolbar from "./Toolbar";
import Todos from "./Todos";
const Container = styled.div`
  ${styles.flexC}
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: ${styles.sizes.xl};
  background-color: ${styles.colors.b1};
  color: ${styles.colors.e3};
`;
function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Container>
        <Header todos={todos} />
        <Toolbar todos={todos} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
      </Container>
    </>
  );
}

export default App;
