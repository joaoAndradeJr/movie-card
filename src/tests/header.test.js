import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('1 - Crie um componente `<Header />`', () => {
  let wrapper;

  it('Renderize o componente `<Header />`', () => {
    shallow(<Header />);
  });

  it('Renderize o texto "Movie Cards Library" dentro de `<Header />`', () => {
    wrapper = shallow(<Header />);
    expect(wrapper.find('header h1').text()).toBe('Movie Cards Library');
  });
});
