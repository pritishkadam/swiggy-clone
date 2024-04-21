import React from 'react';
import { useSelector } from 'react-redux';
import {locationConfig} from './components/SideBar/locationConfig';
import LocationSideBar from './components/SideBar/LocationSideBar';
import SignInSideBar from './components/SideBar/SignInSideBar';
import HeaderComponent from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const AppLayout = () => {
  const isLocationOpen = useSelector((store) => store.location.isLocationOpen);
  const isLoginOpen = useSelector((store) => store.login.isLoginOpen);
  const locations = locationConfig();

  return (
    <>
      {isLocationOpen && <LocationSideBar locations={locations} />}
      {isLoginOpen && <SignInSideBar />}
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
