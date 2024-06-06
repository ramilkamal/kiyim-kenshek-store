import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const footMenu = [
  {
    id: 1,
    title: "Yordam",
    menu: [
      {
        id: 1,
        link: "Tez-tez so'raladigan savollar",
        path: "/",
      },
      {
        id: 2,
        link: "Buyurtmani kuzatish",
        path: "/",
      },
      {
        id: 3,
        link: "Buyurtmani bekor qilish",
        path: "/",
      },
      {
        id: 4,
        link: "Buyurtmani qaytarish",
        path: "/",
      },
      {
        id: 5,
        link: "Kafolat haqida ma'lumot",
        path: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Siyosat",
    menu: [
      {
        id: 1,
        link: "Qaytarish siyosati",
        path: "/",
      },
      {
        id: 2,
        link: "Xavfsizlik",
        path: "/",
      },
      {
        id: 3,
        link: "Sayt xaritasi",
        path: "/",
      },
      {
        id: 4,
        link: "Maxfiylik siyosati",
        path: "/",
      },
      {
        id: 5,
        link: "Foydalanish shartlari",
        path: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Kompaniya",
    menu: [
      {
        id: 1,
        link: "Biz haqimizda",
        path: "/",
      },
      {
        id: 2,
        link: "Biz bilan bog'lanish",
        path: "/",
      },
      {
        id: 3,
        link: "Xizmat ko'rsatish markazlari",
        path: "/",
      },
      {
        id: 4,
        link: "Karyera",
        path: "/",
      },
      {
        id: 5,
        link: "Filiallar",
        path: "/",
      },
    ],
  },
];

export const footSocial = [
  {
    id: 1,
    icon: <FaFacebookF />,
    path: "/",
  },
  {
    id: 2,
    icon: <FaTwitter />,
    path: "/",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    path: "/",
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
    path: "/",
  },
];
