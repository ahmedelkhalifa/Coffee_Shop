import {
  AccessTimeOutlined,
  ArrowRight,
  ArrowRightAlt,
  LocationOnOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Location = () => {
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
        <Container maxWidth="lg" sx={{ width: "100%", height: "80%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 4,
              width: "100%",
              height: "100%",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "accent.main",
                  fontWeight: 500,
                  width: "fit-content",
                  margin: { xs: "0 auto", md: 0 },
                  position: "relative",
                  letterSpacing: "2px",
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    width: "20px",
                    height: "2px",
                    bottom: "-10px",
                    left: 0,
                    bgcolor: "accent.main",
                  },
                }}
              >
                OUR LOCATION
              </Typography>
              <Typography variant="h1" sx={{ fontSize: "48px", mt: 3 }}>
                Come visit us
              </Typography>
              <Typography
                variant="body1"
                sx={{ mt: 2, color: "text.secondary", fontWeight: 500 }}
              >
                We'd love to welcome you to our cafe.
                <br />
                Great coffee, good vibes and a space to be.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 4,
                  mt: 4,
                  borderBottom: "2px solid",
                  borderColor: "border.main",
                  pb: 3,
                }}
              >
                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    bgcolor: "rgba(139, 94, 60, 0.1)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "accent.main",
                  }}
                >
                  <LocationOnOutlined fontSize="large"></LocationOnOutlined>
                </Box>
                <Box sx={{ flex: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "accent.main",
                      letterSpacing: "2px",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    ADDRESS
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    123 Coffee Lane
                    <br />
                    Brew City, COFFEE
                    <br />
                    KKTC
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 4,
                  mt: 4,
                  borderBottom: "2px solid",
                  borderColor: "border.main",
                  pb: 3,
                }}
              >
                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    bgcolor: "rgba(139, 94, 60, 0.1)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "accent.main",
                  }}
                >
                  <AccessTimeOutlined fontSize="large"></AccessTimeOutlined>
                </Box>
                <Box sx={{ flex: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "accent.main",
                      letterSpacing: "2px",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    OPPENNING HOURS
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      Monday - Friday
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      7:00 AM - 8:00 PM
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      Saturday - Sunday
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      8:00 AM - 9:00 PM
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 4,
                  mt: 4,
                  borderBottom: "2px solid",
                  borderColor: "border.main",
                  pb: 3,
                }}
              >
                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    bgcolor: "rgba(139, 94, 60, 0.1)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "accent.main",
                  }}
                >
                  <PhoneOutlined fontSize="large"></PhoneOutlined>
                </Box>
                <Box sx={{ flex: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "accent.main",
                      letterSpacing: "2px",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    CONTACT
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    123-456-7890
                    <br />
                    hello@arccoffee.com
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                sx={{
                  mt: 4,
                  bgcolor: "accent.main",
                  width: "250px",
                  height: "50px",
                  fontWeight: 500,
                }}
                endIcon={<ArrowRightAlt />}
              >
                GET DIRECTIONS
              </Button>
            </Box>
            <Box sx={{ flex: 1, height: "100%" }}>
              <Box
                component={"iframe"}
                sx={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "20px",
                }}
                allowFullScreen
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13020.011922818807!2d33.31322408623044!3d35.33074747032144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1779359996654!5m2!1sen!2s"
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Location;
