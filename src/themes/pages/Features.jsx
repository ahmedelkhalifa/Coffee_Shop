import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FeatureCard from "./../components/FeatureCard";
import { CiCoffeeBean } from "react-icons/ci";
import { ChairOutlined, CoffeeMaker, CoffeeMakerOutlined } from "@mui/icons-material";

const Features = () => {
  return (
    <Box sx={{ height: { xs: "fit-content", md: "100vh" }}}>
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "22px",
                color: "accent.main",
                fontWeight: 500,
                letterSpacing: "2px",
                position: "relative",
                textAlign: "center",
                width: "fit-content",
                maxWidth: "50%",
                margin: "0 auto",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "50px",
                  height: "2px",
                  backgroundColor: "accent.main",
                  right: "-80px",
                  top: "50%",
                  transform: "translateY(-50%)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "50px",
                  height: "2px",
                  backgroundColor: "accent.main",
                  left: "-80px",
                  top: "50%",
                  transform: "translateY(-50%)",
                },
              }}
            >
              WHAT MAKES US SPECIAL
            </Typography>
            <Grid container spacing={4} sx={{ mt: 5 }}>
              <Grid item size={{ xs: 12, md: 4 }}>
                <FeatureCard
                  title="Speciality Beans"
                  icon={<CiCoffeeBean fontSize={64} />}
                  description="We source the finest beans from sustainable farms around the world, roasted to perfection."
                />
              </Grid>
              <Grid item size={{ xs: 12, md: 4 }}>
                <FeatureCard
                  title="Freshly Brewed Daily"
                  icon={<CoffeeMakerOutlined sx={{fontSize: "64px"}}/>}
                  description="Every cup is brewed with care, using percise techniques to bring out the best flavors."
                />
              </Grid>
              <Grid item size={{ xs: 12, md: 4 }}>
                <FeatureCard
                  title="Calm Workspace"
                  icon={<ChairOutlined sx={{fontSize: "64px"}}/>}
                  description="Designed for comfort and focus. A peaceful space to relax, work or connect."
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
