import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { sendUserInfo } from "../../api/googleSheets"
import morpheus from '../../assets/MORPHEUS-SOLO.png'
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

    return (
        <>
            <div class="bg-teal-400 xl:w-44 xl:h-10 xl:ml-5 lg:w-36 lg:h-9 md:w-[550px] md:h-10">
                <text class="text-white font-semibold xl:text-3xl xl:ml-5 lg:text-2xl lg:ml-4 md:text-3xl md:ml-[200px]">REGISTRO</text>
            </div>
            <div>
                <div class="xl:mt-16 xl:-ml-24 lg:mt-20 lg:-ml-24 md:mt-10 md:ml-24">
                    <text class="text-white font-light xl:text-lg lg:text-base">NOMBRE</text>
                    <text class="text-red-600 font-light xl:text-lg lg:text-base">*</text>
                </div>
                <div class="xl:-mt-12 lg:-mt-10 lg:ml-0 md:ml-48 md:-mt-10">
                    <TextField id="filled-basic" label="Nombre" style={{backgroundColor: 'white'}} color="primary" variant="filled" onChange={handleName} value={name}/>
                </div>
            </div>
            <div>
                <div class="xl:mt-10 xl:-ml-28 lg:mt-8 lg:-ml-28 md:mt-10 md:ml-24">
                    <text class="text-white font-light xl:text-lg lg:text-base">WHATSAPP</text>
                    <text class="text-red-600 font-light xl:text-lg lg:text-base">*</text>
                </div>
                <div class="xl:-mt-12 lg:-mt-10 lg:ml-0 md:ml-48 md:-mt-10">
                    <TextField id="filled-basic" label="WhatsApp" style={{backgroundColor: 'white'}} color="primary" variant="filled" onChange={handlePhone} value={phone}/>
                </div>
            </div>
            <div>
                <div class="xl:mt-10 xl:-ml-24 lg:mt-8 lg:-ml-24 md:mt-10 md:ml-24">
                    <text class="text-white font-light xl:text-lg lg:text-base">CORREO</text>
                </div>
                <div class="xl:-mt-12 lg:-mt-10 lg:ml-0 md:ml-48 md:-mt-10">
                    <TextField id="filled-basic" label="Correo" style={{backgroundColor: 'white'}} color="primary" variant="filled" onChange={handleEmail} value={email}/>
                </div>
            </div>
            <div>
                <div class="xl:mt-10 xl:-ml-24 lg:mt-8 lg:-ml-24 md:mt-10 md:ml-24">
                    <text class="text-white font-light xl:text-lg lg:text-base">ESTADO</text>
                </div>
                <div class="xl:-mt-12 lg:-mt-10 lg:ml-0 md:ml-48 md:-mt-10">
                    <TextField id="filled-basic" label="Estado" style={{backgroundColor: 'white'}} color="primary" variant="filled" onChange={handleEntity} value={entity}/>
                </div>
            </div>
            <div class="bg-white z-0 rounded-xl absolute xl:w-[415px] xl:h-72 xl:-ml-28 xl:mt-52 lg:w-[380px] lg:h-72 lg:-ml-20 lg:mt-52
            md:w-[380px] md:h-72 md:ml-20 md:mt-52">
                <div class="bg-teal-400 shadow-lg shadow-gray-500 z-10 xl:ml-14 xl:-mt-36 xl:w-[305px] xl:h-44
                lg:ml-16 lg:-mt-36 lg:w-[274px] lg:h-44
                md:ml-14 md:-mt-36 md:w-[274px] md:h-44">
                    <div class="xl:ml-4">
                        <text class="text-white font-extralight text-sm xl:ml-14 lg:ml-14 md:ml-14">{'A TODOS LOS QUE LLEVEN'}</text>
                        <br />
                        <text class="text-white font-normal text-sm xl:ml-[52px] lg:ml-[52px] md:ml-[52px]">{'DE UN KIT DE AGUJAS CON'}</text>
                        <br />
                        <text class="text-white font-extralight text-sm xl:ml-4 lg:ml-4 md:ml-4">A </text>
                        <text class="text-white font-bold text-sm">1 INVITADO CIRUJANO PLÁSTICO</text>
                        <br />
                        <text class="text-white font-extralight text-sm xl:ml-8 lg:ml-8 md:ml-8">A LAS CONFERENCIAS RECIBIRÁN</text>
                        <br />
                        <text class="text-white font-normal text-xs xl:ml-14 lg:ml-14 md:ml-14">UN VALE POR UNA CAJA DE</text>
                        <img class='xl:w-28 xl:ml-[75px] lg:w-28 lg:ml-[75px] md:w-28 md:ml-[75px]' src={morpheus} alt="" />
                        <text class="text-white font-normal text-xs xl:ml-3 lg:ml-3 md:ml-3">UN BOLETO PARA LA RIFA DE UN CABEZAL DE</text>
                        <img src={forma} alt="" class='xl:w-16 xl:ml-24 lg:w-16 lg:ml-24 md:w-16 md:ml-24'/>
                    </div>
                </div>
                <div class="xl:ml-4 lg:ml-4 md:ml-4">
                    <br />
                    <text class="text-black font-normal text-lg xl:ml-2 lg:ml-2 md:ml-2">NOMBRE*</text>
                    <div class="xl:-mt-10 xl:ml-28 lg:-mt-10 lg:ml-28 md:-mt-10 md:ml-28">
                    <TextField id="filled-basic" label="Nombre" style={{backgroundColor: 'white'}} color="primary" variant="filled" onChange={handleFriendName} value={friendName}/>
                    </div>
                    <br />
                    <text class="text-black font-normal text-lg xl:-ml-2 lg:-ml-2 md:-ml-2">WHATSAPP*</text>
                    <div class="xl:-mt-11 xl:ml-28 lg:-mt-11 lg:ml-28 md:-mt-11 md:ml-28">
                    <TextField id="filled-basic" label="WhatsApp" style={{backgroundColor: 'white'}} color="primary" variant="filled" onChange={handleFriendPhone} value={friendPhone}/>
                    </div>
                    <br />
                    <text class="text-black font-normal text-md xl:ml-16 lg:ml-16 md:ml-16">**SE VERIFICARA EL NÚMERO AL</text>
                    <br />
                    <text class="text-black font-normal text-md xl:ml-24 lg:ml-24 md:ml-24">MOMENTO DE LA RIFA</text>
                </div>
                <div class="xl:mt-16 xl:ml-32 lg:mt-16 lg:ml-28 md:mt-16 md:ml-28">
                    <text class="text-red-600 font-semibold">*Datos requeridos</text>
                </div>
            </div>
            <div class="xl:mt-[580px] xl:ml-4 lg:mt-[580px] lg:ml-10 md:mt-[580px] md:ml-48">
                <Button variant="contained" style={{width: '130px', height: '50px', borderRadius: "25px", backgroundColor: "rgb(45 212 191)"}} disabled={!name || !phone || !friendName || !friendPhone}
                onClick={() => sendUserInfo(name, phone, email, entity, friendName, friendPhone)}>
                    ENVIAR
                </Button>
            </div>
        </>
    );
}

export default FormLayout