import './styles/global.css'
import {ProffessorLayout} from "./components/proffessorLayout"
import {MorpheusBanner} from './components/morpheusBanner'
import title from "./assets/logo-inmode.png"
import date from "./assets/save-the-date.png"
import {InfoLayout} from "./components/infoLayout"
import {FormLayout} from "./components/formLayout"

function App() {
  return (
    <div class="bg-layout-image bg-center bg-cover 
    2xl:h-[2350px] 
    xl:h-[2350px] 
    lg:h-[2300px] 
    md:h-[3300px]
    sm:h-[3100px]
    xs:h-[4200px] 
    xxs:h-[4550px] xxs:w-full">
      <div class="absolute 
      2xl:ml-[38%] 2xl:mt-10 2xl:w-[600px] 
      xl:w-[500px] xl:ml-[33%] xl:mt-5 
      lg:w-[480px] lg:ml-[29%] lg:mt-12
      md:w-[500px] md:ml-[23%] md:mt-10
      sm:ml-[18%] sm:mt-10 sm:w-[450px]
      xs:ml-[5%] xs:mt-10 xs:w-[350px]
      xxs:ml-[5%] xxs:mt-10 xxs:w-[350px]">
        <img src={title} alt=""></img>
      </div>
      <div class="absolute 
      2xl:ml-[27%] 2xl:mt-60 
      xl:ml-[21%] xl:mt-56 xl:w-80 
      lg:ml-[18%] lg:mt-60 lg:w-72
      md:mt-60 md:w-72 md:ml-[5%]
      sm:mt-52 sm:w-72 sm:ml-[5%]
      xs:mt-52 xs:w-60 xs:ml-[5%]
      xxs:mt-52 xxs:w-56 xxs:ml-[5%]">
        <img src={date} alt=""></img>
      </div>
      <div class="absolute 
      2xl:ml-[60%] 2xl:mt-56 
      xl:ml-[61%] xl:mt-52
      lg:ml-[60%] lg:mt-56
      md:mt-56 md:ml-[68%]
      sm:mt-48 sm:ml-[70%]
      xs:mt-48 xs:ml-[70%]
      xxs:mt-40 xxs:ml-[70%]">
        <text class="text-white font-bold 
        2xl:text-xl 
        xl:text-xl
        lg:text-base
        md:text-base
        sm:text-sm
        xs:text-sm
        xxs:text-sm">HYATT, CAMPOS ELÍSEOS</text>
        <br></br>
        <text class="text-white font-bold 
        2xl:text-3xl 
        xl:text-2xl 
        lg:text-xl 
        md:text-lg 
        sm:text-lg
        xs:text-lg
        xxs:text-lg">CDMX</text>
      </div>
      <div class="absolute z-10
      2xl:ml-[34.5%] 2xl:mt-72 
      xl:mt-72 xl:ml-[32.5%] 
      lg:mt-72 lg:ml-[20%] 
      md:mt-72 md:ml-[9%]
      xs:mt-60 xs:-ml-16
      xxs:mt-52 xxs:-ml-16">
        <ProffessorLayout/>
      </div>
      <div class="absolute left-1/2 transform -translate-x-1/2
      2xl:mt-[670px]
      xl:mt-[700px]
      lg:mt-[625px] lg:ml-0
      md:mt-[680px] md:-ml-10
      xs:mt-[1100px] xs:-ml-1
      xxs:mt-[1100px] xxs:-ml-1">
        <MorpheusBanner/>
      </div>
      <div class="absolute 
      2xl:mt-[1150px] 2xl:ml-[30%] 
      xl:mt-[1200px] xl:ml-[26%] 
      lg:mt-[1100px] lg:ml-[24%] 
      md:mt-[2450px] md:ml-[15%] 
      sm:mt-[2300px] sm:ml-[30%]
      xs:mt-[3350px] xs:ml-[16%]
      xxs:mt-[3350px] xxs:ml-[14%]">
        <InfoLayout/>
      </div>
      <div class="absolute 
      2xl:mt-[1150px] 2xl:ml-[60%] 
      xl:mt-[1200px] xl:ml-[63%] 
      lg:mt-[1100px] lg:ml-[60%] 
      md:mt-[1150px] md:ml-[15%]
      sm:mt-[1020px] sm:ml-[15%] 
      xs:mt-[2050px] xs:ml-[5%]
      xxs:mt-[2050px] xxs:ml-[5%]">
        <FormLayout/>
      </div>
    </div>
  );
}

export default App;
