import { Divider, Typography } from '@mui/material';
import PizzaCard from '../pizza-card/Pizza-card';

const PizzaCategory = ({ pizzaType }) => {
  return (
    <div>
      <Typography variant='h4' sx={{
        margin: '16px 0'
      }}>
        {pizzaType.title}
      </Typography>
      <Divider />
      <div className="grid gap-4 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  w-full">
        {pizzaType.pizzas.map((pizza) => (
          <PizzaCard key={pizza.name} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaCategory;
