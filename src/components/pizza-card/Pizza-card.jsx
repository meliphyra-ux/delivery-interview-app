import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { addPizzaToCart } from '../../store/cart/cartActions';
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Skeleton,
  Typography,
} from '@mui/material';
import { toggleModal } from '../../store/modal/modalActions';

const PizzaCard = ({ pizza }) => {
  const { isLoading, user } = useAuth0();
  const dispatch = useDispatch();
  const { image, name, variants } = pizza;
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  const handleAddPizza = useCallback(() => {
    if (!user) {
      dispatch(toggleModal('To add pizza to your cart, please, login into your account'))
      return;
    }
    dispatch(
      addPizzaToCart({
        id: name + selectedVariant.size,
        counter: 1,
        selectedVariant,
        image,
        name,
      })
    );
  }, [user, selectedVariant]);
  return (
    <>
      {!isLoading ? (
        <Card className="flex gap-2 flex-col p-2 sketchy">
          <CardMedia component="img" image={image}></CardMedia>
          <Typography variant="h5">Pizza {name}</Typography>
          <Divider />
          <RadioGroup row className="pizza-information-flex">
            {variants.map((variant) => (
              <FormControlLabel
                key={variant.size}
                checked={variant.size === selectedVariant.size}
                control={<Radio onClick={() => setSelectedVariant(variant)} />}
                label={variant.size}
              />
            ))}
          </RadioGroup>
          <Divider />
          <Box className="pizza-information-flex">
            <Typography variant="h6">{selectedVariant.price}</Typography>
            <Typography variant="h6">{selectedVariant.weight}g</Typography>
          </Box>
          <Button
            sx={{
              color: 'black',
              border: '2px solid black',
            }}
            onClick={handleAddPizza}
          >
            Add to cart
          </Button>
        </Card>
      ) : (
        <Box>
          <Skeleton variant="rounded" height={275} />
          <Skeleton height={100} />
          <Skeleton height={35} />
        </Box>
      )}
    </>
  );
};

export default PizzaCard;
