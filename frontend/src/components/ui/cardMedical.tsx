import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

interface MedicalHistoryCardProps {
  category: string;
  date: string;
  onViewMoreClick: () => void;
  icon?: React.ReactNode;
}

const MedicalHistoryCard: React.FC<MedicalHistoryCardProps> = ({
  category,
  date,
  onViewMoreClick,
  icon,
}) => {
  return (
    <Card className="mt-6 w-96 relative">
      <CardBody>
        {/* Ícono en la parte superior derecha */}
        {icon && (
          <div className="absolute top-4 right-4 h-8 w-8 text-blue-900">
            {icon}
          </div>
        )}
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {category}
        </Typography>
        <Typography>{date}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          size="sm"
          variant="text"
          onClick={onViewMoreClick}
          className="flex items-center gap-2 text-blue-900"
        >
          Ver más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MedicalHistoryCard;
