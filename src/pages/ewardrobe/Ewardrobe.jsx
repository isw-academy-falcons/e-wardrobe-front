import axios from 'axios';
import {MdDelete} from 'react-icons/md';
import {GrAddCircle} from 'react-icons/gr'
import React, { useEffect, useState } from 'react';

import './e-wardrobe.css';
import Login from '../../login';
import Row from "react-bootstrap/Row";
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';
import { BASE_URL } from '../../assets/baseUrl';
import AppNavBar from '../../components/AppNavBar';
import { Toast } from '../../components/ApiResponse';


const Ewardrobe = () => {
  const [active, setActive] = useState(2);
  const [uploadedClothes, setUploadedClothes] = useState([]);
  const [unsplashClothes, setUnsplashClothes] = useState([]);
  const userId = localStorage.getItem("userId");
  const accessToken = localStorage.getItem("token");

  const getUploadedClothes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/cloth/all/uploaded/${userId}`)
      setUploadedClothes(response.data);
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error
      })
    }
  };


  const getUnsplashClothes = async () => {
    try {
      const response2 = await axios.get(`${BASE_URL}/cloth/all/unsplash/${userId}`)
      setUnsplashClothes(response2.data);
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error
      })
    }
  };


  useEffect(() => {
    getUploadedClothes();
    getUnsplashClothes();
  })

  const deleteCloth = async (clothId) => {
    try {
      await axios.delete(`${BASE_URL}/cloth/delete?clothId=${clothId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      Toast.fire({
        icon: "success",
        title: "Item successfully deleted"
      })
      getUploadedClothes();
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error
      })
    }
  };

  return (
    <>
      {accessToken ?
        <>
          <div className='e-wardrobe-page'>
            <AppNavBar/>
            <h3 className='e-wardrobe-subtitle'><Logo className='logo-gallery'/>E-WARDROBE</h3>
            <section className="switch-wardrobe-generate">
              <h4 className={active === 1 ? 'active':''} onClick={() => setActive(1)}>SKYFITZZ WEB GALLERY</h4>
              <h4 className={active === 2 ? 'active':''} onClick={() => setActive(2)}>UNSPLASH COLLECTION</h4>
            </section>
            {active === 1 ?(
              <section className="display-wardrobe">
                <Row xs={1} md={3} className="g-4">
                  {uploadedClothes.map((cloth, index) => (
                    <div className="wardrobe-img1" key={`${cloth.clothId}`} style={{ height: "260px", overflow: "hidden" }}>
                      <img src={`${cloth.imageUrl}`} alt={`wardrobe ${index}`} className='e-wardrobe-img' />

                      <div className="delete-wardrobe-item">
                        <div className="delete-wardrobe-position">
                          <button onClick={() => deleteCloth(cloth.clothId)}>Delete</button>
                          <span><MdDelete/></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Row>
              </section>
            ) : (
              <section className="display-wardrobe">
                <Row xs={1} md={3} className="g-4">
                  {unsplashClothes.map((cloth, index) => (
                    <div className="wardrobe-img1" key={`${cloth.clothId}`} style={{ minHeight: "260px" }}>
                      <img src={`${cloth.imageUrl}`} alt={`wardrobe ${index}`} className='e-wardrobe-img' />

                      <div className="delete-wardrobe-item">
                        <div className="delete-wardrobe-position">
                          <button onClick={() => deleteCloth(cloth.clothId)}>Delete</button>
                          <span><MdDelete/></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Row>
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
