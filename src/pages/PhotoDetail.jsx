import Overlay from '../components/Overlay'
import {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {setIsLoading} from '../store/slices/isLoading.slice'
//import PurchaseForm from '../components/forms/PurchaseForm'
//import EditPhotoForm from '../components/forms/EditPhotoForm'
//import ModalOptions from '../components/commons/ModalOptions'
import {db} from '../../firebase-app/firebase.js'
import {getDoc, doc} from "firebase/firestore"
import {useParams} from 'react-router-dom'

const PhotoDetail = () => {

    const dispatch = useDispatch()
    const [isVisible, setIsVisible] = useState(false)
    const [detail, setDetail] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getData(id)
    }, [id])

    const getData = async id => {
        dispatch(setIsLoading(true))
        
        try {
            const docRef = await doc(db, "photos", id)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setDetail(docSnap.data())
            }else{
                //redireccionar a vista 404
    
            }
            dispatch(setIsLoading(false))
            
        } catch (error) {
            console.log(error)
        }
    }

    const handlePurchase = () => {
        setIsVisible(true)
    }

    return(
        <main className="container">
            <section className="section photo-detail-wrapper">
                <article className="photo-detail__image">
                    <img src={detail.url} alt="" />
                </article>
                <article className="photo-detail__information">
                    <p className="gb-2">{detail.description}</p>
                    <p className="gb-1">
                        <i className='bx-fw bx bx-camera' ></i>
                        Autor: {detail.author}
                    </p>
                    <p 
                    className={`photo-detail__stock gb-1 ${detail.stock === 0 && "photo-detail__stock--sold-out"} ${ (detail.stock >= 1 && detail.stock <= 10)&& "photo-detail__stock--warn"}`}>
                        <i className='bx-fw bx bx-coin-stack' ></i>
                        Stock: {detail.stock}
                    </p>
                    <p className="gb-3">
                        <i className='bx-fw bx bx-purchase-tag-alt' ></i>
                        Precio: ${detail.cost} MXN
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