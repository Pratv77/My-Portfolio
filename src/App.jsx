import "./App.css";
import MainProfileCard from "./components/MainProfileCard/MainProfileCard";
import TechStackCard from "./components/TechStackCard/TechStackCard";
import PratGPTCard from "./components/PratGPTCard/PratGPTCard";
import MainProjectCard from "./components/MainProjectCard/MainProjectCard";
import PhotoGalleryCard from "./components/PhotoGalleryCard/PhotoGalleryCard";
import ContactCard from "./components/ContactCard/ContactCard";
import SpotifyCard from "./components/SpotifyCard/SpotifyCard";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen p-8 grid place-items-center">
      <div class="w-full max-w-screen-2xl grid auto-rows-[225px] grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        <div class="col-span-2 row-span-2 md:col-span-4">
          <Card>Item 1</Card>
        </div>
        <div class="col-span-2 md:col-span-4">
          <Card>Item 2</Card>
        </div>
        <div class="col-span-2 row-span-3 md:col-span-4 md:row-span-2">
          <Card>Item 3</Card>
        </div>
        <div class="col-span-2 row-span-2">
          <Card>Item 4</Card>
        </div>
        <div class="col-span-2 row-span-2">
          <Card>Item 5</Card>
        </div>
        <div class="col-span-2 md:col-span-2">
          <Card>Item 6</Card>
        </div>
        <div class="col-span-2 md:col-span-2">
          <Card>Item 7</Card>
        </div>
      </div>
    </div>
  );
}

export default App;
