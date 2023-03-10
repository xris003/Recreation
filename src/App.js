import "./App.css";
import Header from "./Components/header/Header";
import Hero from "./Components/hero/Hero";
import Slider from "./Components/Slider/Slider";
import Virtual from "./Components/Virtual/Virtual";
import Products from "./Components/Products/Products";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";
import Hamburger from "./Components/Hamburger/Hamburger";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual />
      <Products />
      <Testimonial />
      <Footer />
      <Hamburger />
    </div>
  );
}

export default App;
