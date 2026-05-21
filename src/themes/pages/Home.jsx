import { Box, Typography } from "@mui/material";
import React from "react";
import Hero from "./Hero";
import Features from './Features';
import Menu from "./Menu";
import About from "./About";
import Location from "./Location";

const Home = () => {
  return (
    <>
      <Box sx={{ height: "100vh" }}>
        <Hero />
      </Box>
      <Box sx={{pt: "100px"}}>
        <Features />
      </Box>
      <Box sx={{pt: "100px"}}>
        <Menu />
      </Box>
      <Box sx={{pt: "100px"}}>
        <About />
      </Box>
      <Box sx={{pt: "100px"}}>
        <Location />
      </Box>
    </>
  );
};

export default Home;
