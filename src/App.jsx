import { useState } from "react";

//Import Components
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Product from "./components/product.jsx";
import Newsletter from "./components/newsletter.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <h1 className="bg-[#d0a360] text-white my-0 p-2 opacity-90 text-center text-4xl capitalize font-light mb-6">
        Exotics Collection
      </h1>
      <h1 className="bg-[#d0a360] text-white my-0 p-6 opacity-90 text-center text-4xl capitalize font-light mb-6 shadow-2xl">
        Exotics Collection
      </h1>
      <Product />
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
}

export default App;
