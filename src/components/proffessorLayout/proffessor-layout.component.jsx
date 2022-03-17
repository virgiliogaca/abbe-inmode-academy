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
                    <img src={paolo} class="w-40" alt="" />
                    <text class="-ml-1 font-bold text-white">DR. PAOLO ROVATTI</text>
                </div>
                <div class="mt-11">
                    <img src={sheila} class="w-40" alt="" />
                    <text class="text-white font-bold -ml-5">DRA. SHEILA NAZARIAN</text>
                </div>
                <div class="mt-11">
                    <img src={alfredo} class="w-40" alt="" />
                    <text class="text-white font-bold -ml-3">DR. ALFREDO DE HOYOS</text>
                </div>
            </div>
            <div class="flex items-center ml-28 mt-10 space-x-20">
                <div>
                    <img src={sergio} alt="" class="w-[34]" />
                    <text class="text-white font-bold">DR. SERGIO AYUZO</text>
                    <br></br>
                    <text class="text-white ml-3">COORDINADOR</text>
                </div>
                <div>
                    <img src={andres} alt="" class="w-[34]"/>
                    <text class="text-white font-bold">DR. ANDRÉS BELLO</text>
                    <br></br>
                    <text class="text-white ml-3">COORDINADOR</text>
                </div>
            </div>
        </div>
    )
}

export default ProffessorLayout;