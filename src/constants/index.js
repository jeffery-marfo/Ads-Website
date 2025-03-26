import {
  FileIcon,
  Home,
  PlusIcon,
  Settings,
  Settings2Icon,
  SettingsIcon,
  SquarePen,
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
      name: "Update Ad",
      Path: "/dashboard/update-ad",
      icon: SquarePen,
    },

    {
      name: "Profile",
      Path: "/dashboard/profile",
      icon: User,
    },
    {
      name: "Settings",
      Path: "/dashboard/settings",
      icon: Settings2Icon,
    },
  ],
};
