import { useSelector } from 'react-redux';
import { selectPizzas } from '../../store/pizza/pizzasSelectors';

import PizzaBlock from '../../components/pizza-block/Pizza-block';

const Home = () => {
  const pizzasList = useSelector(selectPizzas)
  return (
    <div className='universal-padding min-h-[calc(100vh-200px)]'>

      {pizzasList.map(pizzaType => (
        <div key={pizzaType.title}>
          <h2 className='border-b-2 border-grey-400 my-4 text-2xl font-semibold'>{pizzaType.title}</h2>
          <div className='grid gap-4 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  w-full'>
            {pizzaType.pizzas.map(pizza => (
              <PizzaBlock key={pizza.name} pizza={pizza}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home;