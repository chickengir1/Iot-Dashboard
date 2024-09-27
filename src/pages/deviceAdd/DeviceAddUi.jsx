import React from "react";
import { mainContentConfig } from "@styles/layoutConfig";
import Sidebar from "@components/sidebar/SidebarContainer";
import { ServeContent } from "@styles";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
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
    borderRadius: 4,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "16px",
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
        <Box sx={styles.addButtonStyle}>
          <Typography variant="h6" textAlign={"center"} gutterBottom>
            ** 장치 등록 주의사항 **
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="디바이스 아이디와 디바이스 이름은 일치해야 합니다." />
            </ListItem>
            <ListItem>
              <ListItemText primary="디바이스 설명은 30자 이내로 입력하세요." />
            </ListItem>
            <ListItem>
              <ListItemText primary="모든 필드는 필수 입력 사항입니다." />
            </ListItem>
            <ListItem>
              <ListItemText primary="디바이스는 등록 후 수정이 불가능하니 신중히 입력하세요." />
            </ListItem>
          </List>
        </Box>
        {generateTextFields({
          formFields,
          onSubmit,
          register,
          errors,
          watch,
        })}
      </MainLayout>
      {isDesktop && <ServeContent />}
    </Layout>
  );
};

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
