import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectCountry } from '../../store/actions';


const SelectedCountry = () => {

  const dispatch = useDispatch();
  const { country } = useParams();

  const selectedCountry = useSelector(state => state.selectedCountry);

  console.log(selectedCountry);

  useEffect(() => {
    dispatch(selectCountry(country));
    console.log('Component did mount');
  }, []);

  const loadingSpinner = <p>Loading...</p>

  return (selectedCountry.length === 0 ? loadingSpinner : 'country exists');
}

export default SelectedCountry;
