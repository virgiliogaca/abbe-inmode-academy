import bonan from '../../assets/bonan.png'
import bonanCV from '../../assets/bonan_cv.pdf'

const ProffessorLayout = () => {
    return (
        <div class="">
            <div class="
            2xl:-ml-14
            xl:ml-32
            lg:ml-56
            md:ml-32
            sm:ml-20
            xs:ml-1
            xxs:ml-1">
                <div class="mt-11">
                    <img src={bonan} class="
                    2xl:w-[800px]
                    xl:w-[680px]
                    lg:w-[600px]
                    md:w-[580px]
                    sm:w-[550px]
                    xs:w-[450px]" alt="" />

                    <text class="text-white absolute italic
                    2xl:ml-[400px] 2xl:-mt-[50px] 2xl:text-3xl
                    xl:text-2xl xl:ml-[350px] xl:-mt-[50px]
                    lg:text-xl lg:ml-[290px] lg:-mt-[42px]
                    md:text-lg md:ml-[290px] md:-mt-[42px]
                    sm:text-lg sm:ml-[290px] sm:-mt-[42px]
                    xs:text-base xs:ml-[220px] xs:-mt-[38px]
                    xxs:text-sm xxs:ml-[180px] xxs:-mt-[28px]">
                        <a href={bonanCV} rel="noreferrer" target="_blank">
                            Descarga su CV
                        </a>
                    </text>
                </div>
            </div>
        </div>
    )
}

export default ProffessorLayout;