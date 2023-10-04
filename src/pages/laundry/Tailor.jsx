import React from 'react'
import AppNavBar from '../../components/AppNavBar'
import Search from '../../components/Search'
import Mart from './Mart'
import Basemap from "./Basemap.svg";
import tailor from "./Tailor.svg";
import "./Tailor.css"
import { useNavigate } from 'react-router-dom';

const Tailor = () => {
    const navigate = useNavigate()
  return (
    <>
      <AppNavBar />
      <div className="tailor-wrapper">
        <div className="tailor-services">
          <div className="tailor-header">
            <span id="inactive" onClick={()=>navigate("/laundry")}>LAUNDRY</span>
            <span>TAILOR</span>
          </div>
          <Search />
          <div className="tailor-services">
            <Mart
              name="Tasit styles"
              address="29B Ajose Adeogun Str"
              rating="4/5"
              open="closes 6pm"
              martImage={tailor}
            />
            <Mart
              name="ABS"
              address="29B Ajose Adeogun Str"
              rating="4/5"
              open="closes 6pm"
              martImage={tailor}
            />
            <Mart
              name="Afeselo fashions"
              address="29B Ajose Adeogun Str"
              rating="4/5"
              open="closes 6pm"
              martImage={tailor}
            />
            <Mart
              name="David Sytles"
              address="29B Ajose Adeogun Str"
              rating="4/5"
              open="closes 6pm"
              martImage={tailor}
            />
          </div>
        </div>
        <div className="basemap">
          <img src={Basemap} alt="googlemap" />
        </div>
      </div>
    </>
  )
}

export default Tailor