import About from "./components/About";
import Footer from "./components/Footer";
import NavbarWithCTAButton from "./components/Header";
import HomeBanner from "./components/HomeBanner";

function App() {
  return (
    <div className="">
      <NavbarWithCTAButton/>
      <HomeBanner/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
