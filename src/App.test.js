import React from 'react';
import { mount, shallow } from 'enzyme';

import App from './App';
// import Header from './components/Header';
// import MovieCard from './components/MovieCard';
// import MovieList from './components/MovieList';
// import Rating from './components/Rating';

let wrapper;

const movies = [
  {
    title: 'Movie Title 1',
    subtitle: 'Movie Subtitle 1',
    storyline: 'Movie Storyline 1',
    rating: 4.5,
    imagePath: 'images/movie_1',
  },
  {
    title: 'Movie Title 2',
    subtitle: 'Movie Subtitle 2',
    storyline: 'Movie Storyline 2',
    rating: 4.5,
    imagePath: 'images/movie_2',
  },
  {
    title: 'Movie Title 3',
    subtitle: 'Movie Subtitle 3',
    storyline: 'Movie Storyline 3',
    rating: 3,
    imagePath: 'images/movie_3',
  },
];

describe('1 - Crie um componente `<Header />`', () => {
  it('1.1 - Renderize o componente `<Header />`', () => {
    shallow(<Header />);
  });

  it('1.2 - Renderize o texto "Movie Cards Library" dentro de `<Header />`', () => {
    wrapper = shallow(<Header />);

    expect(wrapper.find('header h1').text()).toBe('Movie Cards Library');
  });
});

describe('2 - Crie um componente `<MovieList />`', () => {
  it('2.1 - Renderize o componente `<MovieList />`', () => {
    shallow(<MovieList movies={movies} />);
  });

  it('2.2 - Renderize componentes `<MovieCard />` dentro de `MovieList`', () => {
    wrapper = shallow(<MovieList movies={movies} />);

    expect(wrapper.find(MovieCard).length).toEqual(3);
  });

  it('2.3 - Passe uma key para cada `<MovieCard />` renderizado', () => {
    wrapper = mount(<MovieList movies={movies} />);
    const movieCards = wrapper.find(MovieCard);

    movieCards.forEach((movieCard, index) => {
      expect(movieCard.key()).toEqual(movies[index].title);
    });
  });
});

describe('3 - Crie um componente `<MovieCard />`', () => {
  const movie = movies[0];

  it('3.1 - Renderize o componente `<MovieCard />`', () => {
    shallow(<MovieCard movie={movie} />);
  });

  it('3.2 - Renderize a imagem do filme dentro de uma tag `img`', () => {
    wrapper = shallow(<MovieCard movie={movie} />);

    expect(wrapper.find('img').prop('src')).toEqual('images/movie_1');
  });

  it('3.3 - Renderize o título do filme dentro de uma tag `h4`', () => {
    wrapper = shallow(<MovieCard movie={movie} />);

    expect(wrapper.find('h4').text()).toBe('Movie Title 1');
  });

  it('3.4 - Renderize o subtítulo do filme dentro de uma tag `h5`', () => {
    wrapper = shallow(<MovieCard movie={movie} />);

    expect(wrapper.find('h5').text()).toBe('Movie Subtitle 1');
  });


  it('3.5 - Renderize a sinopse do filme dentro de uma tag `p`', () => {
    wrapper = shallow(<MovieCard movie={movie} />);

    expect(wrapper.find('p').text()).toBe('Movie Storyline 1');
  });

  it('3.6 - Renderize o componente `<Rating />` dentro de `<MovieCard />`', () => {
    wrapper = shallow(<MovieCard movie={movie} />);

    expect(wrapper.find('Rating').length).toEqual(1);
  });

  it('3.7 - Passe como prop para o componente `<Rating />` o atributo `rating`', () => {
    wrapper = mount(<MovieCard movie={movie} />);
    const starRating = wrapper.find(Rating);

    expect(starRating.props().rating).toEqual(4.5);
  });
});

describe('4 - Crie um componente `<Rating />`', () => {
  it('4.1 - Renderize o componente `<Rating />`', () => {
    shallow(<Rating />);
  });

  it('4.2 - Renderize a nota de um filme dentro de `Rating`', () => {
    wrapper = shallow(<Rating rating={3} />);

    expect(wrapper.find('.rating').text()).toEqual('3');
  });
});

describe('5 - Crie um componente `<App />`', () => {
  it('5.1 - Renderize `<Header />` dentro do componente `<App />`', () => {
    wrapper = shallow(<App />);

    expect(wrapper.find('Header').length).toEqual(1);
  });

  it('5.2 - Renderize `<MovieList />` dentro do componente `<App />`', () => {
    expect(wrapper.find('MovieList').length).toEqual(1);
  });
});
