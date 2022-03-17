import './styles/global.css'
import {ProffessorLayout} from "./components/proffessorLayout"
import title from "./assets/logo-inmode.png"
import date from "./assets/save-the-date.png"
import {InfoLayout} from "./components/infoLayout"

function App() {
  return (
    <div class="bg-layout-image bg-center bg-cover h-[calc(200vh)]">
      <div class="absolute ml-[38%] mt-10">
        <img src={title} alt=""></img>
      </div>
      <div class="absolute ml-[27%] mt-60">
        <img src={date} alt=""></img>
      </div>
      <div class="absolute ml-[60%] mt-56">
        <text class="text-white font-bold text-3xl">MAZATLÁN,</text>
        <br></br>
        <text class="text-white font-bold text-3xl">SINALOA.</text>
      </div>
      <div class="ml-[34.5%] absolute mt-72">
        <ProffessorLayout/>
      </div>

      <div class="absolute mt-[820px] ml-[32%]">
        <InfoLayout/>
      </div>
    </div>
  );
}

export default App;
