import salvatore from '../../assets/Salvatore-Pagano.png'
import stephen from '../../assets/Stephen-Mulholland.png'
import mulhollandCV from '../../assets/Mulholland-CV.pdf'
import salvatoreCV from '../../assets/Salvatore-CV.pdf'

const ProffessorLayout = () => {
    return (
        <div class="">
            <div class="
            2xl:-ml-14
            xl:-ml-28
            lg:space-x-44
            sm:flex sm:items-center sm:space-x-32 sm:ml-0
            xs:ml-28
            xxs:ml-[105px]">
                <div class="mt-11">
                    <img src={stephen} class="
                    2xl:w-72
                    xl:w-72
                    lg:w-60" alt="" />
                    <text class="font-bold text-white
                    2xl:ml-1 2xl:text-xl 
                    xl:text-xl
                    lg:text-lg lg:ml-0
                    md:text-lg md:ml-3
                    sm:text-lg sm:ml-3
                    xs:-ml-6 xs:text-2xl
                    xxs:-ml-6 xxs:text-2xl">DR. STEPHEN MULHOLLAND</text>
                    <br />
                    <br />
                    <text class="text-teal-300 font-light
                    2xl:ml-16 2xl:text-xl
                    xl:text-xl xl:ml-16
                    lg:text-lg lg:ml-16
                    md:text-lg md:ml-20
                    sm:text-lg sm:ml-16
                    xs:ml-16 xs:text-xl
                    xxs:ml-16 xxs:text-xl">
                        <a href={mulhollandCV} rel="noreferrer" target="_blank">
                            Descarga su CV
                        </a>
                    </text>
                </div>
                <div class="mt-11">
                    <img src={salvatore} class="
                    2xl:w-72
                    xl:w-72
                    lg:w-60" alt="" />
                    <text class="text-white font-bold
                    2xl:ml-6 2xl:text-xl
                    xl:text-xl xl:ml-6
                    lg:text-lg lg:ml-2
                    md:text-lg md:ml-10
                    sm:text-lg sm:ml-10
                    xs:ml-1 xs:text-2xl
                    xxs:ml-0 xxs:text-2xl">DR. SALVATORE PAGANO</text>
                    <br />
                    <br />
                    <text class="text-teal-300 font-light
                    2xl:ml-20 2xl:text-xl
                    xl:text-xl xl:ml-20
                    lg:text-lg lg:ml-16
                    md:text-lg md:ml-20
                    sm:text-lg sm:ml-20
                    xs:text-xl xs:ml-20
                    xxs:text-xl xxs:ml-20">
                        <a href={salvatoreCV} rel="noreferrer" target="_blank">
                            Descarga su CV
                        </a>
                    </text>
                </div>
            </div>
        </div>
    )
}

export default ProffessorLayout;