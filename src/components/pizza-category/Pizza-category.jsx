import PizzaCard from '../pizza-card/Pizza-card';

const PizzaCategory = ({ pizzaType }) => {
  return (
    <div>
      <h2 className="border-b-2 border-grey-400 my-4 text-2xl font-semibold">
        {pizzaType.title}
      </h2>
      <div className="grid gap-4 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  w-full">
        {pizzaType.pizzas.map((pizza) => (
          <PizzaCard key={pizza.name} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaCategory;
