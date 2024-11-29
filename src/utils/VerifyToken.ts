import { DecodedToken } from "@/services";
import { jwtDecode } from "jwt-decode";


export const verifyToken = (token: string): DecodedToken | null => {

    const decode = jwtDecode(token) as DecodedToken;
    return decode;

}


