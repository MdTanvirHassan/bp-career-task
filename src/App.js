import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import NavbarWithCTAButton from "./components/Header";
import HomeBanner from "./components/HomeBanner";

function App() {
  return (
    <div className="">
      <NavbarWithCTAButton />
      <Routes>
        <Route exact path="/" element={<HomeBanner />} />
        <Route path="/about/us" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
