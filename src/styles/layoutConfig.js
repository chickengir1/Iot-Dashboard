import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
  MobileLayout,
  DesktopLayout,
  MainLayout,
  BackGround,
} from "./index";
import { Fragment } from "react";

export const layoutConfig = (isDesktop) => {
  if (isDesktop) {
    return {
      BackGround: BackGround,
      Layout: DesktopEntryLayout,
      MainLayout: DesktopEntryMainLayout,
    };
  }
  return {
    BackGround: Fragment,
    Layout: MobileEntryLayout,
    MainLayout: Fragment,
  };
};
export const mainContentConfig = (isDesktop) => {
  if (isDesktop) {
    return {
      Layout: DesktopLayout,
      MainLayout: MainLayout,
    };
  }
  return {
    Layout: MobileLayout,
    MainLayout: Fragment,
  };
};
