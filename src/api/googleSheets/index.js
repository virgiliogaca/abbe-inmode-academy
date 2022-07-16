import axios from "axios"

export function sendUserInfo (name, lastName, phone, email, state, equipment, isAbbeClient, isDermajalClient) {
    axios.post(``, {
        "Nombre": name,
        "Apellido": lastName,
        "WhatsApp": phone,
        "Correo": email,
        "Estado": state,
        "Equipo": equipment,
        "Cliente_de_Abbe": isAbbeClient,
        "Cliente_de_Dermajal": isDermajalClient
    });
    return
}

export default sendUserInfo
