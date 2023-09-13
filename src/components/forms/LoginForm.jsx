import CustomInput from '../CustomInput'

const LoginForm = () => {
    return ( 
        <form className="form">
            <h2 className="section__title gb-3">Ingresa tu información</h2>
            <CustomInput 
            id="user"
            label="Usuario"
            icon="bx-user"
            placeholder="Nombre de usuario o correo electronico"
            />
            <CustomInput 
            id="pass"
            label="Contraseña"
            icon="bx-key"
            placeholder="Contraseña"
            />
            <button className="principal__button" type="submit">Iniciar sesión</button>
            {/*<button className="secondary__button">Registrarse</button>*/}
        </form>
    )
}
 
export default LoginForm;