import {
  FileIcon,
  Home,
  PlusIcon,
  Settings,
  Settings2Icon,
  SettingsIcon,
  User,
} from "lucide-react";
export default {
  NAVLINKS: [
    {
      name: "Overview",
      Path: "/dashboard",
      icon: Home,
    },

    {
      name: "Create Ads",
      Path: "/dashboard/Create-ad",
      icon: PlusIcon,
    },
    {
      name: "Vendor Ads",
      Path: "/dashboard/ads",
      icon: FileIcon,
    },
    {
      name: "Profile",
      Path: "/dashboard/ads",
      icon: User,
    },
    {
      name: "Settings",
      Path: "/dashboard/ads",
      icon: Settings2Icon,
    },
  ],
};
