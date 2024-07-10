import React from "react";
import {
  ArrowRight,
  Calendar,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapIcon,
  Phone,
  Twitter,
  User,
} from "lucide-react";
import { data } from "../lib/data"; // Assuming data is imported from a file

const Footer = () => {
  return (
    <footer className="">
      <div className="px-[64px] py-[100px] bg-indigo-50 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="max-w-[260px]">
          <h3 className="mb-[24px] text-2xl font-semibold">
            {data.footer[0].title}
          </h3>
          <p className="text-black/60 mb-[16px]">
            {data.footer[0].description}
          </p>
          <div className="flex space-x-2">
            {data.footer[0].icons.map((Icon, index) => (
              <Icon
                key={index}
                color="white"
                size={32}
                className="bg-indigo-300 p-2 rounded-[6px] "
              />
            ))}
          </div>
        </div>

        <div className="max-w-[260px]">
          <h3 className="mb-[24px] text-2xl ">{data.footer[1].heading}</h3>
          <ul className="">
            {data.footer[1].content.map((service, index) => (
              <li key={index} className="text-black/60 mb-[16px]">
                <ArrowRight className="stroke-indigo-400 inline" size={16} />
                <p className="inline ml-2">{service.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-[260px]">
          <h3 className="mb-[24px] text-2xl ">{data.footer[2].heading}</h3>
          <ul className="space-y-4">
            {data.footer[2].content.map((post, index) => (
              <li key={index}>
                <div className="flex space-x-4">
                  <img
                    src={post.imageUrl}
                    alt="Post"
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  <div className="flex flex-col text-sm text-black/60">
                    <div className="flex  space-x-4">
                      <div className="flex items-center space-x-2 ">
                        <Calendar size="14" className="stroke-indigo-400" />
                        <span>{post.date.content}</span>
                      </div>
                      <div className="flex items-center">
                        <User size="14" className="stroke-indigo-400" />
                        <span>{post.user.type}</span>
                      </div>
                    </div>
                    <p className="text-lg text-black/90">{post.paragraph}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-[260px]">
          <h3 className="mb-[24px] text-2xl ">{data.footer[3].heading}</h3>
          <ul className="space-y-4">
            {data.footer[3].content.map((contact, index) => (
              <li key={index}>
                {contact.text && (
                  <div className="flex  space-x-4">
                    <contact.icon size="20" className="stroke-indigo-400" />
                    <span>{contact.text}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-[64px] bg-indigo-400 flex justify-center">
        {" "}
        Made with{" "}
        <span className="inline">
          <Heart className="fill-red-600 stroke-none inline" size={14} />{" "}
        </span>
        by ..
      </div>
    </footer>
  );
};

export default Footer;
