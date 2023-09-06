import React, { useState, useEffect } from 'react';
import "./gallery.css";
import AppNavBar from '../../components/AppNavBar';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import { BsFilterLeft, BsSearch } from 'react-icons/bs';
import { BiSolidDownload } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;


    useEffect(() => {
        fetchImages();
    }, [page, searchTerm]); // Fetch images when the page or search term changes

    const fetchImages = () => {
        fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${searchTerm}&per_page=7&client_id=${apiKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(`${searchTerm}`,data)
                setImages(data.results); // Update images with the results array
            })
            .catch(error => {
                console.error("Error fetching images:", error);
            });
    };

    const handleSearch = () => {
        setPage(1);
        fetchImages();
    };

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    return (
        <div className='gallery-page'>
            <AppNavBar />
            <h3 className='gallery-subtitle'><Logo className='logo-gallery'/> GALLERY</h3>
            <section className='search-field'>
                <div className='search-input'>
                    <input
                        type='search'
                        placeholder='Search Dresses, tops, blouses etc'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className='search-icon' onClick={handleSearch}><BsSearch /></span>
                </div>
                <span className='filter-icon'><BsFilterLeft /></span>
                <span className='filter-text'>filter</span>
            </section>
            <section className='gallery-display'>
            {images.map((image, index) => (
    <div key={index} className={`grid-item-container-${index + 1}`}>
        <a href={image.urls.full} target="_blank" rel="noopener noreferrer" download>
            <img src={image.urls.regular} alt={`Gallery Img ${index + 1}`} className={`img${index + 1}`} />
        </a>
        <div className={`hover-effect-${index + 1}`}>
            <div className="hover-effect-container">
                <div className='hover-add-collection'>
                    <div className="hover-position-add-collection">
                        <button>Add to collection</button>
                        <span> <AiOutlinePlus /> </span>
                    </div>
                </div>
                <div className='hover-add-download'>
                    <div className="hover-position-add-download">
                        <a href={image.urls.full} target="_blank" rel="noopener noreferrer" download>
                            <button>Download</button>
                        </a>
                        <span> <BiSolidDownload /> </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
))}

            </section>
            <button className='load-more-gallery' onClick={handleLoadMore}>Load More</button>
            <Footer />
        </div>
    );
}

export default Gallery;
