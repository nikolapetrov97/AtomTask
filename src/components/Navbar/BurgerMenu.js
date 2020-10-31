import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function BurgerMenu() {

	const [fade, setFade] = useState(0);

    const burgerToggle = () => {
		let linksEl = document.querySelector('.narrowLinks');
		let burgerlinks = document.querySelectorAll('.narrowLinks li');
		console.log(burgerlinks);
		linksEl.classList.toggle('nav-active');
		if(fade === 0){
			setFade(1);
		}else{
			setFade(0);
		}
		burgerlinks.forEach((link, index) => {
			if(fade === 1) {
				link.style.opacity = `0`;
			}else {
				link.style.transition = `opacity ${index + 2}s ease-in-out`;
				link.style.opacity = `1`;
			}
		});
		
	}


    return (
        <div className="navNarrow">
			<i className="fa fa-bars fa-2x" onClick={burgerToggle}></i>
			<ul className="narrowLinks" style = {{listStyleType: 'none'}}>
				<li><Link className="burgerlink" to='/products' style={{ textDecoration: 'none' }}>Био Храна</Link></li>
				<li><Link className="burgerlink" to='/' style={{ textDecoration: 'none' }}>Био Козметика</Link></li>
				<li><Link className="burgerlink" to='/profile' style={{ textDecoration: 'none' }}>Неща За Дома</Link></li>
				<li><Link className="burgerlink" to='/products' style={{ textDecoration: 'none' }}>Био Сокове</Link></li>
			</ul>
		</div>
    )
}
export default BurgerMenu;