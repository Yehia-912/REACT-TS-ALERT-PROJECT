/* eslint-disable no-empty-pattern */
import { X } from "lucide-react";
import { ReactNode } from "react";
import "./style.scss";
import { AlertTypes } from "../../../types";
interface IProps {
  type: AlertTypes;
  title: string;
  icon: ReactNode;
  description?: string;
  children?: ReactNode;
}

const Alert = ({ title, icon, description, type, children }: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        {icon}
        <h4>{title}</h4>
        <X className="close" size={20} />
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
