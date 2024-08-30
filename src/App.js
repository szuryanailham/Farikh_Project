import "./App.css";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Testimony from "./Components/Testimony";
function App() {
  return (
    <>
      <div className=" text-white w-full bg-baseColor overflow-x-hidden">
        <Navbar />
        {/* Hero */}
        <div className="mt-5">
          <Hero />
          <Profile />
          <Categories />
          <Gallery />
          <Testimony />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
