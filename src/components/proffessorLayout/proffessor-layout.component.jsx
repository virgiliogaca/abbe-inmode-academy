import salvatore from '../../assets/Salvatore-Pagano.png'
import stephen from '../../assets/Stephen-Mulholland.png'
import mulhollandCV from '../../assets/Mulholland-CV.pdf'
import salvatoreCV from '../../assets/Salvatore-CV.pdf'

const ProffessorLayout = () => {
    return (
        <div class="">
            <div class="
            sm:flex sm:items-center sm:space-x-44 sm:-ml-14
            xs:ml-28
            xxs:ml-[105px]">
                <div class="mt-11">
                    <img src={stephen} class="
                    2xl:w-72 
                    xl:w-32 
                    lg:w-32" alt="" />
                    <text class="font-bold text-white 
                    2xl:ml-1 2xl:text-xl 
                    xl:text-sm 
                    lg:text-sm lg:ml-0 
                    xs:ml-4
                    xxs:ml-4">DR. STEPHEN MULHOLLAND</text>
                    <br />
                    <br />
                    <text class="text-teal-300 font-light 
                    2xl:ml-16 2xl:text-xl 
                    xl:text-sm 
                    lg:text-sm lg:ml-0 
                    xs:ml-4
                    xxs:ml-4">
                        <a href={mulhollandCV} rel="noreferrer" target="_blank">
                            Descarga su CV
                        </a>
                    </text>
                </div>
                <div class="mt-11">
                    <img src={salvatore} class="
                    2xl:w-72
                    xl:w-32 
                    lg:w-32" alt="" />
                    <text class="text-white font-bold 
                    2xl:ml-6 2xl:text-xl 
                    xl:text-sm xl:-ml-4 
                    lg:text-sm lg:-ml-4">DR. SALVATORE PAGANO</text>
                    <br />
                    <br />
                    <text class="text-teal-300 font-light 
                    2xl:ml-20 2xl:text-xl 
                    xl:text-sm 
                    lg:text-sm lg:ml-0 
                    xs:ml-4
                    xxs:ml-4">
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