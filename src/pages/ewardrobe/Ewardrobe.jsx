import axios from 'axios';
import Login from '../../login';
import {MdDelete} from 'react-icons/md';  
import {GrAddCircle} from 'react-icons/gr'  
import { BASE_URL } from '../../assets/baseUrl';
import React, { useEffect, useState } from 'react';

import './e-wardrobe.css';
import Row from "react-bootstrap/Row";
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';
import AppNavBar from '../../components/AppNavBar';
import gcImg1 from '../../assets/images/e-wardrobe/gcImg1.png';
import gcImg2 from '../../assets/images/e-wardrobe/gcImg2.png';
import gcImg3 from '../../assets/images/e-wardrobe/gcImg3.png';

const Ewardrobe = () => {
    const [active, setActive] = useState(1);
    const [clothes, setClothes] = useState([]);
    const userId = localStorage.getItem("userId");
    const accessToken = localStorage.getItem("token");

    useEffect(() => {
        const getClothes = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/cloth/all/${userId}`)
                setClothes(response.data);
            } catch (error) {
                console.log("Error message: ", error);
            }
        };
    
        getClothes();
    }, [userId])

    return (
        <> 
            {accessToken ?
                <>                    
                    <div className='e-wardrobe-page'>
                        <AppNavBar/>
                        <h3 className='e-wardrobe-subtitle'><Logo className='logo-gallery'/>E-WARDROBE</h3>
                        <section className="switch-wardrobe-generate">
                            <h4 className={active === 1 ? 'active':''} onClick={() => setActive(1)}>SKYFITZZ WEB GALLERY</h4>
                            <h4 className={active === 2 ? 'active':''} onClick={() => setActive(2)}>GENERATED COLLECTION</h4>
                        </section>
                        {active === 1 ?(
                            <section className="display-wardrobe">
                                <Row xs={1} md={3} className="g-4">
                                    {clothes.map((cloth, index) => (
                                        <div className="wardrobe-img1" key={`${cloth.clothId}`} style={{ maxHeight: "260px", overflow: "hidden" }}>
                                            <img src={`${cloth.imageUrl}`} alt={`wardrobe ${index}`} className='e-wardrobe-img' />

                                            <div className="delete-wardrobe-item">
                                                <div className="delete-wardrobe-position">
                                                    <button>Delete</button>
                                                    <span><MdDelete/></span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Row>
                            </section>
                        ) : (
                            <section className="display-generate-collection">
                                <div className="generated-collection-img1">
                                    <img src={gcImg1} alt="generated collection image 1" className='e-wardrobe-img' />
                                    <div className="delete-wardrobe-item">
                                        <div className="delete-wardrobe-position">
                                            <button>Delete</button>
                                            <span><MdDelete/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="generated-collection-img2">
                                    <img src={gcImg2} alt="generated collection image 2" className='e-wardrobe-img' />
                                    <div className="delete-wardrobe-item">
                                        <div className="delete-wardrobe-position">
                                            <button>Delete</button>
                                            <span><MdDelete/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="generated-collection-img3">
                                    <img src={gcImg3} alt="generated collection image 3" className='e-wardrobe-img' />
                                    <div className="delete-wardrobe-item">
                                        <div className="delete-wardrobe-position">
                                            <button>Delete</button>
                                            <span><MdDelete/></span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                        }
                        {active === 1 ? <span className='e-wardrobe-add-more'><GrAddCircle /></span>:''}
                        
                        <Footer />
                    </div>
                </> :
                <>
                    <Login />
                </>
            }
        </>
    );
}

export default Ewardrobe;
