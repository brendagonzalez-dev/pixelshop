import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setIsLoading} from '../store/slices/isLoading.slice'
import {useEffect} from 'react'

const Gallery = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setIsLoading(true))

        setTimeout(() => {
            dispatch(setIsLoading(false)) 
        }, 1500);
    }, [])

    return(
        <main className="container">
            <h1 className="main__title">Galeria</h1>
            <section className="section gallery">
                <article className="gallery__item">
                    <Link to={`/gallery/detail/666`}>
                        <img src="https://picsum.photos/400/600" alt="image description" />
                        <div className="gallery__item-overlay">
                            <button className="principal__button">Ver Detalle</button>
                        </div>
                    </Link>
                </article>
                <article className="gallery__item">
                    <Link to={`/gallery/detail/666`}>
                        <img src="https://picsum.photos/400/600" alt="image description" />
                        <div className="gallery__item-overlay">
                            <button className="principal__button">Ver Detalle</button>
                        </div>
                    </Link>
                </article>
                <article className="gallery__item">
                    <Link to={`/gallery/detail/666`}>
                        <img src="https://picsum.photos/400/600" alt="image description" />
                        <div className="gallery__item-overlay">
                            <button className="principal__button">Ver Detalle</button>
                        </div>
                    </Link>
                </article>
                <article className="gallery__item">
                    <Link to={`/gallery/detail/666`}>
                        <img src="https://picsum.photos/400/600" alt="image description" />
                        <div className="gallery__item-overlay">
                            <button className="principal__button">Ver Detalle</button>
                        </div>
                    </Link>
                </article>
                <article className="gallery__item">
                    <Link to={`/gallery/detail/666`}>
                        <img src="https://picsum.photos/400/600" alt="image description" />
                        <div className="gallery__item-overlay">
                            <button className="principal__button">Ver Detalle</button>
                        </div>
                    </Link>
                </article>
                <article className="gallery__item">
                    <Link to={`/gallery/detail/666`}>
                        <img src="https://picsum.photos/400/600" alt="image description" />
                        <div className="gallery__item-overlay">
                            <button className="principal__button">Ver Detalle</button>
                        </div>
                    </Link>
                </article>
                <article className="gallery__item">
                    <Link to={`/gallery/detail/666`}>
                        <img src="https://picsum.photos/400/600" alt="image description" />
                        <div className="gallery__item-overlay">
                            <button className="principal__button">Ver Detalle</button>
                        </div>
                    </Link>
                </article>
                <article className="gallery__item">
                    <Link to={`/gallery/detail/666`}>
                        <img src="https://picsum.photos/400/600" alt="image description" />
                        <div className="gallery__item-overlay">
                            <button className="principal__button">Ver Detalle</button>
                        </div>
                    </Link>
                </article>
                <article className="gallery__item">
                    <Link to={`/gallery/detail/666`}>
                        <img src="https://picsum.photos/400/600" alt="" />
                        <div className="gallery__item-overlay">
                            <button className="principal__button">Ver Detalle</button>
                        </div>
                    </Link>
                </article>
                <article className="gallery__item">
                    <Link to={`/gallery/detail/666`}>
                        <img src="https://picsum.photos/400/600" alt="" />
                        <div className="gallery__item-overlay">
                            <button className="principal__button">Ver Detalle</button>
                        </div>
                    </Link>
                </article>
            </section>
            
        </main>
    )
}

export default Gallery 