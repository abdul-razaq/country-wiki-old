import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import Header from '../../components/Header';
import Search from '../../components/Search';
import Card from '../../components/Card';


const HomePage = () => {

  const search = useParams();
  console.log(search);
  return (
    <>
      <Header />
      <Search />
      <Card />
    </>
  );
};

export default HomePage;
