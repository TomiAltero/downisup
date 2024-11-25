"use client";
import React from "react";
import Typography from "@material-tailwind/react";

interface ChildrenTableProps {
  onClose: () => void;
}

export default function ChildrenTable({ onClose }: ChildrenTableProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-96 relative">
        <button
          className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full p-1"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4 text-blue-900 dark:text-white">
          Ajustes
        </h2>
        <div className="mt-2 space-y-4 text-left items-center">
          <div className="flex justify-between items-center">
            <label className="block text-base font-medium text-black dark:text-white">
              Modo Oscuro
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
