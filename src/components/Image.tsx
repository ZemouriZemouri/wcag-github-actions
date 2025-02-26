import React from "react"
import myImage from "./qa.png"

export const Image: React.FC<{ alt?: string; role?: string }> = ({
  alt,
  role,
}) => <img src={myImage} role={role} alt={alt} width="600px" />
