import React from 'react';
import "./gallery.css";
import Img1 from "../../assets/images/gallery/img1.png";
import Img2 from "../../assets/images/gallery/img2.png";
import Img3 from "../../assets/images/gallery/img3.png";
import Img4 from "../../assets/images/gallery/img4.png";
import Img5 from "../../assets/images/gallery/img5.png";
import Img6 from "../../assets/images/gallery/img6.png";
import Img7 from "../../assets/images/gallery/img7.png";
import AppNavBar from '../../components/AppNavBar';
import Footer from '../../components/Footer';
import {BsFilterLeft, BsSearch} from 'react-icons/bs';
import {BiSolidDownload} from 'react-icons/bi';
import {AiOutlinePlus} from 'react-icons/ai';

const Gallery = () => {
    return (
        <div className='gallery-page'>
            <AppNavBar/>
            <h3 className='gallery-subtitle'>LOGO GALLERY</h3>
            <section className='search-field'>
                <div className='search-input'>
                    <input type='search' placeholder='Search Dresses, tops, blouses etc' />
                    <span className='search-icon'><BsSearch/></span>
                </div>
                <span className='filter-icon'><BsFilterLeft/></span>
                <span className='filter-text'>filter</span>
            </section>
            <section className='gallery-display'>
                <div className="grid-item-container-1">
                    <img src={Img1} alt="Gallery Img 1" className='img1'/>
                    <div className="hover-effect-1">
                        <div className="hover-effect-container">
                            <div className='hover-add-collection'>
                                <div className="hover-position-add-collection">
                                    <button>Add to collection</button>
                                    <span> <AiOutlinePlus/> </span>
                                </div>
                            </div>
                            <div className='hover-add-download'>
                                <div className="hover-position-add-download">
                                    <button>Download</button>
                                    <span> <BiSolidDownload/> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item-container-2">
                    <img src={Img2} alt="Gallery Img 2" className='img2'/>
                    <div className="hover-effect-2">
                        <div className="hover-effect-container">
                            <div className='hover-add-collection'>
                                <div className="hover-position-add-collection">
                                    <button>Add to collection</button>
                                    <span> <AiOutlinePlus/> </span>
                                </div>
                            </div>
                            <div className='hover-add-download'>
                                <div className="hover-position-add-download">
                                    <button>Download</button>
                                    <span> <BiSolidDownload/> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item-container-3">
                    <img src={Img3} alt="Gallery Img 3" className='img3'/>
                    <div className="hover-effect-3">
                        <div className="hover-effect-container">
                            <div className='hover-add-collection'>
                                <div className="hover-position-add-collection">
                                    <button>Add to collection</button>
                                    <span> <AiOutlinePlus/> </span>
                                </div>
                            </div>
                            <div className='hover-add-download'>
                                <div className="hover-position-add-download">
                                    <button>Download</button>
                                    <span> <BiSolidDownload/> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item-container-4">
                    <img src={Img4} alt="Gallery Img 4" className='img4'/>
                    <div className="hover-effect-4">
                        <div className="hover-effect-container">
                            <div className='hover-add-collection'>
                                <div className="hover-position-add-collection">
                                    <button>Add to collection</button>
                                    <span> <AiOutlinePlus/> </span>
                                </div>
                            </div>
                            <div className='hover-add-download'>
                                <div className="hover-position-add-download">
                                    <button>Download</button>
                                    <span> <BiSolidDownload/> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item-container-5">
                    <img src={Img5} alt="Gallery Img 5" className='img5'/>
                    <div className="hover-effect-5">
                        <div className="hover-effect-container">
                            <div className='hover-add-collection'>
                                <div className="hover-position-add-collection">
                                    <button>Add to collection</button>
                                    <span> <AiOutlinePlus/> </span>
                                </div>
                            </div>
                            <div className='hover-add-download'>
                                <div className="hover-position-add-download">
                                    <button>Download</button>
                                    <span> <BiSolidDownload/> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item-container-6">
                    <img src={Img6} alt="Gallery Img 6" className='img6'/>
                    <div className="hover-effect-6">
                        <div className="hover-effect-container">
                            <div className='hover-add-collection'>
                                <div className="hover-position-add-collection">
                                    <button>Add to collection</button>
                                    <span> <AiOutlinePlus/> </span>
                                </div>
                            </div>
                            <div className='hover-add-download'>
                                <div className="hover-position-add-download">
                                    <button>Download</button>
                                    <span> <BiSolidDownload/> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item-container-7">
                    <img src={Img7} alt="Gallery Img 7" className='img7'/>
                    <div className="hover-effect-7">
                        <div className="hover-effect-container">
                            <div className='hover-add-collection'>
                                <div className="hover-position-add-collection">
                                    <button>Add to collection</button>
                                    <span> <AiOutlinePlus/> </span>
                                </div>
                            </div>
                            <div className='hover-add-download'>
                                <div className="hover-position-add-download">
                                    <button>Download</button>
                                    <span> <BiSolidDownload/> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <button className='load-more-gallery'>Load More</button>
            
            <Footer />
        </div>
    );
}

export default Gallery;
