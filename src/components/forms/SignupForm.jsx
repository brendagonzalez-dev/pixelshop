import CustomInput from '../CustomInput'
import {auth} from '../../../firebase-app/firebase.js'
import {createUserWithEmailAndPassword} from "firebase/auth"
import {useForm} from "react-hook-form"
import {toast} from '../../store/slices/toast.slice'
import {useDispatch} from 'react-redux'

const SignupForm = () => {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    
    const onSubmit = async (data) => {
        try {
            const credentials = await createUserWithEmailAndPassword(auth, data.email, data.password)
            console.log(credentials, "Logueado, redirigir a galeria")
        
        } catch (error) {
            console.error(error.code)
            dispatch(toast(error.message, "error"))
        }
    }



    return ( 
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <CustomInput 
            id="user"
            label="Usuario"
            icon="bx-user"
            placeholder="Susana Distancia"
            register={ register }
            name="username"
            required
            />
    
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
              
            <button className="principal__button" type="submit">Crear cuenta</button>
        </form>
    )
}
 
export default SignupForm;