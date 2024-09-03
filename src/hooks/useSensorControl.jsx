import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SensorButton from "@components/sensorButton/SensorButtonContainer";

const useSensorControl = () => {
  const sensorControls = [
    { action: "led", label: "빛 조절" },
    { action: "motor", label: "온도 조절" },
    { action: "pump", label: "물 주기" },
    { action: "servo", label: "비료 주기" },
  ];

  const SensorButtonGroup = () => (
    <Box>
      <Grid
        container
        sx={{ justifyContent: "space-between", margin: "0 auto" }}
      >
        {sensorControls.map((data) => (
          <Grid item xs={6} sm={6} md={6} lg={3} key={data.label}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  mb: 2,
                  padding: "8px 10px",
                  fontWeight: "bold",
                  borderRadius: 2,
                  backgroundColor: "#fff",
                  boxShadow: 1,
                }}
              >
                {data.label}
              </Typography>
              <SensorButton action={data.action} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return SensorButtonGroup;
};

export default useSensorControl;
