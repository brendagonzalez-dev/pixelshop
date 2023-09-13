import Overlay from '../components/Overlay'
import {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {setIsLoading} from '../store/slices/isLoading.slice'
import PurchaseForm from '../components/forms/PurchaseForm'
//import EditPhotoForm from '../components/forms/EditPhotoForm'
//import ModalOptions from '../components/commons/ModalOptions'


const PhotoDetail = () => {
    const [isVisible, setIsVisible] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setIsLoading(true))

        setTimeout(() => {
            dispatch(setIsLoading(false)) 
        }, 1500);
    }, [])


    const handlePurchase = () => {
        setIsVisible(true)
    }

    return(
        <main className="container">
            <section className="section photo-detail-wrapper">
                <article className="photo-detail__image">
                    <img src="https://picsum.photos/400/500" alt="" />
                </article>
                <article className="photo-detail__information">
                    <p className="gb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam alias dicta ea et nesciunt iure deleniti repudiandae laboriosam corporis amet.</p>
                    <p className="gb-1">
                        <i className='bx-fw bx bx-camera' ></i>
                        Autor: Pepe Perez
                    </p>
                    {/* photo-detail__stock--sold-out */}
                    <p className="photo-detail__stock gb-1">
                        <i className='bx-fw bx bx-coin-stack' ></i>
                        Stock: 100
                    </p>
                    <p className="gb-3">
                        <i className='bx-fw bx bx-purchase-tag-alt' ></i>
                        Precio: $4500
                    </p>
                    <p className="gb-2">
                        <i className='bx-fw bx bx-package'></i>
                        Envios gratis a todo el pais
                    </p>
                 
                    <button 
                    className="principal__button gb-1"
                    onClick={handlePurchase}
                    >
                        Comprar
                    </button>
                    


                    <div className="buttons__wrapper">
                        <button 
                        className="principal__button"
                        onClick={handlePurchase}
                        >
                            <i className='bx-fw bx-xs bx bx-edit'></i>
                            Editar
                        </button>

                        <button 
                        className="secondary__button"
                        onClick={handlePurchase}
                        >
                            <i className='bx-fw bx-xs bx bx-trash'></i>
                            Eliminar
                        </button>
                    </div>


                </article>
            </section>

            <Overlay
            showOverlay={isVisible}
            closeOverlay={() => setIsVisible(false)}
            >
                {/*
                <PurchaseForm
                closeOverlay={() => setIsVisible(false)}
                />
    */}
            </Overlay>
        </main>
    )
}

export default PhotoDetail 