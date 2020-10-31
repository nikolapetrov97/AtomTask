import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/Card/Card';
import Layout from '../../components/Layout';
import './Favourites.css'


const Favourites = () => {

    const storeFavs = useSelector(state => state.favAlbum)

    useEffect(() => {
        console.log(storeFavs)
    }, [storeFavs]);

    const renderFavs = (storeFavs) => {
        let album = []
        for (let photoObj of storeFavs) {
            album.push(
                <Card key={photoObj.id} id={photoObj.id} picture={photoObj.url} title={photoObj.title} icon="fas fa-times fa-2x" />
            )
        }
        return album
    }

    return (
        <Layout>
            <div className="favalbum">
                <h1>Favourites</h1>
                <div className="mainFavWrapper">
                    {renderFavs(storeFavs.favAlbum)}
                </div>
            </div>

        </Layout>
    )

}

export default Favourites