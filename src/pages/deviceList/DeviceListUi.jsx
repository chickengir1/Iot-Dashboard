import { Typography, Grid, Box } from "@mui/material";
import { BlueRoundedButton, ServeContent } from "@styles/index";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import UserCard from "@components/usercard/UserCardContainer";
import Sidebar from "@components/sidebar/SidebarContainer";
import DeviceItem from "@components/deviceItem/DeviceItemContainer";
import { mainContentConfig } from "@styles/layoutConfig";

const DeviceUi = ({ isDesktop, devices, handleNavigate }) => {
  const { Layout, MainLayout } = mainContentConfig(isDesktop);

  return (
    <Layout>
      <Sidebar />
      <MainLayout>
        <UserCard />
        <Box sx={{ flex: "1 1 100px", aspectRatio: "1/1" }}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            디바이스 목록
          </Typography>
          <Grid container spacing={3}>
            {devices.map((device) => (
              <Grid item key={device._id} xs={12} sm={6} md={6} lg={6}>
                <DeviceItem
                  name={device.deviceName}
                  description={device.description}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <BlueRoundedButton
          fullWidth
          endIcon={<AddCircleOutlineIcon />}
          onClick={handleNavigate}
        >
          디바이스 등록하러 가기
        </BlueRoundedButton>
      </MainLayout>
      {isDesktop && <ServeContent />}
    </Layout>
  );
};

export default DeviceUi;
