export const styles = {
  colors: {
    b1: "#111",
    b2: "#222",
    b3: "#333",
    b4: "#444",
    f1: "#eaeaea",
    f2: "#d5d5d5",
    f3: "#c0c0c0",
    e1: "#33FF41",
    e2: "#33FFA7",
    e3: "#33F1FF",
    e4: "#FF338B",
    e5: "#FF4133",
  },
  sizes: {
    xs: "0.1rem",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "1.5rem",
  },
};
export const mixins = {
  flexC: `display: flex; flex-direction: column; justify-content: flex-start; align-items: center;`,
  flexR: `display: flex; flex-direction: row; justify-content: flex-start; align-items: center;`,
  box: `
  width: 100%;
  padding: ${styles.sizes.md};  
  background-color: ${styles.colors.b2};  
  color: ${styles.colors.e1};
  border-radius: 0 ${styles.sizes.md} 0 ${styles.sizes.md};
  border: 1px solid ${styles.colors.e5};`,
};
