import { useSelector } from 'react-redux';
import { selectPizzas } from '../../store/pizza/pizzasSelectors';

import PizzaCategory from '../../components/pizza-category/Pizza-category';
import BannerCarousel from '../../components/banner-carousel/Banner-carousel';

const Home = () => {
  const pizzasList = useSelector(selectPizzas)
  return (
    <div className='universal-padding min-h-[calc(100vh-200px)]'>
      <BannerCarousel />
      {pizzasList.map(pizzaType => (
        <PizzaCategory key={pizzaType.title} pizzaType={pizzaType} />
      ))}
    </div>
  )
}

export default Home;