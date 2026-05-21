import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import {
  AccessTimeOutlined,
  EmailOutlined,
  Facebook,
  Instagram,
  LocationOnOutlined,
  PhoneOutlined,
  Pinterest,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{
              pb: 5,
              borderBottom: "2px solid",
              borderColor: "border.main",
            }}
          >
            <Box
              sx={{
                flex: 1,
                borderRight: { xs: "none", md: "2px solid #E7DED6" },
                borderBottom: { xs: "2px solid #E7DED6", md: "none" },
                pr: 4,
                pb: { xs: 4, md: 0 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h1" sx={{ fontSize: "48px" }}>
                ARC
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "accent.main", fontSize: "24px" }}
              >
                COFFEE
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                  mt: 2,
                  fontSize: "14px",
                }}
              >
                Specialty coffee thoughtfully sourced and brewed with care.
                <br />A space to slow down and savor the moment.
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                borderRight: { xs: "none", md: "2px solid #E7DED6" },
                borderBottom: { xs: "2px solid #E7DED6", md: "none" },
                display: "flex",
                justifyContent: "center",
                py: { xs: 4, md: 0 },
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "accent.main",
                    fontSize: "18px",
                    fontWeight: "500",
                    width: "fit-content",
                    margin: { xs: "0 auto", md: 0 },
                    position: "relative",
                    "&::after": {
                      content: "''",
                      position: "absolute",
                      width: "20px",
                      height: "2px",
                      bgcolor: "accent.main",
                      bottom: "-10px",
                      left: 0,
                    },
                  }}
                >
                  NAVIGATION
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", fontWeight: 500, mt: 4 }}
                >
                  Home
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", fontWeight: 500, mt: 2 }}
                >
                  Menu
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", fontWeight: 500, mt: 2 }}
                >
                  About
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", fontWeight: 500, mt: 2 }}
                >
                  Location
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", fontWeight: 500, mt: 2 }}
                >
                  Blog
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1.5,
                borderRight: { xs: "none", md: "2px solid #E7DED6" },
                borderBottom: { xs: "2px solid #E7DED6", md: "none" },
                display: "flex",
                justifyContent: "center",
                py: { xs: 4, md: 0 },
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "accent.main",
                    fontSize: "18px",
                    fontWeight: "500",
                    width: "fit-content",
                    margin: { xs: "0 auto", md: 0 },
                    position: "relative",
                    "&::after": {
                      content: "''",
                      position: "absolute",
                      width: "20px",
                      height: "2px",
                      bgcolor: "accent.main",
                      bottom: "-10px",
                      left: 0,
                    },
                  }}
                >
                  CONTACT
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", mt: 4, gap: 2 }}
                >
                  <Box sx={{ color: "accent.main" }}>
                    <LocationOnOutlined sx={{ fontSize: "30px" }} />
                  </Box>
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
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", mt: 4, gap: 2 }}
                >
                  <Box sx={{ color: "accent.main" }}>
                    <AccessTimeOutlined sx={{ fontSize: "30px" }} />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    Mon - Fri: 7:00 AM - 8:00 PM
                    <br />
                    Sat - Sun: 8:00 AM - 9:00 PM
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", mt: 4, gap: 2 }}
                >
                  <Box sx={{ color: "accent.main" }}>
                    <EmailOutlined sx={{ fontSize: "30px" }} />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    hello@arccoffee.com
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", mt: 4, gap: 2 }}
                >
                  <Box sx={{ color: "accent.main" }}>
                    <PhoneOutlined sx={{ fontSize: "30px" }} />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    123-456-7890
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                pt: { xs: 4, md: 0 },
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "accent.main",
                    fontSize: "18px",
                    fontWeight: "500",
                    width: "fit-content",
                    margin: { xs: "0 auto", md: 0 },
                    position: "relative",
                    "&::after": {
                      content: "''",
                      position: "absolute",
                      width: "20px",
                      height: "2px",
                      bgcolor: "accent.main",
                      bottom: "-10px",
                      left: 0,
                    },
                  }}
                >
                  FOLLOW US
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", mt: 4, gap: 2 }}
                >
                  <Box sx={{ color: "accent.main" }}>
                    <Instagram sx={{ fontSize: "30px" }} />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    Instagram
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", mt: 4, gap: 2 }}
                >
                  <Box sx={{ color: "accent.main" }}>
                    <Facebook sx={{ fontSize: "30px" }} />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    Facebook
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", mt: 4, gap: 2 }}
                >
                  <Box sx={{ color: "accent.main" }}>
                    <Twitter sx={{ fontSize: "30px" }} />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    Twitter
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", mt: 4, gap: 2 }}
                >
                  <Box sx={{ color: "accent.main" }}>
                    <Pinterest sx={{ fontSize: "30px" }} />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    Pinterest
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Stack>
          <Box
            sx={{
              py: 5,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="body1" sx={{ color: "text.primary" }}>
              &copy; {new Date().getFullYear()} ARC Coffee. All rights reserved.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", display: "inline" }}
            >
              Built by{" "}
              <Typography
                variant="body1"
                sx={{
                  color: "accent.main",
                  fontWeight: 600,
                  display: "inline-block",
                }}
              >
                ArcStack
              </Typography>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
