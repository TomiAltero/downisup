import React from "react";
import Link from "next/link";

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
    <div className="rounded-sm bg-white px-7.5 py-6">
      <div className="flex flex-col h-full justify-between">
        <div className="text-center mb-4">
          {icon && <div className="mb-2 h-16 w-16">{icon}</div>}
          <h4 className="text-lg font-bold text-black dark:text-white">
            {date}
          </h4>
          <span className="text-sm font-medium">{category}</span>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            <span className="text-sm text-blue-900">
              <button
                onClick={onViewMoreClick}
                className="text-blue-900 font-bold hover:underline"
              >
                Ver más
              </button>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistoryCard;

