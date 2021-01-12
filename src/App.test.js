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

describe('1 - Componente <Header />', () => {
  it('O componente `<Header />` é renderizado sem quebrar a aplicação', () => {
    shallow(<Header />);
  });

  it('O texto "Movie Cards Library" deverá estar dentro de uma tag `h1`, que por sua vez deve estar dentro de uma tag `header`', () => {
    wrapper = shallow(<Header />);

    expect(wrapper.find('header h1').text()).toBe('Movie Cards Library');
  });
});

describe('2 - Componente <MovieList />', () => {
  it('O componente `<MovieList />` é renderizado sem quebrar a aplicação.', () => {
    shallow(<MovieList movies={movies} />);
  });

  it('`<MovieList />`deve renderizar um componente `<MovieCard />` para cada objeto contido no array recebido na prop `movies`', () => {
    wrapper = shallow(<MovieList movies={movies} />);

    expect(wrapper.find(MovieCard).length).toEqual(3);
  });

  it('Cada `<MovieCard />` renderizado tem como `key` o título do filme`', () => {
    wrapper = mount(<MovieList movies={movies} />);
    const movieCards = wrapper.find(MovieCard);

    movieCards.forEach((movieCard, index) => {
      expect(movieCard.key()).toEqual(movies[index].title);
    });
  });
});

describe('3 - Componente <MovieCard />', () => {
  const movie = movies[0];

  it('O componente `<MovieCard />` é renderizado sem quebrar a aplicação', () => {
    shallow(<MovieCard movie={movie} />);
  });

  it('Renderiza a imagem do filme dentro de uma tag `img`', () => {
    wrapper = shallow(<MovieCard movie={movie} />);

    expect(wrapper.find('img').prop('src')).toEqual('images/movie_1');
  });

  it('Renderiza o título do filme dentro de uma tag `h4`', () => {
    wrapper = shallow(<MovieCard movie={movie} />);

    expect(wrapper.find('h4').text()).toBe('Movie Title 1');
  });

  it('Renderiza o subtítulo do filme dentro de uma tag `h5`', () => {
    wrapper = shallow(<MovieCard movie={movie} />);

    expect(wrapper.find('h5').text()).toBe('Movie Subtitle 1');
  });


  it('Renderiza a sinopse do filme dentro de uma tag `p`', () => {
    wrapper = shallow(<MovieCard movie={movie} />);

    expect(wrapper.find('p').text()).toBe('Movie Storyline 1');
  });

  it('Renderiza o componente `<Rating />` dentro de `<MovieCard />`', () => {
    wrapper = shallow(<MovieCard movie={movie} />);

    expect(wrapper.find('Rating').length).toEqual(1);
  });

  it('Passe como prop para o componente `<Rating />` o atributo `rating`', () => {
    wrapper = mount(<MovieCard movie={movie} />);
    const starRating = wrapper.find(Rating);

    expect(starRating.props().rating).toEqual(4.5);
  });
});

describe('4 - Componente <Rating />', () => {
  it('O componente `<Rating />` é renderizado sem quebrar a aplicação.', () => {
    shallow(<Rating />);
  });

  it('O componente `<Rating />` é renderizado dentro de um elemento com a classe `rating`', () => {
    wrapper = shallow(<Rating rating={3} />);

    expect(wrapper.find('.rating').text()).toEqual('3');
  });
});

describe('5 - Componente <App />', () => {
  it('Apenas um componente `<Header />` é renderizado pelo componente `<App />`', () => {
    wrapper = shallow(<App />);

    expect(wrapper.find('Header').length).toEqual(1);
  });

  it('`<App />` deve renderizar `<MovieList />`', () => {
    expect(wrapper.find('MovieList').length).toEqual(1);
  });
});
