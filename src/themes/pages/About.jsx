import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import about from "../../assets/about.webp";

const About = () => {
  return (
    <>
      <Box
        sx={{
          height: {
            xs: "fit-content",
            md: "100vh",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{height: "80%"}}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={8}
            sx={{ alignItems: "center", height: "100%" }}
          >
            <Box
              sx={{
                flex: 1,
                overflow: "hidden",
                borderTopRightRadius: "50px",
                borderBottomRightRadius: "50px",
                height: "100%",
              }}
            >
              <Box
                component={"img"}
                src={about}
                alt="About Us"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderBottomRightRadius: "50px",
                }}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: "center", md: "left" },
                px: { xs: 2, md: 0 }, pr: { xs: 2, md: 10, lg: 0},
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "accent.main",
                  letterSpacing: "2px",
                  fontWeight: 500,
                  position: "relative",
                  width: "fit-content",
                  margin: { xs: "0 auto", md: 0 },
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    bottom: "-20px",
                    left: 0,
                    width: "10%",
                    height: "2px",
                    bgcolor: "accent.main",
                  },
                }}
              >
                ABOUT OUR CAFE
              </Typography>
              <Stack direction={"row"}>
                <Box sx={{ flex: 1.3 }}>
                  <Typography
                    variant="h1"
                    sx={{ mt: 5, mb: 4, fontWeight: 400, fontSize: "68px" }}
                  >
                    A place to slow down
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", fontSize: "18px" }}
                  >
                    We believe great coffee does more than just wake you up - it
                    brings people together. Our cafe is a space to pause,
                    connect and enjoy the little things.
                    <br />
                    <br />
                    From carefully sourced beans to thoughtfully designed
                    spaces, every detail is made with intention
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mt: 4,
                      color: "accent.main",
                      fontSize: "28px",
                      fontWeight: 400,
                      fontFamily: "Sacramento",
                    }}
                  >
                    - The Arc Coffee Team
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mt: 1, color: "accent.main", fontWeight: 500 }}
                  >
                    Founded in 2026
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    width: "100%",
                    display: { xs: "none", lg: "block" },
                  }}
                ></Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default About;
