import httpClient from "@/services/httpClient";
import { server } from "./constants";
import router from "../router";
import * as productAPIs from "./api_product";

const isLoggedIn = () => {
    let token = localStorage.getItem(server.TOKEN_KEY);
    return token != null;
};

const login = async values => {
    let result = await httpClient.post(server.LOGIN_URL, values);
    if (result.data.result == "ok") {
        localStorage.setItem(server.TOKEN_KEY, "1234");
        router.push("/check-in").catch(() => {});
        return true;
    } else {
        alert("Login wrong");
        router.push("/");
        return false;
    }
};

const register = async values => {
    let result = await httpClient.post(server.REGISTER_URL, values);
    if (result.data.result == "ok") {
        router.go(-1);
    } else {
        alert(JSON.stringify(result));
    }
};

const logoff = () => {
    localStorage.removeItem(server.TOKEN_KEY);
    router.push("/login").catch(() => {});
};

export default {
    isLoggedIn,
    login,
    logoff,
    register,
    ...productAPIs
};
