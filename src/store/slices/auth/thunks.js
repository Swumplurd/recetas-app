import Swal from "sweetalert2"
import { fetchSinToken } from "../../../helpers/fetch"
import { login, logout } from './authSlice'

export const startLogin = (username, password) => {
    return async(dispatch) => {
        const resp = await fetchSinToken('auth/login', {username, password}, 'POST')
        const body = await resp.json();

        console.log(body)
       
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.nombre
            }))
        } else {
            Swal.fire('Error', body.msg, 'error')
        }
    }
}

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear()
        dispatch(logout())
    }
}