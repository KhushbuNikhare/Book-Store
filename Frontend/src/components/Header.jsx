import React, { useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar position="sticky" sx={{ backgroundColor: "#232F3D" }}>
        <Toolbar>
          <Typography>
            <LibraryBooksIcon />
          </Typography>
          <Tabs
            sx={{ mx: "auto" }}
            indicatorColor="secondary"
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/payment" label="Buy Books" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
