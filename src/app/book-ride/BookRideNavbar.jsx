"use client";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { deepOrange } from "@mui/material/colors";
import {
  Box,
  AppBar,
  Avatar,
  Button,
  Drawer,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import { drawerList } from "./DrawerList";

const BookRideNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarClose = () => setSidebarOpen(false);
  const handleSidebarOpen = () => setSidebarOpen(true);

  return (
    <Box className="">
      <AppBar
        sx={{ backgroundColor: "#120E43" }}
        className=""
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ola Cab
          </Typography>
          {true ? (
            <Avatar
              className="cursor-pointer"
              sx={{ bgcolor: deepOrange[500] }}
            >
              S
            </Avatar>
          ) : (
            <Button color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={sidebarOpen} onClose={handleSidebarClose}>
        {drawerList("left")}
      </Drawer>
    </Box>
  );
};

export default BookRideNavbar;
