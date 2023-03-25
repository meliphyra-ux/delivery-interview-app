import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

import { addPizzaToCart } from '../../store/cart/cartActions';
import { toggleModal } from '../../store/modal/modalActions';

import styled from '@emotion/styled';
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

const StyledCard = styled(Card)`
  & {
    img {
      transition: all 1s ease;
    }
    div {
      overflow: hidden;
    }
  }
  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;

const PizzaCard = ({ pizza }) => {
  const { isLoading, user } = useAuth0();
  const dispatch = useDispatch();
  const { image, name, variants } = pizza;
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  const handleAddPizza = useCallback(() => {
    if (!user) {
      dispatch(
        toggleModal(
          'To add pizza to your cart, please, login into your account'
        )
      );
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
        <StyledCard className="flex gap-2 flex-col p-2 sketchy">
          <div>
            <CardMedia component="img" image={image}></CardMedia>
          </div>
          <Typography variant="h5">Pizza {name}</Typography>
          <Divider />
          <RadioGroup row className="pizza-information-flex items-center">
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
        </StyledCard>
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
