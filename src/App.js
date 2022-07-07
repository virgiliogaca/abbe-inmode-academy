import './styles/global.css'
import {ProffessorLayout} from "./components/proffessorLayout"
import {MorpheusBanner} from './components/morpheusBanner'
import title from "./assets/logo-deka.png"
import dermajal from "./assets/dermajal.png"
import {InfoLayout} from "./components/infoLayout"
import {FormLayout} from "./components/formLayout"

function App() {
  return (
    <div class="bg-layout-image  
    2xl:h-[2350px]
    xl:h-[2350px] 
    lg:h-[2300px] 
    md:h-[3300px]
    sm:h-[3100px]
    xs:h-[4200px] 
    xxs:h-[4550px]">
      <div class="absolute 
      2xl:ml-[33%] 2xl:mt-28 2xl:w-[600px] 
      xl:w-[500px] xl:ml-[34%] xl:mt-24 
      lg:w-[480px] lg:ml-[29%] lg:mt-28
      md:w-[500px] md:ml-[23%] md:mt-32
      sm:ml-[18%] sm:mt-36 sm:w-[450px]
      xs:ml-[8%] xs:mt-44 xs:w-[350px]
      xxs:ml-[5%] xxs:mt-44 xxs:w-[350px]">
        <img src={title} alt=""></img>
      </div>
      
      <div class="absolute 
      2xl:ml-[34%] 2xl:mt-[450px]
      xl:ml-[32%] xl:mt-[370px]
      lg:ml-[31%] lg:mt-[370px]
      md:mt-[380px] md:ml-[26%]
      sm:mt-[380px] sm:ml-[24%]
      xs:mt-[350px] xs:ml-[11%]
      xxs:mt-[360px] xxs:ml-[17%]">
        <div class="text-white
        2xl:text-3xl 
        xl:text-3xl
        lg:text-2xl
        md:text-2xl
        sm:text-xl
        xs:text-lg
        xxs:text-sm">
          <div class="bg-white 
            xl:w-[555px] xl:-ml-1 xl:h-0.5
            lg:h-0.5 lg:w-[445px] lg:-ml-1 
            md:h-0.5 md:w-[445px] md:-ml-1
            sm:h-0.5 sm:w-[375px] sm:-ml-1
            xs:h-0.5 xs:w-[338px] xs:-ml-1
            xxs:h-0.5 xxs:w-[262px] xxs:-ml-1"></div>
          <text class="font-bold">TE ESPERAMOS ESTE</text><text> 29 JULIO 17:00 hrs</text>
          <div class="bg-white 
            xl:w-[555px] xl:-ml-1 xl:h-0.5 xl:mt-1
            lg:h-0.5 lg:w-[445px] lg:-ml-1 lg:mt-1
            md:h-0.5 md:w-[445px] md:-ml-1 md:mt-1
            sm:h-0.5 sm:w-[375px] sm:-ml-1 sm:mt-1
            xs:h-0.5 xs:w-[338px] xs:-ml-1 xs:mt-1
            xxs:h-0.5 xxs:w-[262px] xxs:-ml-1 xxs:mt-1"></div>
          </div>
        <div class="text-white font-bold 
        2xl:text-3xl 2xl:ml-24
        xl:text-3xl xl:ml-24
        lg:text-xl lg:ml-28
        md:text-xl md:ml-28
        sm:text-lg sm:ml-20
        xs:text-base xs:ml-16
        xxs:text-sm xxs:ml-14"><text class="text-white">EN</text><text class="text-fuchsia-500"> SALÓN ZAPOPAN</text></div>
      </div>
      <div class="absolute
      2xl:mt-[550px] 2xl:ml-[31%] 2xl:w-[700px]
      xl:mt-[460px] xl:ml-[30%] xl:w-[620px]
      lg:mt-[445px] lg:ml-[27%] lg:w-[550px]
      md:mt-[460px] md:ml-[21%] md:w-[550px]
      sm:mt-[450px] sm:ml-[15%] sm:w-[500px]
      xs:mt-[415px] xs:ml-[7%] xs:w-[370px]
      xxs:mt-[410px] xxs:ml-[5%] xxs:w-[350px]">
        <img src={dermajal} alt=""></img>
      </div>

      <text class="text-white absolute italic z-50
                    2xl:ml-[55%] 2xl:mt-[660px] 2xl:text-3xl
                    xl:text-2xl xl:ml-[58%] xl:mt-[550px]
                    lg:text-xl lg:ml-[57%] lg:mt-[530px]
                    md:text-lg md:ml-[61%] md:mt-[540px]
                    sm:text-lg sm:ml-[64%] sm:mt-[530px]
                    xs:text-base xs:ml-[250px] xs:mt-[470px]
                    xxs:text-sm xxs:ml-[250px] xxs:mt-[470px]">
          <a href="https://dermajal.com.mx" rel="noreferrer" target="_blank">
              Registrate aquí
          </a>
      </text>

      <div class="absolute z-10
      2xl:mt-[620px] 2xl:ml-[32.5%]
      xl:mt-[530px] xl:ml-[20%]
      lg:mt-[500px]
      md:mt-[510px] md:ml-[9%]
      sm:mt-[490px]
      xs:mt-[440px]
      xxs:mt-[430px] xxs:ml-[0%]">
        <ProffessorLayout/>
      </div>
      <div class="absolute z-0
      2xl:mt-[880px] 2xl:ml-[30%]
      xl:mt-[750px] xl:ml-[29%]
      lg:mt-[700px] lg:ml-[26%]
      md:mt-[720px] md:ml-[22%]
      sm:mt-[680px] sm:ml-[18%]
      xs:mt-[600px]
      xxs:mt-[580px] xxs:ml-[0%]">
        <MorpheusBanner/>
      </div>
      <div class="absolute 
      2xl:mt-[1300px] 2xl:ml-[30%] 
      xl:mt-[1200px] xl:ml-[26%] 
      lg:mt-[1100px] lg:ml-[24%] 
      md:mt-[2450px] md:ml-[15%] 
      sm:mt-[2300px] sm:ml-[30%]
      xs:mt-[3350px] xs:ml-[16%]
      xxs:mt-[3350px] xxs:ml-[14%]">
        <InfoLayout/>
      </div>
      <div class="absolute 
      2xl:mt-[1300px] 2xl:ml-[60%] 
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
