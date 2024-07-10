import { Handshake } from "lucide-react";
import { data } from "../../../lib/data";

const Services = () => {
  return (
    <div className="grid gap-2 grid-cols-4 mx-2">
      {data.services.map((service, index) => (
        <div key={index} className={` p-10 space-y-`}>
          <div
            className={` p-4 rounded-full w-fit`}
            style={{ background: service.iconBgColor }}
          >
            <Handshake />
          </div>
          <h3 className="text-lg">{service.heading}</h3>
          <p className="text-gray-600">{service.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
