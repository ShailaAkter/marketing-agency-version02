
import { MdDashboard, MdInsertChart, MdPeopleAlt, MdReceipt} from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";


  
  const dashboardMenu = 
  [
    {
      label: "Dashboard",
      icon: <MdDashboard size={20}/>, 
      path: "/dashboard",
    },
    {
      label: "Profile",
      icon: <FaUserCog size={20}/>,
      path: "/dashboard/profile",
    },
    {
      label: "Team",
      icon: <MdPeopleAlt  size={20}/>,
      path: "/dashboard/team-members",
    },
    {
      label: "Subscriptions",
      icon: <MdFeaturedPlayList  size={20}/>,
      path: "/dashboard/subscriptions",
    },
    {
      label: "Invoice",
      icon: <MdReceipt size={20}/>,
      path: "/dashboard/invoice",
    },
  ];
  
  export default dashboardMenu;
  