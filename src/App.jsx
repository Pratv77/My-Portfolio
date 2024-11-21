import "./App.css";
import MainProfileCard from "./components/MainProfileCard/MainProfileCard";
import TechStackCard from "./components/TechStackCard/TechStackCard";
import PratGPTCard from "./components/PratGPTCard/PratGPTCard";
import MainProjectCard from "./components/MainProjectCard/MainProjectCard";
import SocialsCard from "./components/SocialsCard/SocialsCard";
import ContactCard from "./components/ContactCard/ContactCard";
import GIFCard from "./components/GIFCard/GifCard";

import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen p-4 grid place-items-center">
      <div className="w-full max-w-[1600px] grid auto-rows-[225px] grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="col-span-2 row-span-2 md:col-span-4">
          <Card>
            <MainProfileCard></MainProfileCard>
          </Card>
        </div>
        <div className="col-span-2 md:col-span-4">
          <Card>
            <TechStackCard></TechStackCard>
          </Card>
        </div>
        <div className="col-span-2 row-span-3 md:col-span-4 md:row-span-2">
          <Card>
            <PratGPTCard></PratGPTCard>
          </Card>
        </div>
        <div className="col-span-2 row-span-2">
          <Card><SocialsCard></SocialsCard></Card>
        </div>
        <div className="col-span-2 row-span-2">
          <Card><MainProjectCard></MainProjectCard></Card>
        </div>
        <div className="col-span-2 md:col-span-2">
          <Card><GIFCard></GIFCard></Card>
        </div>
        <div className="col-span-2 md:col-span-2">
          <Card><ContactCard></ContactCard></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
