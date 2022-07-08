import axios from "axios"

export function sendUserInfo (name, lastName, phone, email, state, equipment, isAbbeClient, isDermajalClient) {
    axios.post(`https://sheet.best/api/sheets/11d74675-6d4b-458d-b6a9-087a82dd6b5c`, {
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