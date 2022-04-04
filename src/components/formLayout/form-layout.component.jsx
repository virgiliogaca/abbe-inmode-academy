import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import Switch from '@mui/material/Switch';
import { sendUserInfo } from "../../api/googleSheets"

const FormLayout = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [entity, setEntity] = useState('');
    const [inmodeClient, setInmodeClient] = useState(false);
    const [preApproved, setPreApproved] = useState(false);

    const handleName = (event) => {
        setName(event.target.value);
      };
    const handlePhone = (event) => {
        setPhone(event.target.value);
      };
    const handleEmail = (event) => {
        setEmail(event.target.value);
      };
    const handleEntity = (event) => {
        setEntity(event.target.value);
      };
    const handleInmodeSwitch = (event) => {
        setInmodeClient(event.target.checked);
    };
    const handlePreApprovedSwitch = (event) => {
        setPreApproved(event.target.checked);
    };

    const saveForm = () => {
        sendUserInfo(name, phone, email, entity, inmodeClient, preApproved)
        setEmail('');
        setEntity('');
        setName('');
        setPhone('');
        setInmodeClient(false);
        setPreApproved(false);
    };
    
    return (
        <>
            <div class="bg-teal-400 
            xl:w-44 xl:h-10 xl:ml-5 
            lg:w-36 lg:h-9 
            md:w-[550px] md:h-10
            xs:w-[290px] xs:h-10
            xxs:w-[290px] xxs:h-10">
                <text class="text-white font-semibold 
                xl:text-3xl xl:ml-5 
                lg:text-2xl lg:ml-4 
                md:text-3xl md:ml-[200px]
                xs:text-3xl xs:ml-[80px]
                xxs:text-3xl xxs:ml-[80px]">REGISTRO</text>
            </div>
            <div>
                <div class="
                xl:mt-16 xl:-ml-24 
                lg:mt-20 lg:-ml-24 
                md:mt-10 md:ml-24
                xs:mt-12 xs:ml-2
                xxs:mt-12 xxs:ml-0">
                    <text class="text-white font-light 
                    xl:text-lg 
                    lg:text-base">NOMBRE</text>
                    <text class="text-red-600 font-light 
                    xl:text-lg 
                    lg:text-base">*</text>
                </div>
                <div class="
                xl:-mt-12 
                lg:-mt-10 lg:ml-0 
                md:ml-48 md:-mt-10
                xs:ml-24 xs:-mt-10
                xxs:ml-20 xxs:-mt-10">
                    <TextField id="filled-basic" label="Nombre" style={{backgroundColor: 'white', width: '350px'}} color="primary" variant="filled" onChange={handleName} value={name}/>
                </div>
            </div>
            <div>
                <div class="
                xl:mt-10 xl:-ml-28 
                lg:mt-8 lg:-ml-28 
                md:mt-10 md:ml-24
                xs:mt-12 xs:-ml-2
                xxs:mt-12 xxs:-ml-4">
                    <text class="text-white font-light xl:text-lg lg:text-base">WHATSAPP</text>
                    <text class="text-red-600 font-light xl:text-lg lg:text-base">*</text>
                </div>
                <div class="
                xl:-mt-12 
                lg:-mt-10 lg:ml-0 
                md:ml-48 md:-mt-10
                xs:ml-24 xs:-mt-10
                xxs:ml-20 xxs:-mt-10">
                    <TextField id="filled-basic" label="WhatsApp" style={{backgroundColor: 'white', width: '350px'}} color="primary" variant="filled" onChange={handlePhone} value={phone}/>
                </div>
            </div>
            <div>
                <div class="
                xl:mt-10 
                xl:-ml-24 
                lg:mt-8 lg:-ml-24 
                md:mt-10 md:ml-24
                xs:mt-12 xs:ml-4
                xxs:mt-12 xxs:ml-0">
                    <text class="text-white font-light 
                    xl:text-lg 
                    lg:text-base">CORREO</text>
                    <text class="text-red-600 font-light 
                    xl:text-lg 
                    lg:text-base">*</text>
                </div>
                <div class="
                xl:-mt-12 
                lg:-mt-10 lg:ml-0 
                md:ml-48 md:-mt-10
                xs:ml-24 xs:-mt-10
                xxs:ml-20 xxs:-mt-10">
                    <TextField id="filled-basic" label="Correo" style={{backgroundColor: 'white', width: '350px'}} color="primary" variant="filled" onChange={handleEmail} value={email}/>
                </div>
            </div>
            <div>
                <div class="
                xl:mt-10 xl:-ml-24
                lg:mt-8 lg:-ml-24 
                md:mt-10 md:ml-24
                xs:mt-12 xs:ml-4
                xxs:mt-12 xxs:ml-1">
                    <text class="text-white font-light 
                    xl:text-lg 
                    lg:text-base">ESTADO</text>
                </div>
                <div class="
                xl:-mt-12 
                lg:-mt-10 
                lg:ml-0 
                md:ml-48 md:-mt-10
                xs:ml-24 xs:-mt-10
                xxs:ml-20 xxs:-mt-10">
                    <TextField id="filled-basic" label="Estado" style={{backgroundColor: 'white', width: '350px'}} color="primary" variant="filled" onChange={handleEntity} value={entity}/>
                </div>
            </div>
            <div class="
                xl:ml-8 
                lg:ml-8 
                md:ml-8
                xs:ml-8
                xxs:ml-8">
                    <text class="text-red-600 font-semibold">*Datos requeridos</text>
                </div>
            <div class="bg-teal-500 z-0 rounded-lg absolute 
            xl:w-[415px] xl:h-40 xl:-ml-20 xl:mt-10
            lg:w-[380px] lg:h-72 lg:-ml-20 lg:mt-52
            md:w-[380px] md:h-72 md:ml-20 md:mt-52
            xs:w-[380px] xs:h-72 xs:-ml-11 xs:mt-52
            xxs:w-[360px] xxs:h-72 xxs:-ml-11 xxs:mt-56">
                <div class="bg-white shadow-lg shadow-gray-500 z-10 rounded-2xl
                xl:ml-7 xl:-mt-5 xl:w-[250px] xl:h-7
                lg:ml-16 lg:-mt-36 lg:w-[274px] lg:h-44
                md:ml-14 md:-mt-36 md:w-[274px] md:h-44
                xs:ml-14 xs:-mt-36 xs:w-[274px] xs:h-44
                xxs:ml-11 xxs:-mt-36 xxs:w-[274px] xxs:h-40">
                    <div class="
                    xl:ml-4">
                        <text class="italic font-serif
                        xl:ml-4 xl:text-xl
                        lg:ml-14 
                        md:ml-14
                        xs:ml-14 xs:text-sm
                        xxs:ml-16 xxs:text-xs">{'ENTRA EN LA RIFA:'}</text>
                    </div>
                </div>
                <div class="
                xl:ml-4 
                lg:ml-4 
                md:ml-4
                xs:ml-4 xs:mt-0
                xxs:ml-4 xxs: mt-5">
                    <br />
                    <text class="text-black font-semibold text-lg 
                    xl:ml-2 
                    lg:ml-2 
                    md:ml-2
                    xs:ml-2
                    xxs:ml-2">SOY CLIENTE INMODE**</text>
                    <div class="
                    xl:-mt-8 xl:ml-72
                    lg:-mt-8 lg:ml-72
                    md:-mt-8 md:ml-72
                    xs:-mt-8 xs:ml-72
                    xxs:-mt-8 xxs:ml-72">
                    <Switch color="default" checked={inmodeClient} onChange={handleInmodeSwitch}></Switch>
                    </div>
                    <br />
                    <text class="text-black font-semibold text-lg 
                    xl:ml-10
                    lg:ml-10
                    md:ml-10
                    xs:ml-10
                    xxs:ml-10">SOY CLIENTE ABBE</text>
                    <br />
                    <text class="text-black font-semibold text-lg 
                    xl:ml-2 
                    lg:ml-2 
                    md:ml-2
                    xs:ml-2
                    xxs:ml-2">O ESTOY PRE-APROBADO**</text>
                    <div class="
                    xl:-mt-12 xl:ml-72
                    lg:-mt-12 lg:ml-72
                    md:-mt-12 md:ml-72
                    xs:-mt-12 xs:ml-72
                    xxs:-mt-12 xxs:ml-72">
                    <Switch color="default" checked={preApproved} onChange={handlePreApprovedSwitch}></Switch>
                    </div>
                </div>
            </div>
            <div class="xl:mt-60">
                <text class="text-white font-semibold text-xl 
                        xl:-ml-16
                        lg:-ml-16
                        md:-ml-16
                        xs:-ml-16
                        xxs:-ml-16">**Toda la información será comprobada
                </text>
                        <br />
                <text class="text-white font-semibold text-xl 
                        xl:ml-2 
                        lg:ml-2 
                        md:ml-2
                        xs:ml-2
                        xxs:ml-2">al momento de la rifa.
                </text>
            </div>
            <div class="bg-white rounded-lg absolute 
            xl:w-[415px] xl:h-40 xl:-ml-20 xl:mt-10
            lg:w-[380px] lg:h-72 lg:-ml-20 lg:mt-10
            md:w-[380px] md:h-72 md:ml-20 md:mt-10
            xs:w-[380px] xs:h-72 xs:-ml-11 xs:mt-10
            xxs:w-[360px] xxs:h-72 xxs:-ml-11 xxs:mt-10">
                <div class="
                xl:ml-4 xl:-mt-3
                lg:ml-4 
                md:ml-4
                xs:ml-4 xs:mt-0
                xxs:ml-4 xxs: mt-5">
                    <br />
                    <text class="text-black font-semibold text-xl 
                    xl:ml-32 
                    lg:ml-2 
                    md:ml-2
                    xs:ml-2
                    xxs:ml-2">IMPORTANTE:</text>
                    <br />
                    <text class="text-black font-semibold text-xl
                    xl:ml-3
                    lg:ml-3
                    md:ml-3
                    xs:ml-3
                    xxs:ml-3">¡En caso de no ser cliente de Inmode o</text>
                    <br />
                    <text class="text-black font-semibold text-xl
                    xl:ml-4
                    lg:ml-4
                    md:ml-4
                    xs:ml-4
                    xxs:ml-4">cliente de Abbe aún puedes participar</text>
                    <br />
                    <text class="text-black font-semibold text-xl
                    xl:ml-36
                    lg:ml-36
                    md:ml-36
                    xs:ml-36
                    xxs:ml-36">en la rifa!</text>
                    <br />
                    <text class="text-black font-light text-xl
                    xl:ml-7
                    lg:ml-7
                    md:ml-7
                    xs:ml-7
                    xxs:ml-7">Más información</text>
                    <text class="text-black font-light text-xl underline
                    xl:ml-1
                    lg:ml-1
                    md:ml-1
                    xs:ml-1
                    xxs:ml-1">al finalizar tu registro.</text>
                    <br />
                </div>
            </div>
            <div class="
            xl:mt-[250px] xl:ml-8 
            lg:mt-[250px] lg:ml-10 
            md:mt-[250px] md:ml-48
            xs:mt-[250px] xs:ml-20
            xxs:mt-[250px] xxs:ml-[70px]">
                <Button variant="contained" style={{width: '200px', height: '60px', borderRadius: "25px", backgroundColor: "rgb(45 212 191)", fontSize: "20px"}} disabled={!name || !phone || !email}
                onClick={() => saveForm()}>
                    ENVIAR
                </Button>
            </div>
        </>
    );
}

export default FormLayout