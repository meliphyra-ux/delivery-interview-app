import { useState, useEffect, memo } from 'react';

import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';

const StyledSkeleton = styled(Skeleton)`
  margin: 10px 0;
`;

const OrderListLoader = () => {
  const [loadingElements, setLoadingElements] = useState(0);
  useEffect(() => {
    setLoadingElements(Math.floor((window.innerHeight - 150) / 68));
  }, [window.innerHeight]);

  return (
    <>
      {Array(loadingElements)
        .fill(0, 0)
        .map((_, id) => (
          <StyledSkeleton
            key={id}
            variant="rectangular"
            height={48}
          ></StyledSkeleton>
        ))}
    </>
  );
};

export const MemoizedOrderListLoader = memo(OrderListLoader);
