import CustomInput from '../CustomInput'
import {useDispatch} from 'react-redux'
import {toast} from '../../store/slices/toast.slice'

const AddPhotoForm = () => {

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()

        dispatch(toast("Fotografia agregada con éxito."))
    }

    return ( 
        <form className="form" onSubmit={handleSubmit}>
                <h2 className="section__title gb-3">Nueva fotografia</h2>
                <CustomInput 
                id="img-file"
                label="Cargar fotografia"
                icon="bx-upload"
                placeholder=""
                type="file"
                /> 
                <CustomInput 
                id="description"
                label="Descripcion"
                icon="bx-edit-alt"
                placeholder="Breve descripción de la fotografia"
                /> 
                <CustomInput 
                id="author"
                label="Autor"
                icon="bx-camera"
                placeholder="Nombre del autor"
                />
                <CustomInput 
                id="stock"
                label="Stock disponible"
                icon="bx-coin-stack"
                placeholder="Unidades disponibles"
                type="number"
                />
                <CustomInput 
                id="price"
                label="Precio"
                icon="bx-purchase-tag-alt"
                placeholder="$5000 MXN"
                type="number"
                />
                <button className="principal__button" type="submit">Agregar a la galeria</button>
                {/*<button className="secondary__button">Registrarse</button>*/}
        </form>
    );
}
 
export default AddPhotoForm;