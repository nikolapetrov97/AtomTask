import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { getAlbumPictures } from '../../actions/album.action';
import Card from '../../components/Card/Card';
import "./Albums.css"

const Albums = () => {

    const [value, setValue] = useState(null)
    const [className, setClassName] = useState("album")
    const storePictures = useSelector(state => state.pictures);
    const storeFavs = useSelector(state => state.favAlbum);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbumPictures(value))
        console.log(storePictures)
    }, [value]);

    const handleSelect = (e) => {
        setValue(e)
        setClassName("album-active")
    }

    const renderAlbum = (storePictures) => {
        let album = []
        for (let photoObj of storePictures) {
            const filter = storeFavs.favAlbum.filter((item) => item.id == photoObj.id);
            if (filter.length !== 0) {
                album.push(
                    <Card key={photoObj.id} id={photoObj.id} picture={photoObj.url} title={photoObj.title} heart="true" icon="fas fa-heart fa-2x" />
                )
            } else {
                album.push(
                    <Card key={photoObj.id} id={photoObj.id} picture={photoObj.url} title={photoObj.title} heart="true" icon="far fa-heart fa-2x" />
                )
            }

        }
        return album
    }

    return (
        <Layout>
            <div className={className}>
                <h1>Album {value}</h1>
                <div>
                    <DropdownButton
                        variant="secondary"
                        title="Choose Album"
                        id="dropdown-menu-align-right"
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="1">Album 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Album 2</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Album 3</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Album 4</Dropdown.Item>
                        <Dropdown.Item eventKey="5">Album 5</Dropdown.Item>
                    </DropdownButton>
                </div>

                <div className="mainWrapper">
                    {renderAlbum(storePictures.albumPictures)}
                </div>

            </div>
        </Layout>
    )

}

export default Albums