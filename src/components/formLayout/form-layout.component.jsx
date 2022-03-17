import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { sendUserInfo } from "../../api/googleSheets"

const FormLayout = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [entity, setEntity] = useState('');
    const [friendName, setFriendName] = useState('');
    const [friendPhone, setFriendPhone] = useState('');

    return (
        <>
            <div class="bg-teal-400 w-44 h-10">
                <text class="text-white font-semibold text-3xl ml-5 ">REGISTRO</text>
            </div>
            <div>
                <div class="mt-16 -ml-24">
                    <text class="text-white font-light text-lg">NOMBRE</text>
                    <text class="text-red-600 font-light text-lg ">*</text>
                </div>
                <div class="-mt-12">
                    <TextField id="filled-basic" label="Nombre" style={{backgroundColor: 'white'}} color="primary" variant="filled" />
                </div>
            </div>
            <div>
                <div class="mt-10 -ml-28">
                    <text class="text-white font-light text-lg">WHATSAPP</text>
                    <text class="text-red-600 font-light text-lg ">*</text>
                </div>
                <div class="-mt-12">
                    <TextField id="filled-basic" label="WhatsApp" style={{backgroundColor: 'white'}} color="primary" variant="filled" />
                </div>
            </div>
            <div>
                <div class="mt-10 -ml-24">
                    <text class="text-white font-light text-lg">CORREO</text>
                </div>
                <div class="-mt-12">
                    <TextField id="filled-basic" label="Correo" style={{backgroundColor: 'white'}} color="primary" variant="filled" />
                </div>
            </div>
            <div>
                <div class="mt-10 -ml-24">
                    <text class="text-white font-light text-lg">ESTADO</text>
                </div>
                <div class="-mt-12">
                    <TextField id="filled-basic" label="Estado" style={{backgroundColor: 'white'}} color="primary" variant="filled" />
                </div>
            </div>
            <div class="bg-white w-[415px] h-72 -ml-28 mt-52 z-0 rounded-xl absolute">
                <div class="bg-teal-400 w-72 h-48 shadow-lg shadow-gray-500 ml-16 -mt-36 z-10">
                    <div class="ml-4">
                        <br />
                        <text class="text-white font-normal text-lg ml-11">PARTICIPA EN LA RIFA</text>
                        <br />
                        <text class="text-white font-normal text-lg ml-5">DE UN KIT DE AGUJAS CON</text>
                        <br />
                        <text class="text-white font-normal text-lg ml-6">VALOR DE </text>
                        <text class="text-white font-bold text-lg">$18,000.00</text>
                        <text class="text-white font-normal text-lg"> MX</text>
                        <br />
                        <text class="text-white font-bold text-lg ml-11">REGISTRANDO A UN</text>
                        <br />
                        <text class="text-white font-bold text-lg ml-14">MÉDICO AMIGO**</text>
                    </div>
                </div>
                <div class="ml-4">
                    <br />
                    <text class="text-black font-normal text-lg ml-2">NOMBRE*</text>
                    <div class="-mt-10 ml-28">
                    <TextField id="filled-basic" label="Nombre" style={{backgroundColor: 'white'}} color="primary" variant="filled" />
                    </div>
                    <br />
                    <text class="text-black font-normal text-lg -ml-2">WHATSAPP*</text>
                    <div class="-mt-11 ml-28">
                    <TextField id="filled-basic" label="WhatsApp" style={{backgroundColor: 'white'}} color="primary" variant="filled" />
                    </div>
                    <br />
                    <text class="text-black font-normal text-md ml-16">**SE VERIFICARA EL NÚMERO AL</text>
                    <br />
                    <text class="text-black font-normal text-md ml-24">MOMENTO DE LA RIFA</text>
                </div>
                <div class="mt-16 ml-32">
                    <text class="text-red-600 font-semibold">*Datos requeridos</text>
                </div>
            </div>
            <div class="mt-[580px] ml-4">
                <Button variant="contained" style={{width: '130px', height: '50px', borderRadius: "25px", backgroundColor: "rgb(45 212 191)"}} disabled={false}>
                    ENVIAR
                </Button>
            </div>
        </>
    );
}

export default FormLayout