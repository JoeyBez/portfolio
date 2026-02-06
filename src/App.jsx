import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Works from "./Works";
import Header from "./Header";
import Experience from "./Experience";
import About from "./About";
import Category from "./Category";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/works" element={<Works />} />
          <Route path="/portfolio/works/:category" element={<Category />} />
          <Route path="/portfolio/experience" element={<Experience />} />
          <Route path="/portfolio/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
