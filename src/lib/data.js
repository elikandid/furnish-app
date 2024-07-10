import {
  Calendar,
  Facebook,
  Instagram,
  Mail,
  MapIcon,
  Phone,
  Twitter,
  TwitterIcon,
  User,
} from "lucide-react";
import img_2 from "../assets/images/image_2.jpg.webp";
import img_3 from "../assets/images/image_3.jpg.webp";

export const data = {
  services: [
    {
      heading: "Amazing Deals",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
      bgColor: "#f5ebeb",
      accent: "#cb9696",
    },
    {
      heading: "Quality Furniture",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
      bgColor: "#dcebdd",
      accent: "#8bbd8e",
    },
    {
      heading: "Modern Design",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
      bgColor: "#f5efd8",
      accent: "#d1b54a",
    },
    {
      heading: "Best Support",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
      bgColor: "#f4e6d8",
      accent: "#d29a61",
    },
  ],
  footer: [
    {
      title: "Furnish",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      icons: [TwitterIcon, Facebook, Instagram],
    },
    {
      heading: "Services",
      content: [
        { text: "Amazing Deals" },
        { text: "Quality Furniture" },
        { text: "Modern Design" },
        { text: "Best Support" },
      ],
    },
    {
      heading: "Recent Posts",
      content: [
        {
          imageUrl: img_2,
          paragraph: "Shop the Look Cottage Country Living Room",
          date: { content: new Date().toDateString(), icon: Calendar },
          user: {
            type: "Admin",
            icon: User,
          },
        },
        {
          imageUrl: img_3,
          paragraph: "Shop the Look Cottage Country Living Room",
          date: { content: new Date().toDateString(), icon: Calendar },
          user: {
            type: "Admin",
            icon: User,
          },
        },
      ],
    },
    {
      heading: "Have a Question?",
      content: [
        {
          text: "203 Fake St. Mountain View, San Francisco, California, USA",
          icon: MapIcon,
        },
        { text: "+2 392 3929 210", icon: Phone },
        { text: "info@yourdomain.com", icon: Mail },
      ],
    },
  ],
};
