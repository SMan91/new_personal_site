import { Route, Routes } from "react-router-dom";

import { Home, Hobbies, Portfolio, Lgbtqia, NavBar } from "./components";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/lgbtqia" element={<Lgbtqia />} />
      </Routes>
    </div>
  );
};

export default App;
