import { Menu } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          height: "130px",
          backgroundColor: "background.default",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          px: 5,
          borderColor: "border.main",
          justifyContent: "space-between",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Typography
          variant="h6"
          color="text.primary"
          sx={{ fontWeight: 400, fontFamily: "Inter", letterSpacing: 3 }}
        >
          ARC COFFEE
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{
              fontWeight: 500,
              cursor: "pointer",
              mx: 2,
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
                transform: "translateX(-50%)",
              },
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
              transition: "0.3s ease",
            },
            "&:hover::after": {
              width: "100%",
            },
            "&:hover": {
              color: "background.default",
              boxShadow: "0 4px 15px rgba(139, 94, 60, 0.3)",
            },
          }}
        >
          Order Coffee
        </Button>
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          height: "100px",
          backgroundColor: "background.default",
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          px: 5,
          borderColor: "border.main",
          justifyContent: "space-between",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Typography
          variant="h6"
          color="text.primary"
          sx={{ fontWeight: 400, fontFamily: "Inter", letterSpacing: 3 }}
        >
          ARC COFFEE
        </Typography>
        <IconButton
          onClick={() => {
            setOpen(true);
          }}
        >
          <Menu sx={{ color: "text.primary" }}></Menu>
        </IconButton>
      </Box>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box sx={{ height: "100%", p: 5, bgcolor: "background.default" }}>
          <Stack sx={{ alignItems: "center" }}>
            <Typography
              variant="h6"
              color="text.primary"
              sx={{ fontWeight: 400, fontFamily: "Inter", letterSpacing: 3 }}
            >
              ARC COFFEE
            </Typography>
            <Divider
              sx={{
                borderWidth: 2,
                borderColor: "border.main",
                width: "100%",
                mt: 2,
              }}
            />
            <Box sx={{mt: 4, display: "flex", flexDirection: "column", gap: 2, alignItems: "center"}}>
              <Typography
                variant="body1"
                color="accent.main"
                sx={{ fontWeight: 700, cursor: "pointer", mx: 2 }}
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
                width: "100%",
                height: "50px",
                color: "text.primary",
                borderWidth: 2,
                position: "relative",
                zIndex: 1,
                transition: "0.3s ease",
                mt: 4,
                "&::after": {
                  content: '""',
                  width: "0%",
                  height: "100%",
                  backgroundColor: "accent.main",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: -1,
                  transition: "0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                },
                "&:hover": {
                  color: "background.default",
                  boxShadow: "0 4px 15px rgba(139, 94, 60, 0.3)",
                },
              }}
            >
              Order Coffee
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
