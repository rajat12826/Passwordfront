// const host = "https://Password-tracker-app-knl1.onrender.com";
const host = "http://localhost:8015";
// const host="https://backendPassword.vercel.app"
;
export const registerAPI = `${host}/api/auth/register`;
export const loginAPI = `${host}/api/auth/login`;
export const addPassword = `${host}/api/v1/pass/addPassword`;
export const editPasswords = `${host}/api/v1/pass/updatePassword`;
export const deletePasswords = `${host}/api/v1/pass/deletePassword`;
export const addNotes = `${host}/api/v1/notes/addNotes`;
export const editNotes = `${host}/api/v1/notes/updateNotes`;
export const deleteNotes = `${host}/api/v1/notes/deleteNotes`;