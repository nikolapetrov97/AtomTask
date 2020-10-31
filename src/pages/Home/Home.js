import React from 'react'
import Layout from '../../components/Layout'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <Layout>
            <div className="btnwrapper">
                <h1>Photo Gallery</h1>
                <Link to='/albums' style={{ textDecoration: 'none' }}>
                    <div class="productbtn">
                        <svg>
                            <rect x="0" y="0" fill="none" width="166" height="45" />
                        </svg>
                        GET STARTED
                    </div>
                </Link>

            </div>

        </Layout>

    )

}

export default Home