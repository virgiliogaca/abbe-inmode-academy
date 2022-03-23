import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { sendUserInfo } from "../../api/googleSheets"
import morpheus from '../../assets/morpheusbody.png'
import forma from '../../assets/FORMA-SOLO.png'

const FormLayout = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [entity, setEntity] = useState('');
    const [friendName, setFriendName] = useState('');
    const [friendPhone, setFriendPhone] = useState('');

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
    const handleFriendName = (event) => {
        setFriendName(event.target.value);
      };
    const handleFriendPhone = (event) => {
        setFriendPhone(event.target.value);
      };

    const saveForm = () => {
        sendUserInfo(name, phone, email, entity, friendName, friendPhone)
        setEmail('');
        setEntity('');
        setFriendName('');
        setFriendPhone('');
        setName('');
        setPhone('');
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
                    <TextField id="filled-basic" label="Nombre" style={{backgroundColor: 'white'}} color="primary" variant="filled" onChange={handleName} value={name}/>
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
                    <TextField id="filled-basic" label="WhatsApp" style={{backgroundColor: 'white'}} color="primary" variant="filled" onChange={handlePhone} value={phone}/>
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
                </div>
                <div class="
                xl:-mt-12 
                lg:-mt-10 lg:ml-0 
                md:ml-48 md:-mt-10
                xs:ml-24 xs:-mt-10
                xxs:ml-20 xxs:-mt-10">
                    <TextField id="filled-basic" label="Correo" style={{backgroundColor: 'white'}} color="primary" variant="filled" onChange={handleEmail} value={email}/>
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
                    <TextField id="filled-basic" label="Estado" style={{backgroundColor: 'white'}} color="primary" variant="filled" onChange={handleEntity} value={entity}/>
                </div>
            </div>
            <div class="bg-white z-0 rounded-xl absolute 
            xl:w-[415px] xl:h-72 xl:-ml-28 xl:mt-52 
            lg:w-[380px] lg:h-72 lg:-ml-20 lg:mt-52
            md:w-[380px] md:h-72 md:ml-20 md:mt-52
            xs:w-[380px] xs:h-72 xs:-ml-11 xs:mt-52
            xxs:w-[360px] xxs:h-72 xxs:-ml-11 xxs:mt-56">
                <div class="bg-teal-400 shadow-lg shadow-gray-500 z-10 
                xl:ml-14 xl:-mt-36 xl:w-[305px] xl:h-44
                lg:ml-16 lg:-mt-36 lg:w-[274px] lg:h-44
                md:ml-14 md:-mt-36 md:w-[274px] md:h-44
                xs:ml-14 xs:-mt-36 xs:w-[274px] xs:h-44
                xxs:ml-11 xxs:-mt-36 xxs:w-[274px] xxs:h-40">
                    <div class="
                    xl:ml-4">
                        <text class="text-white font-extralight
                        xl:ml-14 
                        lg:ml-14 
                        md:ml-14
                        xs:ml-14 xs:text-sm
                        xxs:ml-16 xxs:text-xs">{'A TODOS LOS QUE LLEVEN'}</text>
                        <br />
                        <text class="text-white font-extralight
                        xl:ml-4 
                        lg:ml-4 
                        md:ml-4
                        xs:ml-4 xs:text-sm
                        xxs:ml-5 xxs:text-xs">A </text>
                        <text class="text-white font-bold text-sm">1 INVITADO CIRUJANO PLÁSTICO</text>
                        <br />
                        <text class="text-white font-extralight text-sm 
                        xl:ml-8 
                        lg:ml-8 
                        md:ml-8
                        xs:ml-8 xs:text-sm
                        xxs:ml-11 xxs:text-xs">A LAS CONFERENCIAS RECIBIRÁN</text>
                        <br />
                        <text class="text-white font-normal
                        xl:ml-14 
                        lg:ml-14 
                        md:ml-14
                        xs:ml-14 xs:text-xs
                        xxs:ml-14 xxs:text-xs">UN VALE POR UNA CAJA DE</text>
                        <img class='
                        xl:w-36 
                        xl:ml-[65px] 
                        lg:w-36 lg:ml-[65px] 
                        md:w-36 md:ml-[65px] 
                        xs:w-36 xs:ml-[65px] 
                        xxs:w-24 xxs:ml-[80px]' src={morpheus} alt="" />
                        <text class="text-white font-normal
                        xl:ml-3 
                        lg:ml-3 
                        md:ml-3
                        xs:ml-3 xs:text-xs 
                        xxs:ml-3 xxs:text-xs">UN BOLETO PARA LA RIFA DE UN CABEZAL</text>
                        <img src={forma} alt="" class='
                        xl:w-16 xl:ml-24 
                        lg:w-16 lg:ml-24 
                        md:w-16 md:ml-24
                        xs:w-16 xs:ml-24
                        xxs:w-14 xxs:ml-[100px]'/>
                    </div>
                </div>
                <div class="
                xl:ml-4 
                lg:ml-4 
                md:ml-4
                xs:ml-4 xs:mt-0
                xxs:ml-4 xxs: mt-5">
                    <br />
                    <text class="text-black font-normal text-lg 
                    xl:ml-2 
                    lg:ml-2 
                    md:ml-2
                    xs:ml-2
                    xxs:ml-2">NOMBRE*</text>
                    <div class="
                    xl:-mt-10 xl:ml-28 
                    lg:-mt-10 lg:ml-28 
                    md:-mt-10 md:ml-28
                    xs:-mt-10 xs:ml-28
                    xxs:-mt-10 xxs:ml-28">
                    <TextField id="filled-basic" label="Nombre" style={{backgroundColor: 'white'}} color="primary" variant="filled" onChange={handleFriendName} value={friendName}/>
                    </div>
                    <br />
                    <text class="text-black font-normal text-lg 
                    xl:-ml-2 
                    lg:-ml-2 
                    md:-ml-2
                    xs:-ml-2
                    xxs:-ml-2">WHATSAPP*</text>
                    <div class="
                    xl:-mt-11 xl:ml-28 
                    lg:-mt-11 lg:ml-28 
                    md:-mt-11 md:ml-28
                    xs:-mt-11 xs:ml-28
                    xxs:-mt-11 xxs:ml-28">
                    <TextField id="filled-basic" label="WhatsApp" style={{backgroundColor: 'white'}} color="primary" variant="filled" onChange={handleFriendPhone} value={friendPhone}/>
                    </div>
                    <br />
                    <text class="text-black font-normal text-md 
                    xl:ml-16 
                    lg:ml-16 
                    md:ml-16
                    xs:ml-16
                    xxs:ml-14">**SE VERIFICARA EL NÚMERO AL</text>
                    <br />
                    <text class="text-black font-normal text-md 
                    xl:ml-24 
                    lg:ml-24 
                    md:ml-24
                    xs:ml-24
                    xxs:ml-20">MOMENTO DE LA RIFA</text>
                </div>
                <div class="
                xl:mt-16 xl:ml-32 
                lg:mt-16 lg:ml-28 
                md:mt-16 md:ml-28
                xs:mt-16 xs:ml-28
                xxs:mt-16 xxs:ml-28">
                    <text class="text-red-600 font-semibold">*Datos requeridos</text>
                </div>
            </div>
            <div class="
            xl:mt-[580px] xl:ml-4 
            lg:mt-[580px] lg:ml-10 
            md:mt-[580px] md:ml-48
            xs:mt-[580px] xs:ml-20
            xxs:mt-[580px] xxs:ml-[70px]">
                <Button variant="contained" style={{width: '130px', height: '50px', borderRadius: "25px", backgroundColor: "rgb(45 212 191)"}} disabled={!name || !phone || !friendName || !friendPhone}
                onClick={() => saveForm()}>
                    ENVIAR
                </Button>
            </div>
        </>
    );
}

export default FormLayout