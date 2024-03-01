import axios from "./axios";

export const Login = (user) => axios.post(`/adminlogin`, user);
export const VerifyToken = () => axios.get(`/adminverify`);