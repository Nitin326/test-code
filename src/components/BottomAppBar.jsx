import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Person2Icon from "@mui/icons-material/Person2";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import './Assets/appbar.css'


const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function BottomAppBar() {
  return (
    <>
      <AppBar
        style={{ background: "white" }}
        position="fixed"
        sx={{ top: "auto", bottom: 0 }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton>
            <a className="nav_link" href='/payment'><AccountBalanceIcon /></a>
          </IconButton>
          <IconButton>
            <a className="nav_link" href='/dashboard'><BarChartIcon /></a>
          </IconButton>
          <StyledFab color="#0d99ff" aria-label="add">
            <a className="nav_link" href='/addexpance'><AddIcon /></a>
          </StyledFab>
          <Box style={{ margin: '20px' }} />
          <IconButton>
            <a className="nav_link" href='/track'><BookmarkIcon /></a>
          </IconButton>
          <IconButton>
            <a className="nav_link" href='/profile'><Person2Icon /></a>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
