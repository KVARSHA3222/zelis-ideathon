import React, { useState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone';
const Header = () => {
  const [value, setValue] = useState();

  return (
    <Router>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <EmojiObjectsTwoToneIcon sx={{ transform: "scale(2)" }} />
          <Typography sx={{ fontSize: "2rem", paddingLeft: "1%" }}>
                IDEATHON
              </Typography>
          
              <Tabs
                sx={{ marginRight: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Ideas" component={Link} to="/ideas" />
                <Tab label="My Idea" />
                <Tab label="Submit Idea" component={Link} to="/submit"/>
                <Tab label="Show Ideas Visually" />
              </Tabs>
              <Tab label="Logout" />
          
        </Toolbar>
      </AppBar>
    </Router>
      
  );
};

export default Header;