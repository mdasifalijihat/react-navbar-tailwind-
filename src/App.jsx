import { Suspense } from "react";
import "./App.css";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NabBar/NavBar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultChart from "./components/ResultChart/ResultChart";
import axios from "axios";
import MarksChart from "./components/marksChart/MarksChart";

const PricingPromise  = fetch("pircengData.json").then(res => res.json()); 

const marksPromise = axios.get('markes.json')

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

        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}> 
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App;
