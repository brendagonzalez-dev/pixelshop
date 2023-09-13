import {useDispatch} from 'react-redux'
import {setIsLoading} from '../store/slices/isLoading.slice'
import {useEffect} from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setIsLoading(true))

        setTimeout(() => {
            dispatch(setIsLoading(false)) 
        }, 1500);
    }, [])

 

    return(
        <main className="container">
            <h1 className="main__title">Pixelshop</h1>
            <section className="section section--home">
                <article>
                    <h2 className="section__title">Explora nuestro catalogo</h2>
                    <p className="gb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum veritatis sint accusantium nisi voluptatem eius sit sequi corrupti deleniti excepturi similique corporis distinctio dicta labore, illo quasi sed omnis!</p>
                    <Link to="/gallery">
                        <button className="principal__button button--medium">Ir a la galeria</button>
                    </Link>
                </article>
                <article>
                    <img src="/galeria.jpg" alt="" />
                </article>
            </section>
            <section className="section section--home">
                <article>
                    <h2 className="section__title">Decora tu hogar</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum veritatis sint accusantium nisi voluptatem eius sit sequi corrupti deleniti excepturi similique corporis distinctio dicta labore, illo quasi sed omnis!</p>
                </article>
                <article>
                    <img src="/decoracion.jpg" alt="" />
                </article>
            </section>
            <section className="section section--home">
                <article>
                    <h2 className="section__title">Regala arte</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum veritatis sint accusantium nisi voluptatem eius sit sequi corrupti deleniti excepturi similique corporis distinctio dicta labore, illo quasi sed omnis!</p>
                </article>
                <article>
                    <img src="exposicion.jpg" alt="" />
                </article>
            </section>
            <section className="section section--home">
                <article>
                    <h2 className="section__title">Descubre a talentosos fotografos locales</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum veritatis sint accusantium nisi voluptatem eius sit sequi corrupti deleniti excepturi similique corporis distinctio dicta labore, illo quasi sed omnis!</p>
                </article>
                <article>
                    <img src="/foto.jpg" alt="" />
                </article>
            </section>
        </main>
    )
}

export default Home 