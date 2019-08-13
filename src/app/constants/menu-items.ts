import { MenuItem } from "../interfaces/menu-item";

export const MenuItems: MenuItem[] = [
  { state: "categories", name: "Categories", type: "link", icon: "av_timer" },
  { state: "profile", type: "link", name: "Profile", icon: "web" },
  { state: "cart", type: "link", name: "Cart", icon: "web" }
];

export const AdminMenuItems: MenuItem[] = [
  { state: "admin", name: "Dashboard", type: "link", icon: "av_timer" },
  { state: "admin/categories", type: "link", name: "Categories", icon: "view_comfy" },
  { state: "admin/products", type: "link", name: "Products", icon: "view_comfy" },
  { state: "admin/users", type: "link", name: "Users", icon: "crop_7_5" }
];

export const MenuLayouts = {
  ADMIN: "admin",
  USER: "user"
};
