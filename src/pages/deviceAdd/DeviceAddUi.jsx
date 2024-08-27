import React from "react";
import { mainContentConfig } from "@styles/layoutConfig";
import Sidebar from "@components/sidebar/SidebarContainer";
import { ServeContent } from "@styles";
import { Card, CardContent } from "@mui/material";

import UserCard from "@components/usercard/UserCardContainer";
import { generateTextFields } from "@utils/generateFields";

const styles = {
  addDeviceContainer: {
    display: "flex",
    minHeight: "75px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    boxShadow: 2,
    marginBottom: 2,
    gap: 2,
  },
  circleIcon: {
    color: "#64B8FF",
    backgroundColor: "#fff",
    borderRadius: "50%",
    padding: 1,
  },
  inputUiStyle: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  addButtonStyle: {
    minHeight: "75px",
    marginTop: 2,
  },
};

const AddDeviceForm = ({
  isDesktop,
  onSubmit,
  register,
  errors,
  watch,
  formFields,
}) => {
  const { Layout, MainLayout } = mainContentConfig(isDesktop);

  return (
    <Layout>
      <Sidebar />
      <MainLayout>
        <UserCard />
        {generateTextFields({
          formFields,
          onSubmit,
          register,
          errors,
          watch,
        })}
        <Card sx={styles.addButtonStyle}>
          <CardContent>장치 등록 주의사항</CardContent>
        </Card>
      </MainLayout>
      {isDesktop && <ServeContent />}
    </Layout>
  );
};

// const AddDeviceSection = () => (
//   <>
//     <Box sx={styles.addDeviceContainer}>
//       <WifiIcon style={{ fontSize: 50, ...styles.circleIcon }} />
//       <Typography variant="body1">
//         장치 찾기
//         <IconButton color="primary"></IconButton>
//       </Typography>
//     </Box>
//     <Box sx={styles.addDeviceContainer}>
//       <Badge
//         overlap="circular"
//         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//         badgeContent={
//           <IconButton color="primary">
//             <AddCircleOutlineIcon style={styles.circleIcon} />
//           </IconButton>
//         }
//       >
//         <Avatar sx={{ width: 50, height: 50 }} alt="Device icon" />
//       </Badge>
//       <Typography variant="body1">장치 이미지 등록하기</Typography>
//     </Box>
//   </>
// );

// const ContentSection = () => (
//   <>
//     <UserCard />
//     <Box sx={{ flex: "1 1 100px", aspectRatio: "1/1" }}>
//       <AddDeviceSection />
//       <Box sx={styles.inputUiStyle}>
//         <TextField
//           label="장치 이름 등록하기"
//           placeholder="name"
//           variant="outlined"
//         />
//         <TextField
//           label="장치 설명 등록하기"
//           placeholder="description"
//           variant="outlined"
//         />
//       </Box>
//       <Card sx={styles.addButtonStyle}>
//         <CardContent>장치 등록 주의사항</CardContent>
//       </Card>
//     </Box>
//     <BlueRoundedButton fullWidth endIcon={<AddCircleOutlineIcon />}>
//       디바이스 추가하기
//     </BlueRoundedButton>
//   </>
// );

const DeviceAddUi = ({ isDesktop, fields, onSubmit, combined }) => {
  return (
    <AddDeviceForm
      isDesktop={isDesktop}
      formFields={fields}
      onSubmit={onSubmit}
      register={combined.register}
      errors={combined.formState.errors}
      watch={combined.watch}
    />
  );
};

export default DeviceAddUi;
