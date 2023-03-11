import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { display } from "@mui/system";

const drawerWidth = 240;
const navItems = [
  {
    value: "/",
    title: "Home",
  },
  {
    value: "income",
    title: "Income",
  },
  {
    value: "expense",
    title: "Expense",
  },
];

export default function Appbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          textDecoration: "none",
          my: 2,
          color:'#000',
          display:'block'
        }}
        component={Link}
        to="/"
      >
        Expense Tracker
      </Typography>
      <Typography
        component={Link}
        to="/"
        variant="h6"
        sx={{
          flexGrow: 1,
          display: { xs: "none", sm: "block" },
          textDecoration: "none",
          color: "#fff",
          my: 2,
        }}
      >
        Expense Tracker
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              to={item.value}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
              color: "#fff",
            }}
          >
            Expense Tracker
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "10px" }}>
            {navItems.map((item) => (
              <Button sx={styleBtn} component={Link} to={item.value}>
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

// style
const styleBtn = {
  border: "1px solid #fff",
  color: "#fff",
  // background: "#fff",
  "&:hover": {
    color: "primary.main",
    background: "#fff",
  },
};
