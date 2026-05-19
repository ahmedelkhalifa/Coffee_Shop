import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        height: "100px",
        backgroundColor: "background.default",
        display: "flex",
        alignItems: "center",
        px: 5,
        borderColor: "border.main",
        justifyContent: "space-between",
        width: "100%",
        zIndex: 1000
      }}
    >
      <Typography variant="h6" color="text.primary" sx={{ fontWeight: 400, fontFamily: "Inter", letterSpacing: 3 }}>
        ARC COFFEE
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{ fontWeight: 500, cursor: "pointer", mx: 2,
            position: "relative",
            "&::after": {
                content: '""',
                display: "block",
                width: "7px",
                height: "7px",
                backgroundColor: "accent.main",
                borderRadius: "50%",
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)"
            }
          }}
        >
          Home
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{ fontWeight: 500, cursor: "pointer", mx: 2 }}
        >
          Menu
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{ fontWeight: 500, cursor: "pointer", mx: 2 }}
        >
          About
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{ fontWeight: 500, cursor: "pointer", mx: 2 }}
        >
          Locations
        </Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{
          borderColor: "accent.main",
          width: "200px",
          height: "50px",
          color: "text.primary",
          borderWidth: 2,
          position: "relative",
          zIndex: 1,
          transition: "0.3s ease",
          "&::after": {
            content: '""',
            width: "0%",
            height: "100%",
            backgroundColor: "accent.main",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            transition: "0.3s ease"
          },
          "&:hover::after": {
            width: "100%",
          },
          "&:hover": {
            color: "background.default",
            boxShadow: "0 4px 15px rgba(139, 94, 60, 0.3)",
          }
        }}
      >
        Order Coffee
      </Button>
    </Box>
  );
};

export default Navbar;
