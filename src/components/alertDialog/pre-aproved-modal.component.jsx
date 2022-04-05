import Button from '@mui/material/Button';

const PreApprovedModal = (
    {
        handleChange
    }
) => {
    return (
        <div class="bg-white
        2xl:w-[400px] 2xl:h-[500px] 2xl:ml-[40%] 2xl:mt-[10%]
        xl:w-[400px] xl:h-[500px] xl:ml-[36%] xl:mt-[8%]
        lg:w-[350px] lg:h-[450px] lg:ml-[34%] lg:mt-[8%]
        md:w-[400px] md:h-[500px] md:ml-[27%] md:mt-[20%]
        sm:w-[400px] sm:h-[500px] sm:ml-[3%] sm:mt-[8%]
        xs:w-[320px] xs:h-[460px] xs:ml-[10%] xs:mt-[25%]
        xxs:w-[320px] xxs:h-[460px] xxs:ml-[8%] xxs:mt-[25%]">
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
            <div class="fixed bg-teal-900 brightness-50 saturate-100 hue-rotate-30 rounded-lg
            2xl:w-[360px] 2xl:h-[100px] 2xl:ml-5 2xl:mt-28
            xl:w-[360px] xl:h-[100px] xl:ml-5 xl:mt-28
            lg:w-[310px] lg:h-[100px] lg:ml-5 lg:mt-28
            md:w-[360px] md:h-[100px] md:ml-5 md:mt-28
            sm:w-[360px] sm:h-[100px] sm:ml-5 sm:mt-28
            xs:w-[285px] xs:h-[100px] xs:ml-5 xs:mt-28
            xxs:w-[285px] xxs:h-[100px] xxs:ml-4 xxs:mt-28">
            </div>
            <text class="text-teal-400 fixed font-normal
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
            <text class="text-teal-400 fixed font-normal
            2xl:mt-[120px] 2xl:ml-[70px] 2xl:text-2xl
            xl:mt-[120px] xl:ml-[70px] xl:text-2xl
            lg:mt-[120px] lg:ml-[62px] lg:text-xl
            md:mt-[120px] md:ml-[70px] md:text-2xl
            sm:mt-[120px] sm:ml-[70px] sm:text-2xl
            xs:mt-[120px] xs:ml-[52px] xs:text-xl
            xxs:mt-[120px] xxs:ml-[48px] xxs:text-xl">
                    en el INMODE ACADEMY
            </text>
            <br />
            <text class="text-teal-400 fixed font-normal
            2xl:mt-[120px] 2xl:ml-[130px] 2xl:text-2xl
            xl:mt-[120px] xl:ml-[130px] xl:text-2xl
            lg:mt-[120px] lg:ml-[120px] lg:text-xl
            md:mt-[120px] md:ml-[130px] md:text-2xl
            sm:mt-[120px] sm:ml-[130px] sm:text-2xl
            xs:mt-[120px] xs:ml-[115px] xs:text-xl
            xxs:mt-[120px] xxs:ml-[110px] xxs:text-xl">
                   05/05/2022
            </text>
            <text class="fixed font-normal
            2xl:mt-[190px] 2xl:ml-[30px] 2xl:text-2xl
            xl:mt-[190px] xl:ml-[30px] xl:text-2xl
            lg:mt-[190px] lg:ml-[30px] lg:text-xl
            md:mt-[190px] md:ml-[30px] md:text-2xl
            sm:mt-[190px] sm:ml-[30px] sm:text-2xl
            xs:mt-[190px] xs:ml-[20px] xs:text-xl
            xxs:mt-[190px] xxs:ml-[20px] xxs:text-xl">
                    Te enviaremos una confirmación
            </text>
            <br />
            <text class="fixed font-normal
            2xl:mt-[190px] 2xl:ml-[40px] 2xl:text-2xl
            xl:mt-[190px] xl:ml-[40px] xl:text-2xl
            lg:mt-[190px] lg:ml-[40px] lg:text-xl
            md:mt-[190px] md:ml-[40px] md:text-2xl
            sm:mt-[190px] sm:ml-[40px] sm:text-2xl
            xs:mt-[190px] xs:ml-[30px] xs:text-xl
            xxs:mt-[190px] xxs:ml-[30px] xxs:text-xl">
                    con tun número para la rifa de
            </text>
            <br />
            <text class="fixed font-extrabold
            2xl:mt-[190px] 2xl:ml-[95px] 2xl:text-2xl
            xl:mt-[190px] xl:ml-[95px] xl:text-2xl
            lg:mt-[190px] lg:ml-[95px] lg:text-xl
            md:mt-[195px] md:ml-[95px] md:text-2xl
            sm:mt-[190px] sm:ml-[95px] sm:text-2xl
            xs:mt-[190px] xs:ml-[80px] xs:text-xl
            xxs:mt-[190px] xxs:ml-[75px] xxs:text-xl">
                   MORPHEUS PRO
            </text>
            <div class="
            2xl:mt-[280px] 2xl:ml-24 
            xl:mt-[280px] xl:ml-24 
            lg:mt-[250px] lg:ml-[75px]
            md:mt-[270px] md:ml-24
            sm:mt-[350px] sm:ml-36
            xs:mt-[250px] xs:ml-16
            xxs:mt-[250px] xxs:ml-14">
                <Button className='shadow-2xl shadow-gray-900' variant="contained" style={{width: '200px', height: '60px', borderRadius: "25px", backgroundColor: "rgb(45 212 191)", fontSize: "20px"}} sx={{boxShadow: 3}}
                onClick={() => handleChange()}>
                    Finalizar
                </Button>
            </div>
        </div>
    )
}

export default PreApprovedModal;