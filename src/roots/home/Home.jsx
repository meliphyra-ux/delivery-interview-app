import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectPizzas } from '../../store/pizza/pizzasSelectors';
import { fetchPizzas } from '../../store/pizza/pizzasSlice';

import PizzaCategory from '../../components/pizza-category/Pizza-category';
import BannerCarousel from '../../components/banner-carousel/Banner-carousel';

import { StyledUniversalContainer } from '../../components/building-blocks/building-blocks';

const Home = () => {
  const dispatch = useDispatch()
  const pizzasList = useSelector(selectPizzas);
  useEffect(() => {
    dispatch(fetchPizzas)
  })
  return (
    <StyledUniversalContainer className="min-h-[calc(100vh-200px)] flex flex-col items-center">
      <BannerCarousel />
      {pizzasList.map((pizzaType) => (
        <PizzaCategory key={pizzaType.title} pizzaType={pizzaType} />
      ))}
    </StyledUniversalContainer>
  );
};

export default Home;
