import axios from "axios"

export function sendUserInfo (name, phone, email, state, friendName, friendPhone) {
    axios.post(`https://sheet.best/api/sheets/b04ce5c6-b378-436e-a441-d68f30a5425b`, {
        "Nombre": name,
        "WhatsApp": phone,
        "Correo": email,
        "Estado": state,
        "Nombre_Invitado": friendName,
        "WhatsApp_Invitado": friendPhone
    });
    return
}

export default sendUserInfo