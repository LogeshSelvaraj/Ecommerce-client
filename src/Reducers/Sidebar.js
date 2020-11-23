
const UserLinks = [
  {
    name: "My Cart",
    path: "/user/mycart",
  },
  {
    name: "Whislist",
    path: "/user/whislist",
  },
  {
    name: "My Account",
    path: "/user/myaccount",
  },
  {
    name: "My Orders",
    path: "/user/myorders",
  },
];

const AdminLinks = [
  {
    name: "New Orders",
    path: "/user/mycart",
  },
  {
    name: "Orders cancelled",
    path: "/user/whislist",
  },
  {
    name: "Orders on progress",
    path: "/user/myaccount",
  },
  {
    name: "Orders Delivered",
    path: "/user/myorders",
  },
];

function Sidebar(state = null, action) {
   
  switch (action.type) {
    case "LOGINAS_USER":
      return UserLinks ;
    case "LOGINAS_ADMIN":
      return AdminLinks;
    default:
      return state;
  }
}

export default Sidebar;
