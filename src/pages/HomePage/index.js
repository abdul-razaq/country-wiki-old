import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import Search from '../../components/Search';
import Card from '../../components/Card';

import { searchCountry } from '../../store/actions';

const HomePage = () => {
  const [searchInput, setSearchInput] = useState('');

  const [searchedCountry, setSearchedCountry] = useState({});

  const dispatch = useDispatch();

  const country = useSelector(state => state.searchedCountry);

  const searchInputHandler = searchValue => {
    setSearchInput(searchValue);
    dispatch(searchCountry(searchInput));
    setSearchedCountry(country);
    console.log(searchedCountry);
  };


  return (
    <>
      <Header />
      <Search searchInputHandler={searchInputHandler} />
      <Card />
    </>
  );
};

export default HomePage;
