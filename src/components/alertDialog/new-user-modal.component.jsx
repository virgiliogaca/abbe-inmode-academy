import Button from '@mui/material/Button';
import Instrucciones from '../../assets/instrucciones.pdf'

const NewUserModal = (
    {
        handleChange,
        isNewUser
    }
) => {
    return (
        <div class="bg-white
        2xl:w-[400px] 2xl:h-[600px] 2xl:ml-[40%] 2xl:mt-[10%]
        xl:w-[400px] xl:h-[600px] xl:ml-[36%] xl:mt-[5%]
        lg:w-[400px] lg:h-[600px] lg:ml-[33%] lg:mt-[5%]
        md:w-[400px] md:h-[600px] md:ml-[26%] md:mt-[18%]
        sm:w-[400px] sm:h-[600px] sm:ml-[40%] sm:mt-[10%]
        xs:w-[330px] xs:h-[600px] xs:ml-[10%] xs:mt-[20%]
        xxs:w-[330px] xxs:h-[600px] xxs:ml-[8%] xxs:mt-[15%]">
            <text class="font-bold fixed
            2xl:text-3xl 2xl:ml-24 2xl:mt-14
            xl:text-3xl xl:ml-24 xl:mt-14
            lg:text-3xl lg:ml-24 lg:mt-14
            md:text-3xl md:ml-24 md:mt-14
            sm:text-3xl sm:ml-24 sm:mt-14
            xs:text-3xl xs:ml-16 xs:mt-14
            xxs:text-3xl xxs:ml-16 xxs:mt-14">
                ¡FELICIDADES!
            </text>
            <div class="fixed bg-teal-900 brightness-50 saturate-100 hue-rotate-30 rounded-lg
            2xl:w-[360px] 2xl:h-[100px] 2xl:ml-5 2xl:mt-28
            xl:w-[360px] xl:h-[100px] xl:ml-5 xl:mt-28
            lg:w-[360px] lg:h-[100px] lg:ml-5 lg:mt-28
            md:w-[360px] md:h-[100px] md:ml-5 mdl:mt-28
            sm:w-[360px] sm:h-[100px] sm:ml-5 sm:mt-28
            xs:w-[290px] xs:h-[100px] xs:ml-5 xs:mt-28
            xxs:w-[290px] xxs:h-[100px] xxs:ml-5 xxs:mt-28">
            </div>
            <text class="text-teal-400 fixed font-normal
            2xl:mt-[120px] 2xl:ml-[60px] 2xl:text-2xl
            xl:mt-[120px] xl:ml-[60px] xl:text-2xl
            lg:mt-[120px] lg:ml-[60px] lg:text-2xl
            md:mt-[120px] md:ml-[60px] md:text-2xl
            sm:mt-[120px] sm:ml-[60px] sm:text-2xl
            xs:mt-[120px] xs:ml-[50px] xs:text-xl
            xxs:mt-[120px] xxs:ml-[50px] xxs:text-xl">
                    Te has registrado con éxito
            </text>
            <br />
            <text class="text-teal-400 fixed font-normal
            2xl:mt-[120px] 2xl:ml-[70px] 2xl:text-2xl
            xl:mt-[120px] xl:ml-[70px] xl:text-2xl
            lg:mt-[120px] lg:ml-[70px] lg:text-2xl
            md:mt-[120px] md:ml-[70px] md:text-2xl
            sm:mt-[120px] sm:ml-[70px] sm:text-2xl
            xs:mt-[120px] xs:ml-[60px] xs:text-xl
            xxs:mt-[120px] xxs:ml-[60px] xxs:text-xl">
                    en el INMODE ACADEMY
            </text>
            <br />
            <text class="text-teal-400 fixed font-normal
            2xl:mt-[120px] 2xl:ml-[130px] 2xl:text-2xl
            xl:mt-[120px] xl:ml-[130px] xl:text-2xl
            lg:mt-[120px] lg:ml-[130px] lg:text-2xl
            md:mt-[120px] md:ml-[130px] md:text-2xl
            sm:mt-[120px] sm:ml-[130px] sm:text-2xl
            xs:mt-[120px] xs:ml-[115px] xs:text-xl
            xxs:mt-[120px] xxs:ml-[115px] xxs:text-xl">
                   05/05/2022
            </text>
            <div class="fixed bg-stone-300
            2xl:w-[400px] 2xl:h-[100px] 2xl:ml-0 2xl:mt-44
            xl:w-[400px] xl:h-[100px] xl:ml-0 xl:mt-44
            lg:w-[400px] lg:h-[100px] lg:ml-0 lg:mt-44
            md:w-[400px] md:h-[100px] md:ml-0 md:mt-44
            sm:w-[400px] sm:h-[100px] sml:ml-0 sm:mt-44
            xs:w-[330px] xs:h-[100px] xs:ml-0 xs:mt-44
            xxs:w-[330px] xxs:h-[100px] xxs:ml-0 xxs:mt-44">
            </div>
            <text class="fixed font-bold
            2xl:mt-[180px] 2xl:ml-[80px] 2xl:text-2xl
            xl:mt-[180px] xl:ml-[80px] xl:text-2xl
            lg:mt-[180px] lg:ml-[80px] lg:text-2xl
            md:mt-[180px] md:ml-[80px] md:text-2xl
            sm:mt-[180px] sm:ml-[80px] sm:text-2xl
            xs:mt-[180px] xs:ml-[75px] xs:text-xl
            xxs:mt-[180px] xxs:ml-[75px] xxs:text-xl">
                    AVISO IMPORTANTE
            </text>
            <br />
            <text class="fixed font-normal
            2xl:mt-[180px] 2xl:ml-[10px] 2xl:text-2xl
            xl:mt-[180px] xl:ml-[10px] xl:text-2xl
            lg:mt-[180px] lf:ml-[10px] lg:text-2xl
            md:mt-[180px] md:ml-[10px] md:text-2xl
            sm:mt-[180px] sm:ml-[10px] sm:text-2xl
            xs:mt-[180px] xs:ml-[10px] xs:text-xl
            xxs:mt-[180px] xxs:ml-[10px] xxs:text-xl">
                    Estás muy cerca de poder participar
            </text>
            <br />
            <text class="fixed font-normal
            2xl:mt-[190px] 2xl:ml-[30px] 2xl:text-2xl
            xl:mt-[190px] xl:ml-[30px] xl:text-2xl
            lg:mt-[190px] lg:ml-[30px] lg:text-2xl
            md:mt-[190px] md:ml-[30px] md:text-2xl
            sm:mt-[190px] sm:ml-[30px] sm:text-2xl
            xs:mt-[190px] xs:ml-[40px] xs:text-xl
            xxs:mt-[190px] xxs:ml-[40px] xxs:text-xl">
                en la rifa de
            </text>
            <text class="fixed font-bold
            2xl:mt-[190px] 2xl:ml-[160px] 2xl:text-2xl
            xl:mt-[190px] xl:ml-[160px] xl:text-2xl
            lg:mt-[190px] lg:ml-[160px] lg:text-2xl
            md:mt-[190px] md:ml-[160px] md:text-2xl
            sm:mt-[190px] sm:ml-[160px] sm:text-2xl
            xs:mt-[190px] xs:ml-[150px] xs:text-xl
            xxs:mt-[190px] xxs:ml-[150px] xxs:text-xl">
                   MORPHEUS PRO
            </text>
            <div class="fixed bg-teal-900 brightness-50 saturate-100 hue-rotate-30 rounded-3xl
            2xl:w-[270px] 2xl:h-[50px] 2xl:ml-14 2xl:mt-60
            xl:w-[270px] xl:h-[50px] xl:ml-14 xl:mt-60
            lg:w-[270px] lg:h-[50px] lg:ml-14 lg:mt-60
            md:w-[270px] md:h-[50px] md:ml-14 md:mt-60
            sm:w-[270px] sm:h-[50px] sm:ml-14 sm:mt-60
            xs:w-[225px] xs:h-[45px] xs:ml-14 xs:mt-60
            xxs:w-[225px] xxs:h-[45px] xxs:ml-14 xxs:mt-60">
            </div>
            <text class="text-teal-400 fixed font-bold
            2xl:mt-[245px] 2xl:ml-[73px] 2xl:text-3xl
            xl:mt-[245px] xl:ml-[73px] xl:text-3xl
            lg:mt-[245px] lg:ml-[73px] lg:text-3xl
            md:mt-[245px] md:ml-[73px] md:text-3xl
            sm:mt-[245px] sm:ml-[73px] sm:text-3xl
            xs:mt-[245px] xs:ml-[73px] xs:text-2xl
            xxs:mt-[245px] xxs:ml-[73px] xxs:text-2xl">
                    PRE-APRUÉBATE
            </text>
            <text class="text-blue-700 fixed font-bold
            2xl:mt-[325px] 2xl:ml-[35px] 2xl:text-2xl
            xl:mt-[325px] xl:ml-[35px] xl:text-2xl
            lg:mt-[325px] lg:ml-[35px] lg:text-2xl
            md:mt-[325px] md:ml-[35px] md:text-2xl
            sm:mt-[325px] sm:ml-[35px] sm:text-2xl
            xs:mt-[325px] xs:ml-[35px] xs:text-xl
            xxs:mt-[325px] xxs:ml-[35px] xxs:text-xl">
                    <a href={Instrucciones} target="_blank" rel="noreferrer">Descarga los requisitos aquí</a>
            </text>
            <div class="
            2xl:mt-[400px] 2xl:ml-[90px]
            xl:mt-[400px] xl:ml-[90px]
            lg:mt-[400px] lg:ml-[90px]
            md:mt-[400px] md:ml-[90px]
            sm:mt-[400px] sm:ml-[90px]
            xs:mt-[400px] xs:ml-[70px]
            xxs:mt-[400px] xxs:ml-[70px]">
                <Button className='shadow-2xl shadow-gray-900' variant="contained" style={{width: '200px', height: '60px', borderRadius: "25px", backgroundColor: "rgb(45 212 191)", fontSize: "20px"}} sx={{boxShadow: 3}}
                onClick={() => handleChange()}>
                    Finalizar
                </Button>
            </div>
        </div>
    )
}

export default NewUserModal;