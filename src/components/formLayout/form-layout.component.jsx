import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import Modal from '@mui/material/Modal';
import {sendUserInfo} from '../../api/googleSheets/index'
import { PreApprovedModal, NewUserModal } from '../alertDialog';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import Instrucciones from '../../assets/instrucciones.pdf'
import Switch from '@mui/material/Switch';
import InputMask from "react-input-mask";

const FormLayout = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [entity, setEntity] = React.useState('');
    const [isAbbeClient, setIsAbbeClient] = useState('No Soy Cliente Abbe');
    const [open, setOpen] = React.useState(false);
    const [equipment, setEquipment] = React.useState('');
    const [isEmailError, setEmailError] = useState(true)
    
    const handleOpen = () => 
    {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        setIsAbbeClient('No Soy Cliente Abbe');
    }

    const handleName = (event) => {
        setName(event.target.value);
      };
    const handleLastName = (event) => {
        setLastName(event.target.value);
      };
    const handlePhone = (event) => {
        setPhone(event.target.value);
      };
    const handleEmail = (event) => {
        setEmailError(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(event.target.value)))
        setEmail(event.target.value);
      };
    const handleEntity = (event) => {
        setEntity(event.target.value);
      };
    const handleRadioButton = (event) => {
        setIsAbbeClient(event.target.value);
    };
    const handleEquipment = (event) => {
        setEquipment(event.target.value);
    };

    const handleEmailError = (event) => {
        
    };

    const saveForm = () => {
        sendUserInfo(name, phone, email, entity, equipment, isAbbeClient)
        handleOpen()
        setEmail('');
        setEntity('');
        setName('');
        setPhone('');
        setEquipment('');
    };

    return (
        <>
            <div class="bg-[#1c0d44] rounded-full
            xl:w-44 xl:h-10 xl:ml-5 
            lg:w-36 lg:h-9 lg:ml-24
            md:w-[550px] md:h-10
            sm:ml-8
            xs:w-[290px] xs:h-10 xs:ml-9
            xxs:w-[290px] xxs:h-10 xxs:ml-9">
                <text class="text-white font-light italic 
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
                    <text class="text-white font-light 
                    xl:text-lg 
                    lg:text-base">*</text>
                </div>
                <div class="
                xl:-mt-12 
                lg:-mt-10 lg:ml-0 
                md:ml-48 md:-mt-10
                xs:ml-24 xs:-mt-10
                xxs:ml-20 xxs:-mt-10">
                    <TextField id="filled-basic" label="Nombre" style={{backgroundColor: 'white', width: '250px'}} color="primary" variant="filled" onChange={handleName} value={name}/>
                </div>
            </div>
            <div>
                <div class="
                xl:mt-10 xl:-ml-24 
                lg:mt-8 lg:-ml-24 
                md:mt-10 md:ml-24
                xs:mt-12 xs:ml-2
                xxs:mt-12 xxs:ml-0">
                    <text class="text-white font-light 
                    xl:text-lg 
                    lg:text-base">APELLIDO</text>
                    <text class="text-white font-light 
                    xl:text-lg 
                    lg:text-base">*</text>
                </div>
                <div class="
                xl:-mt-12 
                lg:-mt-10 lg:ml-0 
                md:ml-48 md:-mt-10
                xs:ml-24 xs:-mt-10
                xxs:ml-20 xxs:-mt-10">
                    <TextField id="filled-basic" label="Apellido" style={{backgroundColor: 'white', width: '250px'}} color="primary" variant="filled" onChange={handleLastName} value={lastName}/>
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
                    <text class="text-white font-light xl:text-lg lg:text-base">*</text>
                </div>
                <div class="
                xl:-mt-12 
                lg:-mt-10 lg:ml-0 
                md:ml-48 md:-mt-10
                xs:ml-24 xs:-mt-10
                xxs:ml-20 xxs:-mt-10">
                    <InputMask
                        mask="(52)999 999 99 99"
                        value={phone}
                        disabled={false}
                        onChange={handlePhone}
                        maskChar=" "
                        style={{height: '50px', width: '250px'}}
                        >
                    </InputMask>
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
                    <text class="text-white font-light 
                    xl:text-lg 
                    lg:text-base">*</text>
                </div>
                <div class="
                xl:-mt-12 
                lg:-mt-10 lg:ml-0 
                md:ml-48 md:-mt-10
                xs:ml-24 xs:-mt-10
                xxs:ml-20 xxs:-mt-10">
                    <TextField id="filled-basic" label="Correo" error={isEmailError} style={{backgroundColor: 'white', width: '250px'}} color="primary" variant="filled" onChange={handleEmail} value={email}/>
                </div>
            </div>
            <div>
                <div class="
                xl:mt-5 xl:-ml-28
                lg:mt-8 lg:-ml-24 
                md:mt-8 md:ml-20
                xs:mt-12 xs:-ml-1
                xxs:mt-12 xxs:-ml-3">
                    <text class="text-white font-light ml-2
                    xl:text-lg
                    lg:text-base">EQUIPO</text>
                    <br />
                    <text class="text-white font-light 
                    xl:text-lg 
                    lg:text-base">DE INTERÉS</text>
                    <text class="text-white font-light 
                    xl:text-lg 
                    lg:text-base">*</text>
                </div>
                <div class="
                xl:-mt-16 xl:-ml-2
                lg:-mt-16 lg:-ml-2
                md:ml-[184px] md:-mt-14
                xs:ml-[85px] xs:-mt-14
                xxs:ml-[72px] xxs:-mt-14">
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-filled-label">Equipo de Interés</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={equipment}
                        style={{backgroundColor: 'white', width: '250px'}}
                        onChange={handleEquipment}
                        >
                            <MenuItem value=''>
                                <em></em>
                            </MenuItem>
                            <MenuItem value={'SMARTXIDE PUNTO'}>SMARTXIDE PUNTO</MenuItem>
                            <MenuItem value={'LUXEA'}>LUXEA</MenuItem>
                            <MenuItem value={'MOTUS AX'}>MOTUS AX</MenuItem>
                            <MenuItem value={'MOTUS AY'}>MOTUS AY</MenuItem>
                            <MenuItem value={'ONDA PLUS'}>ONDA PLUS</MenuItem>
                            <MenuItem value={'SMARTXIDE TOUCH'}>SMARTXIDE TOUCH</MenuItem>
                            <MenuItem value={'VASQ COLORANTE PULSADO'}>VASQ COLORANTE PULSADO</MenuItem>
                            <MenuItem value={'DUO GLIDE'}>DUO GLIDE</MenuItem>
                            <MenuItem value={'SMART PICO'}>SMART PICO</MenuItem>
                            <MenuItem value={'EXIPLEX'}>EXIPLEX</MenuItem>
                        </Select>
                    </FormControl>
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
                    lg:text-base">ESTADO*</text>
                </div>
                <div class="
                xl:-mt-16 xl:-ml-2
                lg:-mt-16 lg:-ml-2
                md:ml-[184px] md:-mt-14
                xs:ml-[85px] xs:-mt-14
                xxs:ml-[72px] xxs:-mt-14">
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-filled-label">Estado</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={entity}
                        style={{backgroundColor: 'white', width: '250px'}}
                        onChange={handleEntity}
                        >
                            <MenuItem value=''>
                                <em></em>
                            </MenuItem>
                            <MenuItem value={'AS'}>Aguascalientes</MenuItem>
                            <MenuItem value={'BC'}>Baja California</MenuItem>
                            <MenuItem value={'BS'}>Baja California Sur</MenuItem>
                            <MenuItem value={'CC'}>Campeche</MenuItem>
                            <MenuItem value={'CS'}>Chiapas</MenuItem>
                            <MenuItem value={'CH'}>Chihuahua</MenuItem>
                            <MenuItem value={'CL'}>Coahuila</MenuItem>
                            <MenuItem value={'CM'}>Colima</MenuItem>
                            <MenuItem value={'CDMX'}>Ciudad de México</MenuItem>
                            <MenuItem value={'DG'}>Durango</MenuItem>
                            <MenuItem value={'GT'}>Guanajuato</MenuItem>
                            <MenuItem value={'GR'}>Guerrero</MenuItem>
                            <MenuItem value={'HG'}>Hidalgo</MenuItem>
                            <MenuItem value={'JC'}>Jalisco</MenuItem>
                            <MenuItem value={'MC'}>México</MenuItem>
                            <MenuItem value={'MN'}>Michoacan</MenuItem>
                            <MenuItem value={'MS'}>Morelos</MenuItem>
                            <MenuItem value={'NT'}>Nayarit</MenuItem>
                            <MenuItem value={'NL'}>Nuevo León</MenuItem>
                            <MenuItem value={'OC'}>Oaxaca</MenuItem>
                            <MenuItem value={'PL'}>Puebla</MenuItem>
                            <MenuItem value={'QT'}>Querétaro</MenuItem>
                            <MenuItem value={'QR'}>Quintana Roo</MenuItem>
                            <MenuItem value={'SP'}>San Luis Potosí</MenuItem>
                            <MenuItem value={'SL'}>Sinaloa</MenuItem>
                            <MenuItem value={'SR'}>Sonora</MenuItem>
                            <MenuItem value={'TC'}>Tabasco</MenuItem>
                            <MenuItem value={'TL'}>Tlaxcala</MenuItem>
                            <MenuItem value={'TS'}>Tamaulipas</MenuItem>
                            <MenuItem value={'VZ'}>Veracruz</MenuItem>
                            <MenuItem value={'YN'}>Yucatán</MenuItem>
                            <MenuItem value={'ZS'}>Zacatecas</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div class="
                xl:-ml-24
                lg:ml-12 
                md:ml-52 md:mt-5
                xs:ml-24
                xxs:ml-8">
                    <text class="text-white font-semibold">Estoy registrado en DERMAJAL 2022*</text>
                    <Switch></Switch>
                </div>
            <div class="bg-teal-500 z-0 rounded-lg absolute 
            xl:w-[415px] xl:h-40 xl:-ml-20 xl:mt-10
            lg:w-[380px] lg:h-44 lg:-ml-10 lg:mt-10
            md:w-[380px] md:h-44 md:ml-32 md:mt-14
            sm:w-[380px] sm:h-44 sm:ml-14 sm:mt-10
            xs:w-[360px] xs:h-44 xs:ml-0 xs:mt-10
            xxs:w-[330px] xxs:h-44 xxs:ml-0 xxs:mt-10">
                <div class="bg-white shadow-lg shadow-gray-500 z-10 rounded-2xl
                xl:ml-7 xl:-mt-5 xl:w-[250px] xl:h-7
                lg:ml-4 lg:-mt-5 lg:w-[170px] lg:h-7
                md:ml-4 md:-mt-5 md:w-[170px] md:h-7
                xs:ml-4 xs:-mt-5 xs:w-[170px] xs:h-7
                xxs:ml-4 xxs:-mt-5 xxs:w-[150px] xxs:h-7">
                    <div class="
                    xl:ml-4">
                        <text class="italic font-serif
                        xl:ml-4 xl:text-xl
                        lg:ml-4 
                        md:ml-4
                        xs:ml-4 xs:text-sm
                        xxs:ml-4 xxs:text-xs">{'ENTRA EN LA RIFA:'}</text>
                    </div>
                </div>
                <div class="
                xl:ml-4 
                lg:ml-4 
                md:ml-4
                xs:ml-4 xs:mt-0
                xxs:ml-4 xxs: mt-0">
                    <br />
                    <text class="text-black font-semibold text-lg 
                    xl:ml-2 
                    lg:ml-2 
                    md:ml-2
                    xs:ml-2
                    xxs:ml-2">NO SOY CLIENTE ABBE</text>
                    <div class="
                    xl:-mt-8 xl:ml-72
                    lg:-mt-8 lg:ml-72
                    md:-mt-8 md:ml-72
                    xs:-mt-8 xs:ml-64
                    xxs:-mt-8 xxs:ml-64">
                    <Switch></Switch>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg absolute 
            xl:w-[415px] xl:h-60 xl:-ml-20 xl:mt-64
            lg:w-[380px] lg:h-60 lg:-ml-10 lg:mt-64
            md:w-[420px] md:h-60 md:ml-28 md:mt-72
            sm:w-[420px] sm:h-48 sm:ml-10 sm:mt-64
            xs:w-[380px] xs:h-60 xs:-ml-2 xs:mt-64
            xxs:w-[320px] xxs:h-48 xxs:ml-0 xxs:mt-72">
                <div class="
                xl:ml-4 xl:-mt-3
                lg:ml-4 
                md:ml-4
                xs:ml-0 xs:mt-0
                xxs:ml-0 xxs:-mt-5">
                    <br />
                    <text class="text-black font-semibold 
                    2xl:text-xl 
                    xl:text-xl xl:ml-32 
                    lg:text-lg lg:ml-28
                    md:text-xl md:ml-32
                    xs:text-xl xs:ml-32
                    xxs:text-base xxs:ml-28">IMPORTANTE:</text>
                    <br />
                    <text class="text-black font-semibold 2xl:text-xl
                    xl:text-xl xl:ml-3
                    lg:text-lg lg:ml-3
                    md:text-xl md:ml-3
                    xs:text-xl xs:ml-3
                    xxs:text-base xxs:ml-3">¡En caso de no ser cliente de Abbe, aún</text>
                    <br />
                    <text class="text-black font-semibold 2xl:text-xl 
                    xl:text-xl xl:ml-8
                    lg:text-lg lg:ml-8
                    md:text-xl md:ml-8
                    xs:text-xl xs:ml-8
                    xxs:text-base xxs:ml-6">podrás participar en la rifa enviando</text>
                    <br />
                    <text class="text-black font-semibold 2xl:text-xl
                    xl:text-xl xl:ml-16
                    lg:text-lg lg:ml-16
                    md:text-xl md:ml-16
                    xs:text-xl xs:ml-16
                    xxs:text-base xxs:ml-14">la documentación requerida!</text>
                    <br />
                    <text class="text-black font-light 2xl:text-xl 
                    xl:text-xl xl:ml-28
                    lg:text-lg lg:ml-24
                    md:text-xl md:ml-28
                    xs:text-xl xs:ml-28
                    xxs:text-base xxs:ml-24">Más información</text>
                    <text class="text-blue-400 font-light underline 2xl:text-xl
                    xl:text-xl xl:ml-1
                    lg:text-lg lg:ml-1
                    md:text-xl md:ml-1
                    xs:text-xl xs:ml-1
                    xxs:text-base xxs:ml-1"><a href={Instrucciones} target="_blank" rel="noreferrer">aquí</a></text>
                    <br />
                    <text class="text-black font-bold 
                    2xl:text-3xl 2xl:ml-32 
                    xl:text-2xl xl:ml-40
                    lg:text-xl lg:ml-36
                    md:text-xl md:ml-40
                    xs:text-xl xs:ml-40
                    xxs:text-base xxs:ml-32">¿Dudas?</text>
                    <br />
                    <text class="text-black font-light 2xl:text-2xl 2xl:ml-16 
                    xl:text-xl xl:ml-24
                    lg:text-lg lg:ml-20
                    md:text-xl md:ml-24
                    xs:text-xl xs:ml-24
                    xxs:text-base xxs:ml-20">Whatsapp: 33 2258 9978</text>
                </div>
            </div>
            <div class="
            xl:mt-[550px] xl:ml-8
            lg:mt-[580px] lg:ml-10 
            md:mt-[650px] md:ml-48
            sm:mt-[650px] sm:ml-36
            xs:mt-[600px] xs:ml-20
            xxs:mt-[550px] xxs:ml-16">
                <Button variant="contained" style={{width: '200px', height: '60px', borderRadius: "25px", backgroundColor: "rgb(45 212 191)", fontSize: "20px"}} disabled={!name || !phone || !email || equipment === ''}
                onClick={() => saveForm()}>
                    ENVIAR
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    {
                        (isAbbeClient === 'No Soy Cliente Abbe') ?
                        <NewUserModal handleChange={handleClose}/> :
                        <PreApprovedModal handleChange={handleClose}/>
                    }
                </Modal>
            </div>
        </>
    );
}

export default FormLayout