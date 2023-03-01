import { useCallback, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { addPizzaToCart } from '../../store/cart/cartActions';

const PizzaBlock = ({ pizza }) => {
  const { isLoading, user } = useAuth0();
  const { image, name, variants } = pizza;
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  const handleAddPizza = useCallback(() => {
    if (!user) {
      alert('Login to take pizza to cart');
      return;
    }
    addPizzaToCart({
      ...selectedVariant,
      image,
      name,
      counter: 1,
      id: name + selectedVariant.size,
    });
  }, []);

  return (
    <div className="flex gap-2 flex-col p-2 sketchy">
      <img
        className="rounded-md border-2 border-black"
        src={image}
        alt={name}
      />
      <h2 className="text-xl font-semibold">Pizza {name}</h2>
      <div className="pizza-information-flex  border-y-2 border-black py-4">
        {variants.map((variant) => (
          <div key={variant.size}>
            <input
              className="mr-4"
              type="radio"
              onChange={() => setSelectedVariant(variant)}
              checked={selectedVariant.size === variant.size}
            />
            <label>{variant.size}</label>
          </div>
        ))}
      </div>
      <div className="pizza-information-flex">
        <p>{selectedVariant.price}</p>
        <span>{selectedVariant.weight}g</span>
      </div>
      <button
        className="cursor-pointer hover:scale-[1.25] duration-300 mb-4 text-lg"
        onClick={handleAddPizza}
        disabled={isLoading}
      >
        Add to cart
      </button>
    </div>
  );
};

export default PizzaBlock;
