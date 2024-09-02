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
