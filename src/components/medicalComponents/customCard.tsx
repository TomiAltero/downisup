import { Card as MaterialCard, CardProps as MaterialCardProps } from "@material-tailwind/react";

type CustomCardProps = Partial<MaterialCardProps> & {
  className?: string;
  children: React.ReactNode;
};

const Card: React.FC<CustomCardProps> = ({ className, children, ...rest }) => {
  return (
    <MaterialCard className={className} {...rest}>
      {children}
    </MaterialCard>
  );
};

export default Card;
