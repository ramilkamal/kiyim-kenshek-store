import {
  FaShippingFast,
  FaShieldAlt,
  FaTags,
  FaCreditCard,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <FaShippingFast />,
    title: "Tez yetkazib berish",
    info: "24 soat ichida jo'natiladi",
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: "Brend kafolati",
    info: "100% original mahsulotlar",
  },
  {
    id: 3,
    icon: <FaTags />,
    title: "Qiziqarli takliflar",
    info: "Barcha oldindan to'langan buyurtmalar bo'yicha",
  },
  {
    id: 4,
    icon: <FaCreditCard />,
    title: "Xavfsiz to'lovlar",
    info: "SSL / Xavfsiz sertifikat",
  },
];

export default servicesData;
