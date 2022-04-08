import axios from "axios"

export function sendUserInfo (name, phone, email, state, equipment, isAbbeClient) {
    axios.post(`https://sheet.best/api/sheets/1ec3f096-f47a-47ff-ad86-22cfd9f1acaf`, {
        "Nombre": name,
        "WhatsApp": phone,
        "Correo": email,
        "Estado": state,
        "Equipo": equipment,
        "Cliente_de_Abbe": isAbbeClient
    });
    return
}

export default sendUserInfo