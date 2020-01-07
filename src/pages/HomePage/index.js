import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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

  const history = useHistory();

  const handleClick = () => {
    history.push('/countries/all');
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Search searchInputHandler={searchInputHandler} />
        <span style={{ marginTop: '2rem' }}>
          <Button onClick={handleClick}>All countries</Button>
        </span>
      </div>
      <HomeCard />
    </>
  );
};

export default HomePage;
