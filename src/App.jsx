import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes></Routes>
      <Footer />
    </>
  );
}

export default App;
