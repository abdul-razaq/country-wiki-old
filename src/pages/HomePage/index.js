import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header';
import Search from '../../components/Search';
import HomeCard from './HomeCard';
import Button from '../../components/Button';

import { searchCountry } from '../../store/actions';

const HomePage = () => {
  const [searchInput, setSearchInput] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCountry(searchInput));
  }, [searchInput, dispatch]);

  const searchInputHandler = searchValue => {
    setSearchInput(searchValue);
  };


  return (
    <>
      <Header />
      <Search searchInputHandler={searchInputHandler} />
      <HomeCard />
    </>
  );
};

export default HomePage;
