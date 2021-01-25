import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from '../components/MovieCard';
import Rating from '../components/Rating';

describe('4 - Crie um componente `<Rating />`', () => {
  const rating = 4.5;
  let wrapper;
  it('Renderize o componente `<Rating />`', () => {
    shallow(<Rating />);
  });

  it('Renderize a nota de um filme dentro de `Rating`', () => {
    wrapper = shallow(<Rating rating={ 3 } />);
    expect(wrapper.find('.rating').text()).toEqual('3');
  });

  it('Renderize o componente `<Rating />` dentro de `<MovieCard />`', () => {
    wrapper = shallow(<MovieCard movie={ movie } />);
    expect(wrapper.find('Rating').length).toEqual(1);
  });

  it('Passe como prop para o componente `<Rating />` o atributo `rating`', () => {
    wrapper = mount(<MovieCard movie={ movie } />);
    const starRating = wrapper.find(Rating);
    expect(starRating.props().rating).toEqual(rating);
  });
});
