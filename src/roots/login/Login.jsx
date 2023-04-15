import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom'

import AuthButton from "../../components/auth-button/Auth-button";
import { Box, Typography } from "@mui/material";
import { StyledUniversalContainer } from "../../components/building-blocks/building-blocks";

const Login = () => {
  const { user, isLoading } = useAuth0();
  const navigate = useNavigate()
  useEffect(() => {
    if(!isLoading && user){
      navigate('/')
    }
  })
  return (
    <StyledUniversalContainer className="flex items-center flex-col justify-center min-h-[calc(100vh-200px)]">
      <Typography variant="h4">Hey, you haven't login yet.</Typography>
      <Typography variant="h5">You can do it right now</Typography>
      <Box className="sketchy px-4">
        <AuthButton />
      </Box>
    </StyledUniversalContainer>
  );
};

export default Login;
