

import { TUser } from "@/lib/redux/features/auth/AuthSlice";
import { verifyToken } from "@/utils/VerifyToken";
import { cookies } from "next/headers";

// Define the type for the decoded token
export type DecodedToken = {
    id: string;
    role: string;
    email: string;
};



export const getCurrentUser = async (): Promise<TUser | null> => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    // Initial state of decodedToken as null
    let decodedToken: DecodedToken | null = null;

    if (accessToken) {
        decodedToken = verifyToken(accessToken);
        // If decodedToken is valid, return the user data
        if (decodedToken) {
            return {
                userId: decodedToken.id,
                role: decodedToken.role,
                email: decodedToken.email,
            };
        }
    }


    return null;
};

