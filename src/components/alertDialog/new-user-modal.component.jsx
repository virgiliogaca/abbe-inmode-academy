import Button from '@mui/material/Button';
import Instrucciones from '../../assets/instrucciones.pdf'

const NewUserModal = (
    {
        handleChange
    }
) => {
    return (
        <div class="bg-white
        2xl:w-[400px] 2xl:h-[800px] 2xl:ml-[40%] 2xl:mt-[6%]
        xl:w-[400px] xl:h-[750px] xl:ml-[36%] xl:mt-0
        lg:w-[400px] lg:h-[700px] lg:ml-[33%] lg:mt-4
        md:w-[400px] md:h-[800px] md:ml-[26%] md:mt-[8%]
        sm:w-[400px] sm:h-[800px] sm:ml-[40%] sm:mt-[5%]
        xxs:w-[330px] xxs:h-[670px] xs:ml-[10%] xs:mt-24
        xxs:ml-[7%] xxs:mt-3">
            <text class="font-bold fixed
            2xl:text-3xl 2xl:ml-24 2xl:mt-14
            xl:text-3xl xl:ml-24 xl:mt-5
            lg:text-3xl lg:ml-24 lg:mt-5
            md:text-3xl md:ml-24 md:mt-14
            sm:text-3xl sm:ml-24 sm:mt-14
            xxs:text-2xl xxs:ml-20 xxs:mt-5">
                ¡FELICIDADES!
            </text>
            <div class="fixed bg-teal-900 brightness-50 saturate-100 hue-rotate-30 rounded-lg
            2xl:w-[360px] 2xl:h-[100px] 2xl:ml-5 2xl:mt-28
            xl:w-[360px] xl:h-[100px] xl:ml-5 xl:mt-20
            lg:w-[360px] lg:h-[100px] lg:ml-5 lg:mt-[73px]
            md:w-[360px] md:h-[100px] md:ml-5 mdl:mt-28
            sm:w-[360px] sm:h-[100px] sm:ml-5 sm:mt-28
            xxs:w-[290px] xxs:h-[95px] xxs:ml-5 xxs:mt-16">
            </div>
            <text class="text-teal-400 fixed font-normal
            2xl:mt-[120px] 2xl:ml-[60px] 2xl:text-2xl
            xl:mt-[85px] xl:ml-[60px] xl:text-2xl
            lg:mt-[80px] lg:ml-[60px] lg:text-2xl
            md:mt-[120px] md:ml-[60px] md:text-2xl
            sm:mt-[120px] sm:ml-[60px] sm:text-2xl
            xxs:mt-[70px] xxs:ml-[50px] xxs:text-xl">
                    Te has registrado con éxito
            </text>
            <br />
            <text class="text-teal-400 fixed font-normal
            2xl:mt-[120px] 2xl:ml-[70px] 2xl:text-2xl
            xl:mt-[85px] xl:ml-[70px] xl:text-2xl
            lg:mt-[80px] lg:ml-[70px] lg:text-2xl
            md:mt-[120px] md:ml-[70px] md:text-2xl
            sm:mt-[120px] sm:ml-[70px] sm:text-2xl
            xxs:mt-[70px] xxs:ml-[60px] xxs:text-xl">
                    en el INMODE ACADEMY
            </text>
            <br />
            <text class="text-teal-400 fixed font-normal
            2xl:mt-[120px] 2xl:ml-[130px] 2xl:text-2xl
            xl:mt-[85px] xl:ml-[130px] xl:text-2xl
            lg:mt-[80px] lg:ml-[130px] lg:text-2xl
            md:mt-[120px] md:ml-[130px] md:text-2xl
            sm:mt-[120px] sm:ml-[130px] sm:text-2xl
            xxs:mt-[70px] xxs:ml-[115px] xxs:text-xl">
                   05/05/2022
            </text>
            <div class="fixed bg-stone-300
            2xl:w-[400px] 2xl:h-[140px] 2xl:ml-0 2xl:mt-44
            xl:w-[400px] xl:h-[150px] xl:ml-0 xl:mt-40
            lg:w-[400px] lg:h-[140px] lg:ml-0 lg:mt-36
            md:w-[400px] md:h-[140px] md:ml-0 md:mt-44
            sm:w-[400px] sm:h-[140px] sml:ml-0 sm:mt-44
            xxs:w-[330px] xxs:h-[130px] xxs:ml-0 xxs:mt-32">
            </div>
            <text class="fixed font-bold
            2xl:mt-[180px] 2xl:ml-[80px] 2xl:text-2xl
            xl:mt-[170px] xl:ml-[80px] xl:text-2xl
            lg:mt-[150px] lg:ml-[80px] lg:text-2xl
            md:mt-[180px] md:ml-[80px] md:text-2xl
            sm:mt-[180px] sm:ml-[80px] sm:text-2xl
            xxs:mt-[130px] xxs:ml-[75px] xxs:text-xl">
                    AVISO IMPORTANTE
            </text>
            <br />
            <text class="fixed font-normal
            2xl:mt-[180px] 2xl:ml-[50px] 2xl:text-2xl
            xl:mt-[170px] xl:ml-[50px] xl:text-2xl
            lg:mt-[150px] lf:ml-[50px] lg:text-2xl
            md:mt-[180px] md:ml-[50px] md:text-2xl
            sm:mt-[180px] sm:ml-[50px] sm:text-2xl
            xxs:mt-[130px] xxs:ml-[50px] xxs:text-xl">
                    Para poder participar en la
            </text>
            <br />
            <text class="fixed font-normal
            2xl:mt-[180px] 2xl:ml-[50px] 2xl:text-2xl
            xl:mt-[170px] xl:ml-[50px] xl:text-2xl
            lg:mt-[150px] lg:ml-[50px] lg:text-2xl
            md:mt-[180px] md:ml-[50px] md:text-2xl
            sm:mt-[180px] sm:ml-[50px] sm:text-2xl
            xxs:mt-[130px] xxs:ml-[50px] xxs:text-xl">
                rifa de
            </text>
            <text class="fixed font-bold
            2xl:mt-[180px] 2xl:ml-[125px] 2xl:text-2xl
            xl:mt-[170px] xl:ml-[125px] xl:text-2xl
            lg:mt-[150px] lg:ml-[125px] lg:text-2xl
            md:mt-[180px] md:ml-[125px] md:text-2xl
            sm:mt-[180px] sm:ml-[125px] sm:text-2xl
            xxs:mt-[130px] xxs:ml-[110px] xxs:text-xl">
                   MORPHEUS PRO
            </text>
            <text class="fixed font-normal
            2xl:mt-[180px] 2xl:ml-[318px] 2xl:text-2xl
            xl:mt-[170px] xl:ml-[318px] xl:text-2xl
            lg:mt-[150px] lg:ml-[318px] lg:text-2xl
            md:mt-[180px] md:ml-[318px] md:text-2xl
            sm:mt-[180px] sm:ml-[318px] sm:text-2xl
            xxs:mt-[130px] xxs:ml-[270px] xxs:text-xl">
                es
            </text>
            <br />
            <text class="fixed font-normal
            2xl:mt-[180px] 2xl:ml-[65px] 2xl:text-2xl
            xl:mt-[170px] xl:ml-[65px] xl:text-2xl
            lg:mt-[150px] lg:ml-[65px] lg:text-2xl
            md:mt-[180px] md:ml-[65px] md:text-2xl
            sm:mt-[180px] sm:ml-[65px] sm:text-2xl
            xxs:mt-[130px] xxs:ml-[60px] xxs:text-xl">
                necesario que mandes la
            </text>
            <br />
            <text class="fixed font-normal
            2xl:mt-[180px] 2xl:ml-[60px] 2xl:text-2xl
            xl:mt-[170px] xl:ml-[60px] xl:text-2xl
            lg:mt-[150px] lg:ml-[60px] lg:text-2xl
            md:mt-[180px] md:ml-[60px] md:text-2xl
            sm:mt-[180px] sm:ml-[60px] sm:text-2xl
            xxs:mt-[130px] xxs:ml-[60px] xxs:text-xl">
                siguiente documentación:
            </text>
            <div className='absolute 
            2xl:mt-60 2xl:ml-24
            xl:mt-56 xl:ml-24
            lg:mt-48 lg:ml-24
            md:mt-60 md:ml-24
            sm:mt-60 sm:ml-24
            xxs:mt-44 xxs:ml-16'>
                <ul className='list-disc text-teal-400'>
                    <li className=''>
                        <text className='text-black font-bold
                        sm:text-lg
                        xxs:text-base'>INE</text>
                    </li>
                    <li>
                        <text className='text-black font-bold
                        sm:text-lg
                        xxs:text-base'>Los últimos 3 estados de cuenta</text>
                    </li>
                    <li>
                        <text className='text-black font-bold
                        sm:text-lg
                        xxs:text-base'>Constancia de situación fiscal</text>
                    </li>
                    <li>
                        <text className='text-black font-bold
                        sm:text-lg
                        xxs:text-base'>Comprobante de domicilio</text>
                    </li>
                </ul>
            </div>
            <text className='font-bold sm:text-2xl fixed
            2xl:mt-[360px]
            xl:mt-[340px] xl:ml-36
            lg:mt-[310px] lg:ml-36
            md:mt-[360px] md:ml-36
            sm:mt-[360px] sm:ml-36
            xxs:mt-[280px] xxs:ml-28 xxs:text-xl'>Al correo</text>
            <div class="fixed bg-stone-300
            2xl:w-[400px] 2xl:h-[40px] 2xl:ml-0 2xl:mt-[398px]
            xl:w-[400px] xl:h-[40px] xl:ml-0 xl:mt-[375px]
            lg:w-[400px] lg:h-[40px] lg:ml-0 lg:mt-[345px]
            md:w-[400px] md:h-[40px] md:ml-0 md:mt-[398px]
            sm:w-[400px] sm:h-[40px] sml:ml-0 sm:mt-[398px]
            xxs:w-[330px] xxs:h-[30px] xxs:ml-0 xxs:mt-[310px]">
            </div>
            <text class="text-blue-700 fixed font-bold
            2xl:mt-[400px] 2xl:ml-[70px] 2xl:text-2xl
            xl:mt-[377px] xl:ml-[70px] xl:text-2xl
            lg:mt-[347px] lg:ml-[70px] lg:text-2xl
            md:mt-[400px] md:ml-[70px] md:text-2xl
            sm:mt-[400px] sm:ml-[70px] sm:text-2xl
            xxs:mt-[310px] xxs:ml-[55px] xxs:text-xl">
                    <a href="mailto:abravo@abbe.com.mx" target="_blank" rel="noreferrer">abravo@abbe.com.mx</a>
            </text>
            <text className='font-bold sm:text-2xl fixed
            2xl:mt-[450px] 2xl:ml-28
            xl:mt-[420px] xl:ml-28
            lg:mt-[385px] lg:ml-28
            md:mt-[450px] md:ml-28
            sm:mt-[450px] sm:ml-28
            xxs:mt-[340px] xxs:ml-24 xxs:text-xl'>O al Whatsapp</text>
            <div class="fixed bg-stone-300
            2xl:w-[400px] 2xl:h-[40px] 2xl:ml-0 2xl:mt-[490px]
            xl:w-[400px] xl:h-[40px] xl:ml-0 xl:mt-[455px]
            lg:w-[400px] lg:h-[40px] lg:ml-0 lg:mt-[420px]
            md:w-[400px] md:h-[40px] md:ml-0 md:mt-[490px]
            sm:w-[400px] sm:h-[40px] sml:ml-0 sm:mt-[490px]
            xxs:w-[330px] xxs:h-[30px] xxs:ml-0 xxs:mt-[370px]">
            </div>
            <text class="text-blue-700 fixed font-bold
            2xl:mt-[493px] 2xl:ml-[120px] 2xl:text-2xl
            xl:mt-[459px] xl:ml-[120px] xl:text-2xl
            lg:mt-[425px] lg:ml-[120px] lg:text-2xl
            md:mt-[493px] md:ml-[120px] md:text-2xl
            sm:mt-[493px] sm:ml-[120px] sm:text-2xl
            xxs:mt-[370px] xxs:ml-[100px] xxs:text-xl">
                    <a href="https://wa.me/525539262213?text=Quiero20%participar20%en20%la20%rifa20%de20%morpheus20%pro" target="_blank" rel="noreferrer">55 3926 2213</a>
            </text>
            <div class="
            2xl:mt-[560px] 2xl:ml-[100px]
            xl:mt-[515px] xl:ml-[100px]
            lg:mt-[480px] lg:ml-[100px]
            md:mt-[560px] md:ml-[100px]
            sm:mt-[480px] sm:ml-[100px]
            xxs:mt-[430px] xxs:ml-[65px]">
                <Button className='shadow-2xl shadow-gray-900' variant="contained" style={{width: '200px', height: '60px', borderRadius: "25px", backgroundColor: "rgb(45 212 191)", fontSize: "20px"}} sx={{boxShadow: 3}}
                onClick={() => handleChange()}>
                    Finalizar
                </Button>
            </div>
        </div>
    )
}

export default NewUserModal;