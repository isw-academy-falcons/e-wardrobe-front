import React, { useState } from "react";
import AppNavBar from "../../components/AppNavBar";
import "./Laundry.css";
import Search from "../../components/Search";
import Basemap from "./Basemap.svg";
import laundry from "./laundry.svg";
import Mart from "./Mart";
import { useNavigate } from "react-router-dom";

const Laundry = () => {
  const navigate = useNavigate()
  return (
    <>
      <AppNavBar />
      <div className="laundry-wrapper">
        <div className="drycleaning-services">
          <div className="laundry-header">
            <span>LAUNDRY</span>
            <span id="inactive" onClick={()=>navigate("/tailor")}>TAILOR</span>
          </div>
          <div className="drycleaning-marts">
            <Search />
            <Mart
              name="hephzibah laundry .s"
              address="29B Ajose Adeogun Str"
              rating="4/5"
              open="closes 6pm"
              martImage={laundry}
            />
            <Mart
              name="Oluwafisayo services"
              address="29B Ajose Adeogun Str"
              rating="4/5"
              open="closes 6pm"
              martImage={laundry}
            />
            <Mart
              name="Pakurumo laundries"
              address="29B Ajose Adeogun Str"
              rating="4/5"
              open="closes 6pm"
              martImage={laundry}
            />
            <Mart
              name="Wiz cleans"
              address="29B Ajose Adeogun Str"
              rating="4/5"
              open="closes 6pm"
              martImage={laundry}
            />
          </div>
        </div>
        <div className="basemap">
          <img src={Basemap} alt="googlemap" />
        </div>
      </div>
    </>
  );
};

export default Laundry;
