import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
} from "./index";
import { Fragment } from "react";

export const layoutConfig = (isDesktop) => {
  if (isDesktop) {
    return {
      Layout: DesktopEntryLayout,
      MainLayout: DesktopEntryMainLayout,
    };
  }
  return {
    Layout: MobileEntryLayout,
    MainLayout: Fragment,
  };
};
