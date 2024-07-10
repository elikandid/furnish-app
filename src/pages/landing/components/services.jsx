import React from 'react'
import K from "../../../constants"
import {HeartHandshake} from "lucide-react"

const Services = () => {
  return (
    <div className="grid grid-cols-4 py-2 px-2 gap-x-4">
        
        {
          K.SERVICES.map(
            (service,index) => {
              return(
                <div key={index}>
                <span><HeartHandshake/></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              )
            }
          ) 
        }
    </div>
  )
};

export default Services