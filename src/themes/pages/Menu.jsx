import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import MenuCard from "../components/MenuCard";

const Menu = () => {
  const menuItems = [
    {
      name: "Espresso",
      description: "Rich, bold and smooth. A pure classic.",
      price: "2.50",
    },
    {
      name: "Cappuccino",
      description: "Perfect balance of espresso, steamed milk, and foam.",
      price: "3.75",
    },
    {
      name: "Flat White",
      description: "Smooth and velvety with a strong coffee flavor.",
      price: "3.75",
    },
    {
      name: "Cold Brew",
      description: "Slow brewed for 12 hours. Crisp, smooth and refreshing.",
      price: "4.25",
    },
    {
      name: "Latte",
      description: "Espresso with steamed milk and a light layer of foam.",
      price: "3.75",
    },
    {
      name: "Pour Over",
      description:
        "Clean, bright and aromatic. Brewed to highlight every note.",
      price: "4.50",
    },
  ];
  return (
    <>
      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "22px",
                fontWeight: 500,
                textAlign: "center",
                color: "accent.main",
                letterSpacing: "2px",
              }}
            >
              Menu Preview
            </Typography>
            <Typography
              variant="h1"
              sx={{
                textAlign: "center",
                fontSize: "60px",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "10%",
                  height: "2px",
                  bgcolor: "accent.main",
                  zIndex: 1,
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "20px",
                  height: "20px",
                  bgcolor: "background.default",
                  borderRadius: "50%",
                  zIndex: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    bgcolor: "accent.main",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              Popular Picks
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "text.secondary", mt: 5 }}
            >
              Our most loved coffees, crafted with care using the finest beans
            </Typography>
          </Box>
          <Grid container sx={{ mt: 7, border: "2px solid", borderColor: "border.main"}}>
            {menuItems.map((item, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={index}
                sx={{
                  borderBottom: "2px solid",
                  borderRight: "2px solid",
                  borderColor: "border.main",
                }}
              >
                <MenuCard
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  number={String(index + 1).padStart(2, "0")}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Menu;
