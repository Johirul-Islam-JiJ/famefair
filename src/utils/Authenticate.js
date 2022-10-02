export const checkIfLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (token) {
        // const user = jwt_decode(token);
        // return { ...user, token };
        return token
    }
    return false;
};