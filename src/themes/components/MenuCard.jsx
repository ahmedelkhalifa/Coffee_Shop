import { Box, Typography } from "@mui/material";
import React from "react";

const MenuCard = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          gap: 3,
        //   borderRight: "1px solid",
        //   borderBottom: "1px solid",
        //   borderColor: "border.main",
          p: 3
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, color: "accent.main" }}
          >
            {props.number}
          </Typography>
        </Box>
        <Box sx={{ flex: 5 }}>
          <Typography
            variant="h1"
            sx={{ fontSize: "24px", color: "text.primary" }}
          >
            {props.name || "Espresso"}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mt: 2,
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {props.description ||
              "A rich and intense coffee made by forcing hot water through finely-ground coffee beans."}
          </Typography>
        </Box>
        <Box sx={{ flex: 2 }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, color: "accent.main" }}
          >
            ${props.price || "2.00"}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MenuCard;
