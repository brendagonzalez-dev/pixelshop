import {useDispatch} from 'react-redux'
import {setIsLoading} from '../store/slices/isLoading.slice'
import {useEffect} from 'react'

const Purchases = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setIsLoading(true))

        setTimeout(() => {
            dispatch(setIsLoading(false)) 
        }, 1500);
    }, [])

    return(
    <main className="container">
        <h1 className="main__title">Historial de compras</h1>
        <section className="section">
            <ul className="purchases__list">
                <li className="purchases__item">
                    <img className="purchases__item-photo" src="https://picsum.photos/id/237/200/300" alt="" />
                     <div className="purchases__item-information">
                        <h4>
                            <i className='bx-fw bx bxs-paper-plane'></i>
                            No. Pedido: 789</h4>
                        <p>
                            <i className='bx-fw bx bx-dollar-circle'></i>
                            Precio total: 988
                        </p>

                        <p>
                            <i className='bx-fw bx bx-calendar'></i>
                            Fecha del pedido
                        </p>
                    </div>
                </li>
                <li className="purchases__item">
                    <img className="purchases__item-photo" src="https://picsum.photos/id/297/200/300" alt="" />
                     <div className="purchases__item-information">
                        <h4>
                            <i className='bx-fw bx bxs-paper-plane'></i>
                            No. Pedido: 789</h4>
                        <p>
                            <i className='bx-fw bx bx-dollar-circle'></i>
                            Precio total: 988
                        </p>

                        <p>
                            <i className='bx-fw bx bx-calendar'></i>
                            Fecha del pedido
                        </p>
                    </div>
                </li>
                <li className="purchases__item">
                    <img className="purchases__item-photo" src="https://picsum.photos/id/987/200/300" alt="" />
                    <div className="purchases__item-information">
                        <h4>
                            <i className='bx-fw bx bxs-paper-plane'></i>
                            No. Pedido: 789</h4>
                        <p>
                            <i className='bx-fw bx bx-dollar-circle'></i>
                            Precio total: 988
                        </p>

                        <p>
                            <i className='bx-fw bx bx-calendar'></i>
                            Fecha del pedido
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    </main>
       
    )
}

export default Purchases 