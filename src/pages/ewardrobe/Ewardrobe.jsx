import React, { useState } from 'react';
import AppNavBar from '../../components/AppNavBar';
import Footer from '../../components/Footer';
import './e-wardrobe.css';
import skyImg1 from '../../assets/images/e-wardrobe/skyImg1.png';
import skyImg2 from '../../assets/images/e-wardrobe/skyImg2.png';
import skyImg3 from '../../assets/images/e-wardrobe/skyImg3.png';
import gcImg1 from '../../assets/images/e-wardrobe/gcImg1.png';
import gcImg2 from '../../assets/images/e-wardrobe/gcImg2.png';
import gcImg3 from '../../assets/images/e-wardrobe/gcImg3.png';
import {MdDelete} from 'react-icons/md';  
import {GrAddCircle} from 'react-icons/gr'  

const Ewardrobe = () => {
    const [active, setActive] = useState(1);
    return (
        <div className='e-wardrobe-page'>
            <AppNavBar/>
            <h3 className='e-wardrobe-subtitle'>LOGO GALLERY</h3>
            <section className="switch-wardrobe-generate">
                <h4 className={active == 1 ? 'active':''} onClick={() => setActive(1)}>SKYFITZZ WEB GALLERY</h4>
                <h4 className={active == 2 ? 'active':''} onClick={() => setActive(2)}>GENERTED COLLECTION</h4>
            </section>
            {active == 1 ?(
                <section className="display-wardrobe">
                    <div className="wardrobe-img1">
                        <img src={skyImg1} alt="wardrobe image 1" />
                        <div className="delete-wardrobe-item">
                            <div className="delete-wardrobe-position">
                                <button>Delete</button>
                                <span><MdDelete/></span>
                            </div>
                        </div>
                    </div>
                    <div className="wardrobe-img2">
                        <img src={skyImg2} alt="wardrobe image 2" />
                        <div className="delete-wardrobe-item">
                            <div className="delete-wardrobe-position">
                                <button>Delete</button>
                                <span><MdDelete/></span>
                            </div>
                        </div>
                    </div>
                    <div className="wardrobe-img3">
                        <img src={skyImg3} alt="wardrobe image 3" />
                        <div className="delete-wardrobe-item">
                            <div className="delete-wardrobe-position">
                                <button>Delete</button>
                                <span><MdDelete/></span>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="display-generate-collection">
                    <div className="generated-collection-img1">
                        <img src={gcImg1} alt="generated collection image 1" />
                        <div className="delete-wardrobe-item">
                            <div className="delete-wardrobe-position">
                                <button>Delete</button>
                                <span><MdDelete/></span>
                            </div>
                        </div>
                    </div>
                    <div className="generated-collection-img2">
                        <img src={gcImg2} alt="generated collection image 2" />
                        <div className="delete-wardrobe-item">
                            <div className="delete-wardrobe-position">
                                <button>Delete</button>
                                <span><MdDelete/></span>
                            </div>
                        </div>
                    </div>
                    <div className="generated-collection-img3">
                        <img src={gcImg3} alt="generated collection image 3" />
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
            {active == 1 ? <span className='e-wardrobe-add-more'><GrAddCircle /></span>:''}
            
            <Footer />
        </div>
    );
}

export default Ewardrobe;
