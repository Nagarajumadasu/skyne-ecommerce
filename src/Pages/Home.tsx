 // @ts-nocheck 
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Product from "./Product";
import AboutUs from "./AboutUs";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Footer />
    </>
  );
}

export default Home;
