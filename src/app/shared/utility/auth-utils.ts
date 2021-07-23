export class AuthUtils {
    private static authToken = 'auth token';

    static getAuthToken() {
        return localStorage.getItem(AuthUtils.authToken);
    }
    static setAuthToken(token) {
        localStorage.setItem(AuthUtils.authToken, token);
    }
    static removeAuthToken(token) {
        localStorage.removeItem(token);
    }

}