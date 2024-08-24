import { Box, Typography, Card, CardContent } from "@mui/material";

const WeatherUi = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <Typography variant="subtitle1">날씨 위젯 ui</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherUi;
