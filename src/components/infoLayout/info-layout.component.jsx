import cirugiasEnVivo from '../../assets/facetite.png'
import abbe from '../../assets/logo-abbe.png'

const InfoLayout = () => {
    return (
        <>
            <div class="bg-teal-400 w-52 h-10">
                <text class="text-white font-semibold text-3xl ml-5 ">PROGRAMA</text>
            </div>
            <div class="-ml-14 mt-3">
                <text class="text-white font-extralight italic text-4xl">VIERNES 01 DE ABRIL</text>
            </div>
            <div class="bg-white w-[480px] h-1 -ml-32"></div>
            <div class="-ml-14">
                <text class="text-white font-extralight text-lg">CENTRO DE CONVENCIONES MAZATLÁN</text>
            </div>
            <div class="mt-10">
                <text class="text-white font-bold text-lg">CURSO INSTRUCCIONAL:</text>
            </div>
            <div class="-ml-24 mt-10">
                <text class="text-white font-light text-2xl">DISPOSITIVOS QUIRÚRGICOS</text>
                <br />
                <text class="text-white font-light text-2xl">PARA MAXIMIZAR LOS RESULTADOS</text>
                <br />
                <text class="text-white font-light text-2xl">(BODYTITE)</text>
                <br />
                <br />
                <text class="text-white font-light text-2xl">SALÓN CARNAVAL 2</text>
            </div>
            <div class="-ml-14 mt-24">
                <text class="text-white font-extralight italic text-4xl">SÁBADO 02 DE ABRIL</text>
            </div>
            <div class="bg-white w-[480px] h-1 -ml-32"></div>
            <div class="-ml-14">
                <text class="text-white font-extralight text-lg">CENTRO DE CONVENCIONES MAZATLÁN</text>
            </div>
            <div class="mt-10">
                <text class="text-white font-bold text-lg">CURSO INSTRUCCIONAL:</text>
            </div>
            <div class="-ml-24 mt-10">
                <text class="text-white font-light text-2xl">CIRUGÍA FACIAL BUSCANDO</text>
                <br />
                <text class="text-white font-light text-2xl">RESULTADOS ARMÓNICOS</text>
                <br />
                <br />
                <text class="text-white font-light text-2xl">SALÓN CARNAVAL 2</text>
                <br />
                <br />
                <text class="text-teal-600 font-semibold text-lg">15:15 - 17:00 HRS - HOSPITAL SHARP MAZATLÁN</text>
                <br />
                <text class="text-white font-light text-2xl">TRES CIRUGÍAS EN VIVO REALIZADAS</text>
                <br />
                <text class="text-white font-light text-2xl">POR EL DR. PAOLO ROVATTI Y LA DRA.</text>
                <br />
                <text class="text-white font-light text-2xl">SHEILAN NAZARIAN</text>
                <br />
                <text class="text-white font-light text-2xl">EN DONDE VEREMOS:</text>
            </div>
            <div class="-ml-20 mt-8">
                <img src={cirugiasEnVivo} alt="" />
            </div>
            <div class="-ml-24 mt-8">
                <text class="text-teal-600 font-semibold text-lg">20:00 INMODE PARTY</text>
                <br />
                <text class="text-white font-light text-2xl">RESTAURANTE MAZATLECA</text>
                <br />
                <text class="text-white font-light text-2xl">BY</text>
            </div>
            <div class="mt-8 -ml-16">
                <a href="https://www.abbe.com.mx">
                    <img src={abbe} alt="" />
                </a>
            </div>
        </>
    );
}

export default InfoLayout