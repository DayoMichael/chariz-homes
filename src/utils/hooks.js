import { getToken } from "./appConfig";

export function useAuth() {
    const token = getToken();
    if (token) {
        return true;
    }
    return false;
}