import axios from "axios"

export function sendUserInfo (name, phone, email, state, inmodeClient, preApprovedClient) {
    axios.post(`https://sheet.best/api/sheets/b04ce5c6-b378-436e-a441-d68f30a5425b`, {
        "Nombre": name,
        "WhatsApp": phone,
        "Correo": email,
        "Estado": state,
        "Cliente_de_Inmode": inmodeClient,
        "Cliente_Preaprobado": preApprovedClient
    });
    return
}

export default sendUserInfo