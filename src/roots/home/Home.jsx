import { useSelector } from 'react-redux';
import { selectPizzas } from '../../store/pizza/pizzasSelectors';

import PizzaCategory from '../../components/pizza-category/Pizza-category';

const Home = () => {
  const pizzasList = useSelector(selectPizzas)
  return (
    <div className='universal-padding min-h-[calc(100vh-200px)]'>
      {pizzasList.map(pizzaType => (
        <PizzaCategory key={pizzaType.title} pizzaType={pizzaType} />
      ))}
    </div>
  )
}

export default Home;