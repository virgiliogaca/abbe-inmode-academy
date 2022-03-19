import './styles/global.css'
import {ProffessorLayout} from "./components/proffessorLayout"
import title from "./assets/logo-inmode.png"
import date from "./assets/save-the-date.png"
import {InfoLayout} from "./components/infoLayout"
import {FormLayout} from "./components/formLayout"

function App() {
  return (
    <div class="bg-layout-image bg-center bg-cover 
    2xl:h-[2400px] 
    xl:h-[2250px] 
    lg:h-[2200px] 
    md:h-[3300px] 
    xs:h-[4000px]">
      <div class="absolute 
      2xl:ml-[38%] 2xl:mt-10 2xl:w-[600px] 
      xl:w-[500px] xl:ml-[35%] xl:mt-5 
      lg:w-[450px] lg:ml-[30%] lg:mt-10
      md:w-[500px] md:ml-[18%] md:mt-10
      xs:ml-[17%] xs:mt-10 xs:w-[280px]">
        <img src={title} alt=""></img>
      </div>
      <div class="absolute 
      2xl:ml-[27%] 2xl:mt-60 
      xl:ml-[24%] xl:mt-56 xl:w-80 
      lg:ml-[18%] lg:mt-60 lg:w-72
      md:mt-60 md:w-80 md:ml-[5%]
      xs:mt-44 xs:w-56 xs:ml-[5%]">
        <img src={date} alt=""></img>
      </div>
      <div class="absolute 
      2xl:ml-[60%] 2xl:mt-56 
      xl:ml-[68%] xl:mt-52 
      lg:ml-[68%] lg:mt-56 
      md:mt-56 md:ml-[75%]
      xs:mt-40 xs:ml-[70%]">
        <text class="text-white font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg xs:text-base">MAZATLÁN,</text>
        <br></br>
        <text class="text-white font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg xs:text-base">SINALOA.</text>
      </div>
      <div class="absolute 
      2xl:ml-[34.5%] 2xl:mt-72 
      xl:mt-72 xl:ml-[34.5%] 
      lg:mt-72 lg:ml-[25%] 
      md:mt-72 md:ml-[5%] 
      xs:mt-52">
        <ProffessorLayout/>
      </div>

      <div class="absolute 
      2xl:mt-[820px] 2xl:ml-[30%] 
      xl:mt-[800px] xl:ml-[28%] 
      lg:mt-[800px] lg:ml-[28%] 
      md:mt-[2000px] md:ml-[15%] 
      xs:mt-[2750px] xs:ml-[15%]">
        <InfoLayout/>
      </div>
      <div class="absolute 
      2xl:mt-[820px] 2xl:ml-[60%] 
      xl:mt-[800px] xl:ml-[65%] 
      lg:mt-[800px] lg:ml-[65%] 
      md:mt-[900px] md:ml-[15%] 
      xs:mt-[1650px] xs:ml-[15%]">
        <FormLayout/>
      </div>
    </div>
  );
}

export default App;
