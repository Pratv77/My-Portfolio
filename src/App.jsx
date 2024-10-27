import "./App.css";
import MainProfileCard from "./components/MainProfileCard/MainProfileCard";
import TechStackCard from "./components/TechStackCard/TechStackCard";
import PratGPTCard from "./components/PratGPTCard/PratGPTCard";
import MainProjectCard from "./components/MainProjectCard/MainProjectCard";
import PhotoGalleryCard from "./components/PhotoGalleryCard/PhotoGalleryCard";
import ContactCard from "./components/ContactCard/ContactCard";
import SpotifyCard from "./components/SpotifyCard/SpotifyCard";

function App() {
  return (
    <div class="max-w-screen-2xl grid auto-rows-[225px] grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 p-4">
      <div class="bg-gray-100 p-4 col-span-2 row-span-2 md:col-span-4">Item 1</div>
      <div class="bg-gray-100 p-4 col-span-2 md:col-span-4">Item 2</div>
      <div class="bg-gray-100 p-4 col-span-2 row-span-3 md:col-span-4 md:row-span-2">Item 3</div>
      <div class="bg-gray-100 p-4 col-span-2 row-span-2">Item 4</div>
      <div class="bg-gray-100 p-4 col-span-2 row-span-2">Item 5</div>
      <div class="bg-gray-100 p-4 col-span-2 md:col-span-2">Item 6</div>
      <div class="bg-gray-100 p-4 col-span-2 md:col-span-2">Item 7</div>
    </div>
  );
}

export default App;
