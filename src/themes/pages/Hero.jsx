import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Navbar from "./../components/Navbar";
import image from "../../assets/landing.webp";
import { South } from "@mui/icons-material";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        paddingTop: "100px",
        boxSizing: "border-box",
        backgroundColor: "background.default",
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ flex: 1, px: { xs: 3, md: 10 }, py: { xs: 4, md: 0 } }}>
          <Typography
            variant="body1"
            sx={{ color: "accent.main", fontWeight: 500, mb: 2 }}
          >
            QUALITY BEANS. MINDFUL BREWS.
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: "text.primary",
              mb: 2,
              fontSize: { xs: "48px", md: "70px" },
            }}
          >
            Crafted coffee,
            <br />
            made slow.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontWeight: 500, mb: 5 }}
          >
            "A minimal café experience focused on
            <br />
            quality beans and calm spaces."
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              sx={{
                width: "200px",
                height: "50px",
                bgcolor: "accent.main",
                color: "background.default",
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              Explore Menu
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "accent.main",
                borderWidth: 2,
                color: "accent.main",
                height: "50px",
                width: "150px",
                position: "relative",
                zIndex: 1,
                transition: "0.3s ease",
                "&::after": {
                  content: '""',
                  width: "100%",
                  height: "100%",
                  backgroundColor: "accent.main",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: -1,
                  transition: "0.3s ease",
                  opacity: 0,
                },
                "&:hover::after": { opacity: 0.1 },
                "&:hover": { transform: "translateY(-2px)" },
              }}
            >
              Visit Us
            </Button>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
              mt: 6,
            }}
          >
            <South sx={{ color: "accent.main" }} />
            <Typography
              variant="body1"
              sx={{ color: "accent.main", fontWeight: 300, fontSize: "14px" }}
            >
              SCROLL TO DISCOVER
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            height: { xs: "300px", md: "100%" },
            width: "100%",
            overflow: "hidden",
            pt: { xs: 0, md: "30px" },
          }}
        >
          <Box
            component={"img"}
            src={image}
            alt="Landing"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopLeftRadius: { xs: "50px", md: "100px" },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;