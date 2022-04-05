import abbe from '../../assets/logo-abbe.png'

const InfoLayout = () => {
    return (
        <>
            <div class="bg-teal-400 
            2xl:w-52 2xl:h-10 
            xl:w-52 xl:h-10 
            lg:w-40 lg:h-9 
            md:w-[550px] md:h-10
            xs:w-[290px] xs:h-10
            xxs:w-[280px] xxs:h-10">
                <text class="text-white font-semibold 
                xl:text-3xl xl:ml-5 
                lg:text-2xl lg:ml-3 
                md:text-3xl md:ml-[180px]
                xs:text-3xl xs:ml-[65px]
                xxs:text-3xl xxs:ml-[60px]">PROGRAMA</text>
            </div>
            <div class="
            xl:-ml-14 xl:mt-3 
            lg:-ml-6 lg:mt-8 
            md:ml-36 md:mt-8
            xs:ml-10 xs:mt-8
            xxs:ml-8 xxs:mt-8">
                <text class="text-white font-extralight italic 
                xl:text-4xl 
                lg:text-2xl 
                md:text-3xl
                xs:text-2xl
                xxs:text-2xl">JUEVES 05 DE MAYO</text>
            </div>
            <div class="bg-white 
            xl:w-[480px] xl:-ml-32 
            lg:h-1 lg:w-[380px] lg:-ml-28 
            md:h-1 md:w-[500px] md:ml-6
            xs:h-1 xs:w-[350px] xs:-ml-8
            xxs:h-1 xxs:w-[350px] xxs:-ml-10"></div>
            <div class="
            xl:-ml-24
            lg:-ml-28
            md:ml-16
            sm:-ml-6
            xs:-ml-5
            xxs:-ml-5">
                <text class="text-white font-extralight 
                xl:text-lg 
                lg:text-base
                md:text-lg
                sm:text-sm
                xs:text-sm
                xxs:text-xs">BALLROOM C HOTEL HYATT, CAMPOS ELÍSEOS, CDMX</text>
            </div>
            <div class="mt-10">
                <text class="text-white font-bold 
                xl:text-lg 
                lg:text-sm 
                md:text-lg
                xs:text-base
                xxs:text-base">CURSO INSTRUCCIONAL:</text>
            </div>
            <div class="
            lg:-ml-24 
            lg:mt-10 
            md:ml-5 md:mt-10
            xs:ml-5 xs:mt-10
            xxs:ml-5 xxs:mt-10">
                <text class="text-teal-500 font-semibold 
                xl:text-xl 
                lg:text-lg
                md:text-lg
                sm:text-lg
                xs:text-lg
                xxs:text-lg">10:00-17:00 HRS - PRESENTACIÓN/TALLER</text>
                <br />
                <br />
                <text class="text-teal-500 font-semibold 
                xl:text-xl 
                lg:text-lg
                md:text-lg
                sm:text-lg
                xs:text-lg
                xxs:text-lg">17:00-19:00 HRS - CATA DE VINO</text>
            </div>
            <div class="
            lg:-ml-24 lg:mt-8 
            md:ml-5 md:mt-8
            xs:ml-5 xs:mt-8
            xxs:ml-5 xxs:mt-8">
                <text class="text-white font-light 
                xl:text-2xl 
                lg:text-lg
                sm:text-lg
                xs:text-lg
                xxs:text-lg">BY</text>
            </div>
            <div class="
            xl:mt-8 xl:-ml-16 xl:w-[320px] 
            lg:w-[260px] lg:mt-8 lg:-ml-16 
            md:ml-28 md:mt-10
            xs:ml-0 xs:mt-10
            xxs:-ml-4 xxs:mt-10">
                <a href="https://www.abbe.com.mx">
                    <img src={abbe} alt="" />
                </a>
            </div>
        </>
    );
}

export default InfoLayout