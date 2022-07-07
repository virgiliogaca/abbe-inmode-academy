import abbe from '../../assets/logo-abbe.png'
import whatsapp from '../../assets/whatsapp.png'

const InfoLayout = () => {
    return (
        <>
            <div class="bg-[#1c0d44] rounded-full
            2xl:w-52 2xl:h-10 
            xl:w-52 xl:h-10 
            lg:w-40 lg:h-9 
            md:w-[550px] md:h-10
            xs:w-[290px] xs:h-10
            xxs:w-[280px] xxs:h-10">
                <text class="text-white font-light italic 
                xl:text-3xl xl:ml-7 
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
                xxs:text-2xl">VIERNES 29 DE JULIO</text>
            </div>
            <div class="bg-white 
            xl:w-[480px] xl:-ml-32 
            lg:h-0.5 lg:w-[380px] lg:-ml-28 
            md:h-0.5 md:w-[500px] md:ml-6
            xs:h-0.5 xs:w-[350px] xs:-ml-8
            xxs:h-0.5 xxs:w-[350px] xxs:-ml-10"></div>

            <div class="
            xl:ml-7
            lg:-ml-28
            md:ml-16
            sm:-ml-6
            xs:-ml-5
            xxs:-ml-5">
                <div class="text-white mt-1
                xl:text-lg 
                lg:text-base
                md:text-lg
                sm:text-sm
                xs:text-sm
                xxs:text-xs"><text>SALÓN</text> <text class="text-fuchsia-500">ZAPOPAN</text></div>
            </div>

            <div class="bg-white rounded-lg 
            lg:-ml-32 h-full
            lg:mt-10 
            md:ml-5 md:mt-10
            xs:-ml-9 xs:mt-10
            xxs:-ml-10 xxs:mt-10">
                <text class="text-black font-bold 
                xl:text-xl
                lg:text-lg
                md:text-lg
                sm:text-lg
                xs:text-lg
                xxs:text-lg">17:00 - 20:00 MASTERCLASS PROF. BONAN</text>
                <br />
                <br />
                <text class="text-black font-bold 
                xl:text-xl 
                lg:text-lg
                md:text-lg
                sm:text-lg
                xs:text-lg
                xxs:text-lg">20:00 - 22:00 COCTÉL Y CATA DE VINO</text>
            </div>

            <div class="
            xl:mt-8 xl:-ml-16 xl:w-[320px] 
            lg:w-[260px] lg:mt-8 lg:-ml-16 
            md:ml-28 md:mt-10 md:w-[350px]
            sm:-ml-8 sm:mt-10 sm:w-[350px]
            xs:-ml-8 xs:mt-10 xs:w-[350px]
            xxs:-ml-8 xxs:mt-10 xxs:w-[350px]">
                <a href="https://wa.me/525579330121?text=tengo dudas del DEKA MASTERCLASS" rel="noreferrer" target="_blank" class="
                font-bold absolute italic underline
                xl:ml-32 xl:text-xl xl:mt-16
                lg:ml-24 lg:text-lg lg:mt-12
                md:ml-36 md:text-xl md:mt-[70px]
                sm:ml-36 sm:text-xl sm:mt-[70px]
                xs:ml-36 xs:text-xl xs:mt-[70px]
                xxs:ml-36 xxs:text-xl xxs:mt-[70px]">55 7933 0121</a>
                <img src={whatsapp} alt="" />
            </div>

<br />
<br />
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