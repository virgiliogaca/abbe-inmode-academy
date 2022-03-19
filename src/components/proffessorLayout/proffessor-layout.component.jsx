import paolo from '../../assets/paolo-rovatti.png'
import sheila from '../../assets/sheilanazarian.png'
import alfredo from '../../assets/alfredo-hoyos.png'
import sergio from '../../assets/sergio-ayuzo.png'
import andres from '../../assets/andres-bello.png'

const ProffessorLayout = () => {
    return (
        <div class="">
            <div class="flex items-center space-x-16">
                <div class="mt-11">
                    <img src={paolo} class="2xl:w-40 xl:w-32 lg:w-32" alt="" />
                    <text class="font-bold text-white 2xl:-ml-1 2xl:text-base xl:text-sm lg:text-sm">DR. PAOLO ROVATTI</text>
                </div>
                <div class="mt-11">
                    <img src={sheila} class="2xl:w-40 xl:w-32 lg:w-32" alt="" />
                    <text class="text-white font-bold 2xl:-ml-5 2xl:text-base xl:text-sm xl:-ml-4 lg:text-sm lg:-ml-4">DRA. SHEILA NAZARIAN</text>
                </div>
                <div class="mt-11">
                    <img src={alfredo} class="2xl:w-40 xl:w-32 lg:w-32" alt="" />
                    <text class="text-white font-bold 2xl:-ml-3 2xl:text-base xl:text-sm xl:-ml-4 lg:text-sm lg:-ml-4">DR. ALFREDO DE HOYOS</text>
                </div>
            </div>
            <div class="flex items-center ml-28 mt-10 space-x-20">
                <div>
                    <img src={sergio} alt="" class="2xl:w-[34] xl:w-28 lg:w-28 md:ml-12"/>
                    <text class="text-white font-bold 2xl:text-base xl:text-sm xl:-ml-2 lg:text-sm lg:-ml-2
                    md:ml-12">DR. SERGIO AYUZO</text>
                    <br></br>
                    <text class="text-white 2xl:ml-1 2xl:text-base xl:text-sm xl:ml-1 lg:text-sm lg:ml-1
                    md:ml-16">COORDINADOR</text>
                </div>
                <div>
                    <img src={andres} alt="" class="2xl:w-[34] xl:w-28 lg:w-28"/>
                    <text class="text-white font-bold 2xl:text-base xl:text-sm xl:-ml-2 lg:text-sm lg:-ml-2">DR. ANDRÉS BELLO</text>
                    <br></br>
                    <text class="text-white 2xl:m-1 2xl:text-base xl:text-sm xl:ml-1 lg:text-sm lg:ml-1
                    md:ml-4">COORDINADOR</text>
                </div>
            </div>
        </div>
    )
}

export default ProffessorLayout;