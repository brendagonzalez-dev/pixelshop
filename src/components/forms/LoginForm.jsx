import CustomInput from '../CustomInput'
import {useForm} from "react-hook-form"
import {toast} from '../../store/slices/toast.slice'
import {useDispatch} from 'react-redux'
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from '../../../firebase-app/firebase.js'


const LoginForm = () => {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()

    const onSubmit = async (data) => {
        try {
            const credentials = await signInWithEmailAndPassword(auth, data.email, data.password)
            console.log(credentials, "Logueado, redirigir a galeria")
        
        } catch (error) {
            console.error(error.code)
            dispatch(toast(error.message, "error"))
        }
    }


    return ( 
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="section__title gb-3">Ingresa tu información</h2>
            <CustomInput 
            id="user-email"
            label="Correo electronico"
            icon="bx-envelope"
            placeholder="example@example.com"
            register={ register }
            name="email"
            required
            type="email"
            />
             
            <CustomInput 
            id="pass"
            label="Contraseña"
            icon="bx-key"
            placeholder="Ingresa al menos 6 digitos"
            type="password"
            register={ register }
            name="password"
            required
            />
            <button className="principal__button" type="submit">Iniciar sesión</button>
            {/*<button className="secondary__button">Registrarse</button>*/}
        </form>
    )
}
 
export default LoginForm;