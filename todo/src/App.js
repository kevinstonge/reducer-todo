import React, { useState } from "react";
import styled from "styled-components";
import styles from "./baseStyles";
import Header from "./Header";
const Container = styled.div`
  ${styles.flexC}
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: ${styles.sizes.md};
  background-color: ${styles.colors.b1};
  color: ${styles.colors.e3};
`;
function App() {
  const [todos, setTodos] = useState([{}]);
  return (
    <>
      <Container>
        <Header todos={todos} setTodos={setTodos} />
        <p>app</p>
      </Container>
    </>
  );
}

export default App;
