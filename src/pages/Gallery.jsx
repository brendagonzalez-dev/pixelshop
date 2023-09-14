import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setIsLoading} from '../store/slices/isLoading.slice'
import {useEffect, useState} from 'react'
import {db} from '../../firebase-app/firebase.js'
import {collection, getDocs} from "firebase/firestore"; 

const Gallery = () => {
    
    const dispatch = useDispatch()
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        dispatch(setIsLoading(true))
        
        const aux = []
        const querySnapshot = await getDocs(collection(db, "photos"))

        querySnapshot.forEach((doc) => {
            const data = doc.data()
            data.id = doc.id
            
            console.log(data)
            aux.push(data)
        })
        

        setPhotos(aux.slice(0, 10))
        dispatch(setIsLoading(false)) 
    }

    

    return(
        <main className="container">
            <h1 className="main__title">Galeria</h1>
            <section className="section gallery">
                {
                    photos?.map(item => (
                        <article className="gallery__item" key={item.id}>
                            <Link to={`/gallery/detail/${item.id}`}>
                                <img src={item.url} alt="image description" />
                                <div className="gallery__item-overlay">
                                    <button className="principal__button">Ver Detalle</button>
                                </div>
                            </Link>
                        </article>
                    ))
                }
            </section>
            
        </main>
    )
}

export default Gallery 