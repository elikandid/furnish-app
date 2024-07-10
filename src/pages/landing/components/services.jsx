import { Handshake } from "lucide-react";
import { data } from "../../../lib/data";

const Services = () => {
  return (
    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4  m-2">
      {data.services.map((service, index) => (
        <div
          key={index}
          className={` p-10 space-y-2`}
          style={{ background: service.bgColor }}
        >
          <div
            className={` p-4 rounded-full w-fit`}
            style={{ background: service.accent }}
          >
            <Handshake />
          </div>
          <h3 className="text-xl">{service.heading}</h3>
          <p className="text-black/40 text-lg">{service.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
