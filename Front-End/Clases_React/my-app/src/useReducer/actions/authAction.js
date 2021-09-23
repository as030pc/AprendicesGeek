import { types } from "../types/types";

export const login = (uid, displayName) => (
{
    type: types.login,
    payload:{
        uid,
        displayName //debe de coincidir con el reducer

    }

})

export const logout = (uid, displayName) => (
    {
        type: types.logout,

    })


