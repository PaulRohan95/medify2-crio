import { useState } from 'react';
import { Box, Container, Button, Stack, Typography, useMediaQuery, IconButton }  from "@mui/material";
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {

  const isMobile = useMediaQuery("(max-width: 900px)");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Box p={1} bgcolor="primary.main">
        <Typography fontSize={14} textAlign="center" color="#fff">
          The health and well-being of our patients and their health vare team will always be our priority, so we follow the best practices for cleanliness.
        </Typography>
      </Box>
    <Container maxWidth="xl">
      <Stack  direction="row" spacing={2} alignItems="center" justifyContent="space-between" py={2}>
        <Link to='/'>
          <img src={logo} alt = "medify" height={27} />
        </Link>
        <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems={{ xs: 'flex-start', md: 'center' }}
            className={[ styles.navlinks, menuOpen && styles.active ]}
            pt={{ xs: 12, md: 1 }}
            pb={{ xs: 4, md: 1 }}
            px={{ xs: 4, md: 0 }}
            >
              <Link to="/">Find Doctors</Link>
              <Link to="/search">Hospitals</Link>
              <Link to="/">Medicines</Link>
              <Link to="/">Surgeries</Link>
              <Link to="/">Software For Provider</Link>
              <Link to="/">Facilities</Link>
              <Link to="/my-bookings">
                  <Button variant="contained" disableElevation>My Bookings</Button>
              </Link>

              {isMobile && (
                <IconButton onClick={() => setMenuOpen(false)}
                sx={{ 
                  position : "absolute",
                  top : 0,
                  right : 32,
                  color : "#fff",
                }}>
                  <CloseIcon />
                </IconButton>
              )}
      </Stack>
            {isMobile && ( 
              <IconButton onClick={() => setMenuOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
        </Stack>
        </Container>
    </header>
  )
}

export default Navbar;