import CustomInput from '../CustomInput'
import {useDispatch} from 'react-redux'
import {toast} from '../../store/slices/toast.slice'

const PurchaseForm = ({closeOverlay}) => {
    
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        closeOverlay()

        dispatch(toast("La compra fue un exito"))
    }

    const handleCancellation = () => {
        //limpiar form
        closeOverlay()
    }

    return ( 
    <form className="form" onSubmit={handleSubmit}>
        <h2 className="section__title">Confirmar Compra</h2>
        <h3 className="gb-3">Total (Incluye IVA): $500</h3>
        <CustomInput 
        id="address"
        label="Dirección*"
        icon="bx-directions"
        placeholder="P. Sherman Calle Wallaby 42, Sydney"
        />
        <small className="gb-2 d-block">¿Quieres agregar una nota de regalo?</small>
        <CustomInput 
        id="message"
        label="Mensaje personalizado"
        icon="bx-gift"
        placeholder="Agrega un mensaje especial"
        />

        <CustomInput 
        id="payment"
        label="Información de pago*"
        icon="bx-credit-card"
        placeholder="Numero de tarjeta"
        />
        <button className="principal__button gb-1" type="submit">Comprar</button>
        <button 
        className="secondary__button"
        onClick={() => handleCancellation()}
        type="button"
        >
            Cancelar
        </button>
    </form>
    );
}
 
export default PurchaseForm;