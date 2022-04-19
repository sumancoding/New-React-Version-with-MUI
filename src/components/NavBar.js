import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          TSUMAN
        </Typography>
        <FacebookIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search ..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={6} color="error">
            <NotificationsActiveIcon />
          </Badge>
          <Avatar
            alt="Suman"
            src="https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_960_720.jpg"
            sx={{ width: 30, height: 30 }}
          />
        </Icons>
        <UserBox>
          <Avatar
            alt="Suman"
            src="https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_960_720.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant="span">Suman</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
