import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Divider,
  Box,
  Paper,
  Grid
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
interface ButtonProps {
  label: string;
  onClick(): any;
}

const useStyles = makeStyles({
  mainContainer: {
    flexGrow: 1,
    paddingTop: "3rem",
    display: "flex",
    flexDirection: "column",
  },
  pageTitle: {
    paddingLeft: "2rem",
    flexGrow: 1,
  },
  divider: {
    marginTop: "1rem",
    marginBottom: "2rem",
  },
});

interface Props {
  children: JSX.Element
}

export const CodeLayoutContainer = ({ children }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" sx={{bgcolor: "#f0f0f0"}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="h1">
            EDUGATOR
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};
