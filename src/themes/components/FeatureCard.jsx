import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const FeatureCard = (props) => {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          p: 5,
          border: "2px solid",
          borderColor: "border.main",
          height: "100%",
          width: "100%",
          bgcolor: "background.paper",
          borderRadius: "16px",
          transition: "0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          },
        }}
      >
        <Stack spacing={5} sx={{ alignItems: "center" }}>
          <Box
            sx={{
              width: "130px",
              height: "130px",
              bgcolor: "rgba(139, 94, 60, 0.2)",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "accent.main",
            }}
          >
            {props.icon}
          </Box>
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: "28px",
                textAlign: "center",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "30%",
                  height: "2px",
                  bgcolor: "accent.main",
                },
              }}
            >
              {props.title || "Feature Title"}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "text.secondary" }}
            >
              {props.description ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </>
  );
};

export default FeatureCard;
