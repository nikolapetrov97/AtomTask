import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFav, deleteFav } from '../../actions/favourites.action'
import "./Card.css"

const Card = (props) => {

    const [className, setClassName] = useState(props.icon)

    const dispatch = useDispatch()

    const addToFavourites = () => {
        let favObj = {
            id: props.id,
            url: props.picture,
            title: props.title
        }
        dispatch(addFav(favObj))
    }

    const deleteFavourite = (id) => {
        dispatch(deleteFav(id))
        console.log(`Deleting ${id}`)
    }

    const addOrDeleteFav = (id) => {
        if (className === "far fa-heart fa-2x") {
            setClassName("fas fa-heart fa-2x")
            addToFavourites()
        } else if (className === "fas fa-heart fa-2x") {
            setClassName("far fa-heart fa-2x")
            deleteFavourite(id)
        }

    }
    return (
        <div class="productWrapper">
            <div>
                {props.picture ?
                    <img src={props.picture} alt="" />
                    : null
                }
            </div>

            <div class="productDetails">
                <div class="title">{props.title}</div>

                {/* Checks whether there should be heart or bars and the fill effect of the heart */}
                <div class="heartWrapper" style={{ margin: "1rem 0 1rem 0" }}>
                    <i class={className} onClick={() => {
                        className == "fas fa-times fa-2x" ? deleteFavourite(props.id) : addOrDeleteFav(props.id)
                    }}
                        style={className === "fas fa-heart fa-2x" ?
                            { color: `red` } :
                            { color: `black` }} >
                    </i>
                </div>

                {/* <div class="barsWrapper" style={isHeart === "true" ? { display: "none" } : { margin: "1rem 0 1rem 0" }}>
                    <i className="fas fa-times fa-2x" onClick={deleteFavourite(props.id)} style={{ color: "black" }}></i>
                </div> */}
            </div>
        </div>
    )

}

export default Card