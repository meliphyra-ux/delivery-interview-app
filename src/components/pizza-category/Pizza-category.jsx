import PizzaCard from '../pizza-card/Pizza-card';

import { Divider, Typography } from '@mui/material';

const PizzaCategory = ({ pizzaType }) => {
  return (
    <div>
      <Typography
        variant="h4"
        sx={{
          marginTop: '16px',
        }}
      >
        {pizzaType.title}
      </Typography>
      <Divider
        sx={{
          marginBottom: '16px',
        }}
      />
      <div className="grid gap-4 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  w-full">
        {pizzaType.pizzas.map((pizza) => (
          <PizzaCard key={pizza.name} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaCategory;
