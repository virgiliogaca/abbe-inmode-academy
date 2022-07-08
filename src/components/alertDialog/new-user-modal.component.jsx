import Button from '@mui/material/Button';
import dermajal from "../../assets/dermajal.png"

const NewUserModal = (
    {
        handleChange
    }
) => {
    return (
        <div class="bg-white
        2xl:w-[400px] 2xl:h-[800px] 2xl:ml-[40%] 2xl:mt-[2%]
        xl:w-[400px] xl:h-[780px] xl:ml-[36%] xl:mt-[2%]
        lg:w-[350px] lg:h-[750px] lg:ml-[34%] lg:mt-[8%]
        md:w-[400px] md:h-[750px] md:ml-[27%] md:mt-[8%]
        sm:w-[400px] sm:h-[750px] sm:ml-[20%] sm:mt-[8%]
        xxs:w-[320px] xxs:h-[750px] xxs:ml-[8%] xxs:mt-[12%]">
            <text class="font-bold fixed
            2xl:text-3xl 2xl:ml-24 2xl:mt-14
            xl:text-3xl xl:ml-24 xl:mt-14
            lg:text-2xl lg:ml-24 lg:mt-14
            md:text-3xl md:ml-24 md:mt-14
            sm:text-3xl sm:ml-24 sm:mt-14
            xs:text-3xl xs:ml-16 xs:mt-14
            xxs:text-3xl xxs:ml-14 xxs:mt-14">
                ¡FELICIDADES!
            </text>
            <div class="fixed bg-[#1c0d44] rounded-lg
            2xl:w-[360px] 2xl:h-[100px] 2xl:ml-5 2xl:mt-28
            xl:w-[360px] xl:h-[100px] xl:ml-5 xl:mt-28
            lg:w-[310px] lg:h-[100px] lg:ml-5 lg:mt-28
            md:w-[360px] md:h-[100px] md:ml-5 md:mt-28
            sm:w-[360px] sm:h-[100px] sm:ml-5 sm:mt-28
            xs:w-[285px] xs:h-[100px] xs:ml-5 xs:mt-28
            xxs:w-[285px] xxs:h-[100px] xxs:ml-4 xxs:mt-28">
            </div>
            <text class="text-white fixed font-normal
            2xl:mt-[120px] 2xl:ml-[60px] 2xl:text-2xl
            xl:mt-[120px] xl:ml-[60px] xl:text-2xl
            lg:mt-[120px] lg:ml-[55px] lg:text-xl
            md:mt-[120px] md:ml-[60px] md:text-2xl
            sm:mt-[120px] sm:ml-[60px] sm:text-2xl
            xs:mt-[120px] xs:ml-[45px] xs:text-xl
            xxs:mt-[120px] xxs:ml-[40px] xxs:text-xl">
                    Te has registrado con éxito
            </text>
            <br />
            <text class="text-white fixed font-normal
            2xl:mt-[120px] 2xl:ml-[62px] 2xl:text-2xl
            xl:mt-[120px] xl:ml-[62px] xl:text-2xl
            lg:mt-[120px] lg:ml-[62px] lg:text-xl
            md:mt-[120px] md:ml-[62px] md:text-2xl
            sm:mt-[120px] sm:ml-[62px] sm:text-2xl
            xs:mt-[120px] xs:ml-[52px] xs:text-xl
            xxs:mt-[120px] xxs:ml-[42px] xxs:text-xl">
                    al MASTERCLASS de DEKA
            </text>
            <br />
            <text class="text-white fixed font-normal
            2xl:mt-[120px] 2xl:ml-[130px] 2xl:text-2xl
            xl:mt-[120px] xl:ml-[130px] xl:text-2xl
            lg:mt-[120px] lg:ml-[120px] lg:text-xl
            md:mt-[120px] md:ml-[130px] md:text-2xl
            sm:mt-[120px] sm:ml-[130px] sm:text-2xl
            xs:mt-[120px] xs:ml-[115px] xs:text-xl
            xxs:mt-[120px] xxs:ml-[110px] xxs:text-xl">
                   29/07/2022
            </text>

            <img class="
            2xl:ml-1
            lg:ml-0
            md:ml-1
            xxs:mt-44 xxs:h-16" src={dermajal} alt="" />
            <text class="text-[#1c0d44] italic fixed
                    xl:ml-36
                    lg:ml-32
                    sm:text-base sm:ml-36
                    xxs:text-sm xxs:ml-28">
                <a href="https://dermajal.com.mx" rel="noreferrer" target="_blank">
                    Registrate aquí
                </a>
            </text>

            <div class="fixed bg-[#eaeaea] 
            2xl:w-4300px] 2xl:h-[300px] 2xl:ml-0 2xl:mt-10
            xl:w-[400px] xl:h-[290px] xl:ml-0 xl:mt-10
            lg:w-[350px] lg:h-[280px] lg:ml-0 lg:mt-10
            md:w-[400px] md:h-[285px] md:ml-0 md:mt-10
            sm:w-[400px] sm:h-[280px] sm:ml-0 sm:mt-10
            xxs:w-[320px] xxs:h-[280px] xxs:ml-0 xxs:mt-10">
            </div>
            <text class="fixed font-bold
            2xl:mt-10 2xl:ml-[10px] 2xl:text-2xl
            xl:mt-10 xl:ml-[15px] xl:text-2xl
            lg:mt-10 lg:ml-[20px] lg:text-xl
            md:mt-10 md:ml-[40px] md:text-xl
            sm:mt-10 sm:ml-[40px] sm:text-xl
            xxs:mt-10 xxs:ml-[20px] xxs:text-lg">
                    TE FALTA UN PASO PARA LA RIFA
            </text>
            <br />
            <p class="fixed font-thin text-center
            2xl:mt-14 2xl:ml-[30px] 2xl:text-2xl
            xl:mt-14 xl:ml-[30px] xl:text-2xl
            lg:mt-10 lg:ml-[15px] lg:text-xl
            md:mt-12 md:ml-[30px] md:text-xl
            sm:mt-10 sm:ml-[30px] sm:text-xl
            xxs:mt-10 xxs:text-xl xxs:w-[320px]">
                    ¡Manda la siguiente documentación para participar!
            </p>
            <br />
            <br />
            <br />
            <p class="fixed font-thin text-center
            2xl:mt-14 2xl:ml-[30px] 2xl:text-2xl
            xl:mt-14 xl:ml-[30px] xl:text-2xl
            lg:mt-10 lg:ml-[10px] lg:text-xl
            md:mt-12 md:ml-[30px] md:text-2xl
            sm:mt-10 sm:ml-[30px] sm:text-2xl
            xxs:mt-10 xxs:text-xl xxs:w-[320px]">
                    -Copia o foto de INE
            </p>
            <br />
            <p class="fixed font-thin text-center
            2xl:mt-14 2xl:ml-[30px] 2xl:text-2xl
            xl:mt-14 xl:ml-[30px] xl:text-2xl
            lg:mt-10 lg:ml-[10px] lg:text-xl
            md:mt-12 md:ml-[30px] md:text-2xl
            sm:mt-10 sm:ml-[30px] sm:text-2xl
            xxs:mt-10 xxs:text-xl xxs:w-[320px]">
                    -Últimos 2 estados de cuenta
            </p>
            <br />
            <p class="fixed font-thin text-center
            2xl:mt-14 2xl:ml-[30px] 2xl:text-2xl
            xl:mt-14 xl:ml-[30px] xl:text-2xl
            lg:mt-10 lg:ml-[10px] lg:text-xl
            md:mt-12 md:ml-[30px] md:text-2xl
            sm:mt-10 sm:ml-[30px] sm:text-2xl
            xxs:mt-10 xxs:text-xl xxs:w-[320px]">
                    -Constancia de situación fiscal
            </p>
            <br />
            <p class="fixed font-thin text-center
            2xl:mt-14 2xl:ml-[30px] 2xl:text-2xl
            xl:mt-14 xl:ml-[30px] xl:text-2xl
            lg:mt-10 lg:ml-[10px] lg:text-xl
            md:mt-12 md:ml-[30px] md:text-2xl
            sm:mt-10 sm:ml-[30px] sm:text-2xl
            xxs:mt-10 xxs:text-xl xxs:w-[320px]">
                    -Comprobante de domicilio
            </p>
            <br />
            <br />
            <p class="fixed font-bold italic text-center
            2xl:mt-14 2xl:ml-[0px] 2xl:text-xl
            xl:mt-14 xl:ml-[0px] xl:text-xl
            lg:mt-10 lg:-ml-[25px] lg:text-xl
            md:mt-12 md:text-xl
            sm:mt-10 sm:text-xl sm:w-[400px]
            xxs:mt-10 xxs:text-lg xxs:w-[320px]">
                    Al correo de gsalazar@abbe.com.mx
            </p>
            <br />
            <p class="fixed font-bold italic text-center
            2xl:mt-14 2xl:ml-[0px] 2xl:text-xl
            xl:mt-14 xl:ml-[0px] xl:text-xl
            lg:mt-10 lg:-ml-[20px] lg:text-xl
            md:mt-12 md:text-xl
            sm:mt-10 sm:text-xl sm:w-[400px]
            xxs:mt-10 xxs:text-lg xxs:w-[320px]">
                    o al whatsapp: 55 7933 0121
            </p>
            <div class="
            2xl:mt-40 2xl:ml-24 
            xl:mt-32 xl:ml-24 
            lg:mt-28 lg:ml-[75px]
            md:mt-32 md:ml-28
            sm:mt-32 sm:ml-24
            xs:mt-24 xs:ml-16
            xxs:mt-28 xxs:ml-14">
                <Button className='shadow-2xl shadow-gray-900' variant="contained" style={{width: '200px', height: '60px', borderRadius: "25px", backgroundColor: "rgb(28 13 68)", fontSize: "20px"}} sx={{boxShadow: 3}}
                onClick={() => handleChange()}>
                    Finalizar
                </Button>
            </div>
        </div>
    )
}


export default NewUserModal;