import { Suspense } from "react";
import "./App.css";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NabBar/NavBar";
import PricingOptions from "./components/PricingOptions/PricingOptions";

const PricingPromise  = fetch("pircengData.json").then(res => res.json()); 

function App() {
  return (
    <>
    
      <header>
        <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  );
}

export default App;
