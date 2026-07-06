import {
  FaClipboardList,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

export const taskConfig = {
  planned: {
    icon: <FaClipboardList />,
    text: "text-blue-600",
    hoverText: "text-blue-700",
    bg: "bg-blue-500",
    hoverBg: "hover:bg-blue-700",
    borderClr: "border-blue-500",
    focusRing: "focus:ring-blue-600",
  },

  ongoing: {
    icon: <FaSpinner />,
    text: "text-yellow-600",
    hoverText: "hover:text-yellow-700",
    bg: "bg-yellow-500",
    hoverBg: "hover:bg-yellow-700",
    borderClr: "border-yellow-500",
    focusRing: "focus:ring-yellow-600",
  },

  done: {
    icon: <FaCheckCircle />,
    text: "text-green-600",
    hoverText: "hover:text-green-700",
    bg: "bg-green-500",
    hoverBg: "hover:bg-green-700",
    borderClr: "border-green-500",
    focusRing: "focus:ring-green-600",
  },
};