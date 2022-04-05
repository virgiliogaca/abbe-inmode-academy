import axios from "axios"

export function sendUserInfo (name, phone, email, state, inmodeClient, preApprovedClient) {
    axios.post(`https://sheet.best/api/sheets/460897d0-1b29-448a-8f3b-253054d2736f`, {
        "Nombre": name,
        "WhatsApp": phone,
        "Correo": email,
        "Estado": state,
        "Cliente_de_Inmode": inmodeClient,
        "Cliente_Pre_Aprobado": preApprovedClient
    });
    return
}

export default sendUserInfo