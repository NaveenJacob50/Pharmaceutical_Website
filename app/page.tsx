
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import News from "./components/news";
import Footer from "./components/footer";
import About from "./components/about";
import Ingredients from "./components/ingredients";



export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <About/>
      <Ingredients/>
      <News/>
      <Footer/>
    </div>
  );
}
