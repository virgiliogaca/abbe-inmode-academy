import morpheusBanner from '../../assets/MorpheusRifaBanner.png'
import morpheusProLogo from '../../assets/MorpheusProLogo.png'
import morpheusProObjeto from '../../assets/MorpheusObjeto.png'
import Instrucciones from '../../assets/instrucciones.pdf'

const MorpheusBanner = () => {
    return (
    <div className=''>
        <text className='flex justify-center text-white
        2xl:text-3xl 2xl:mt-28
        xl:text-2xl xl:mt-28
        lg:text-2xl lg:mt-28
        md:text-2xl md:mt-28
        sm:text-2xl sm:mt-28
        xs:text-2xl xs:mt-28
        xxs:text-2xl xxs:mt-28'>PARTICIPA EN LA RIFA DE UN</text>
        <img src={morpheusBanner} className='
        flex
        2xl:w-full 2xl:h-full 2xl:mt-0
        xl:w-full xl:h-[130px] xl:mt-0
        lg:w-full lg:h-[130px] lg:mt-0
        md:w-full md:h-[130px] md:mt-0
        sm:w-full sm:h-[130px] sm:mt-0 sm:ml-0
        xs:w-full xs:h-[500px] xs:mt-0 xs:ml-0
        xxs:w-full xxs:h-[500px] xxs:mt-0 xxs:ml-0' alt="" />
        <div className='absolute
        2xl:-mt-28 2xl:w-full 2xl:ml-[345px]
        xl:-mt-[120px] xl:w-full xl:ml-[250px]
        lg:-mt-[120px] lg:w-80 lg:ml-[250px]
        md:-mt-[120px] md:w-80 md:ml-[250px]
        sm:-mt-[120px] sm:w-80 sm:ml-[250px]
        xs:-mt-[480px] xs:w-60 xs:ml-[40px]
        xxs:-mt-[480px] xxs:w-60 xxs:ml-[40px]'>
            <img src={morpheusProLogo} alt="" />
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2
        2xl:-mt-44 2xl:ml-[450px] 2xl:w-80
        xl:-mt-44 xl:ml-[380px] xl:w-60
        lg:-mt-44 lg:ml-[380px] lg:w-60
        md:-mt-[110px] md:ml-[320px] md:w-48
        sm:-mt-36 sm:ml-[380px] sm:w-60
        xs:-mt-52 xs:-ml-[20px] xs:w-56
        xxs:-mt-52 xxs:-ml-[20px] xxs:w-56'>
            <img src={morpheusProObjeto} alt="" />
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2
        2xl:-mt-5
        xl:-mt-5
        lg:-mt-5
        md:-mt-5
        sm:-mt-5
        xs:mt-20
        xxs:mt-20'>
            <text className='absolute text-white font-thin w-auto
        2xl:mt-10 2xl:-ml-48 2xl:text-3xl
        xl:mt-10 xl:-ml-48 xl:text-3xl
        lg:mt-10 lg:-ml-48 lg:text-3xl
        md:mt-10 md:-ml-48 md:text-3xl
        sm:mt-10 sm:-ml-48 sm:text-3xl
        xs:mt-10 xs:-ml-[158px] xs:text-2xl
        xxs:mt-10 xxs:-ml-[158px] xxs:text-2xl'>Con valor de </text>
        <text className='absolute text-white font-bold w-auto
        2xl:mt-10 2xl:-ml-5 2xl:text-3xl
        xl:mt-10 xl:-ml-5 xl:text-3xl
        lg:mt-10 lg:-ml-5 lg:text-3xl
        md:mt-10 md:-ml-5 md:text-3xl
        sm:mt-10 sm:-ml-5 sm:text-3xl
        xs:mt-10 xs:-ml-5 xs:text-2xl
        xxs:mt-10 xxs:-ml-5 xxs:text-2xl'>$1,550,000.00*</text>
        </div>
        <div className='flex-row 
        sm:w-auto sm:mt-0
        xs:w-80 xs:mt-0
        xxs:w-80 xxs:mt-0'>
        <text className='flex justify-center text-white font-extralight
        2xl:text-2xl 2xl:mt-5
        xl:text-xl xl:mt-5
        lg:text-xl lg:mt-5
        md:text-lg md:mt-2
        sm:text-xl sm:mt-5
        xs:text-lg xs:mt-5
        xxs:text-lg xxs:mt-5'>La rifa se celebrará al finalizar la Cata de Vino de Abbe el día 5 de mayo</text>
        <br />
        <text className='flex justify-center text-white font-extralight
        2xl:text-xl 2xl:-mt-5
        xl:text-lg xl:-mt-5
        lg:text-lg lg:-mt-5
        md:text-base md:-mt-5
        sm:text-lg sm:-mt-5
        xs:text-lg xs:-mt-5
        xxs:text-lg xxs:-mt-5'>*Aplica únicamente para clientes Abbe (pre-aprobados o clientes vigentes).</text>
        <br />
        <text className='flex justify-center text-white font-extralight
        2xl:text-xl 2xl:-mt-5 2xl:w-full
        xl:text-lg xl:-mt-5 xl:w-[800px]
        lg:text-lg lg:-mt-5 lg:w-[800px]
        md:text-base md:-mt-5 md:w-[800px]
        sm:text-lg sm:-mt-5 sm:w-[800px]
        xs:text-lg xs:-mt-5 xs:w-[340px]
        xxs:text-lg xxs:-mt-5 xxs:w-[340px]'>Interesados que deseen participar deben enviar la documentación requerida antes del 5 de Mayo.</text>
        <br />
        <text className='flex justify-center text-white font-extralight
        2xl:text-xl 2xl:-mt-5
        xl:text-lg xl:-mt-5
        lg:text-lg lg:-mt-5
        md:text-base md:-mt-5
        sm:text-lg sm:-mt-5
        xs:text-lg xs:-mt-5
        xxs:text-lg xxs:-mt-5'>Consulta las bases<a href={Instrucciones} target='_blank' rel="noreferrer" className='text-blue-400 ml-2'>aquí</a></text>
        </div>
    </div>
    )
}

export default MorpheusBanner;