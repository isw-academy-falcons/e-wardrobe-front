import {  BsSearch } from 'react-icons/bs';
import { BiSolidDownload } from 'react-icons/bi';
import { AiOutlinePlus,AiOutlineCheck } from 'react-icons/ai';
import React, { useState, useEffect, useCallback } from 'react';

import "./gallery.css";
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';
import { BASE_URL } from '../../assets/baseUrl';
import AppNavBar from '../../components/AppNavBar';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [addedToCollection, setAddedToCollection] = useState({}); // Track added images

    const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

    const saveCollection = async (imgUrl) => {
        const res = await fetch(`${BASE_URL}/saveUserChoice?userId=${localStorage.getItem("userId")}&pictureUrl=${imgUrl}`,{
            method: 'post',
            headers: {"Content-Type": "application/json"}
        })
        console.log(res);
    }

    const handleAddToCollection = (imgUrl, index) => {
        saveCollection(imgUrl);
        setAddedToCollection((prevState) => ({
            ...prevState,
            [index]: true, // Set the image at 'index' to be added
        }));
    };

    
    const fetchImages = useCallback(() => {
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
    }, [apiKey, page, searchTerm]);

    const handleSearch = () => {
        setPage(1);
        setAddedToCollection({});
        fetchImages();
    };

    const handleLoadMore = () => {
        setPage(page + 1);
        setAddedToCollection({});
    };

		useEffect(() => {
			setAddedToCollection({});
			fetchImages();
		}, [fetchImages, page, searchTerm]); // Fetch images when the page or search term changes

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
                                    {addedToCollection[index] ? (
                                            <button className="added-to-collection" disabled>Added to collection</button>
                                            
                                        ) : (
                                            <button onClick={() => handleAddToCollection(image.urls.regular, index)}>
                                                Add to collection
                                            </button>
                                        )}   
                                                                           
                                    <span>{addedToCollection[index] ? <AiOutlineCheck /> : <AiOutlinePlus />}</span>
                                    </div>
                                </div>
                                <div className='hover-add-download'>
                                    <div className="hover-position-add-download">
                                        <a href={image.urls.full} target="_blank" rel="noopener noreferrer" download>
                                            <button download >Download</button>
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
