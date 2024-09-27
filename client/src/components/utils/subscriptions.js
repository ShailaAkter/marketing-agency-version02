import { FaRegStar, FaStarHalfAlt, FaStar, FaCrown } from "react-icons/fa"; // Example icons

const subscriptionPlans = 
[
  // Monthly Plans
  {
    type: "Basic",
    duration: "Monthly",
    price: "Free",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Basic features included.",
    icon: <FaRegStar size={30}/>, // Regular star icon
  },
  {
    type: "Standard",
    duration: "Monthly",
    price: "$15",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Standard features with some extras.",
    icon: <FaStarHalfAlt size={30} />, // Half star icon
  },
  {
    type: "Premium",
    duration: "Monthly",
    price: "$20",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. All premium features included.",
    icon: <FaStar size={30}/>, // Full star icon
  },
  {
    type: "Deluxe",
    duration: "Monthly",
    price: "$30",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deluxe package with all features.",
    icon: <FaCrown size={30}/>, // Crown icon
  },
  // Weekly Plans
  {
    type: "Basic",
    duration: "Annual",
    price: "$300",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Basic features included.",
    icon: <FaRegStar size={30}/>, // Regular star icon
  },
  {
    type: "Standard",
    duration: "Annual",
    price: "$500",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Standard features with some extras.",
    icon: <FaStarHalfAlt size={30}/>, // Half star icon
  },
  {
    type: "Premium",
    duration: "Annual",
    price: "$700",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. All premium features included.",
    icon: <FaStar size={30}/>, // Full star icon
  },
  {
    type: "Deluxe",
    duration: "Annual",
    price: "$1000",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deluxe package with all features.",
    icon: <FaCrown size={30}/>, // Crown icon
  },
];


export default subscriptionPlans;