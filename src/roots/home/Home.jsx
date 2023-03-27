import { useSelector } from 'react-redux';
import { selectPizzas } from '../../store/pizza/pizzasSelectors';

import PizzaCategory from '../../components/pizza-category/Pizza-category';
import BannerCarousel from '../../components/banner-carousel/Banner-carousel';

import { StyledUniversalContainer } from '../../components/building-blocks/building-blocks';

const Home = () => {
  const pizzasList = useSelector(selectPizzas);
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
