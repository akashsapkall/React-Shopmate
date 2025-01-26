import { useState } from "react";
import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
