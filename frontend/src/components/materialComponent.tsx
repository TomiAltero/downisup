'use client'; // This ensures it runs in the client

import { Alert, Spinner } from "@material-tailwind/react";

// Custom Icon for the Alert
export function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IconRojo() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    );
  }

// Custom Alert component
export function AlertCustomStyles({ message }: { message: string }) {
  return (
    <Alert
      icon={<Icon />}
      className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
    >
      {message}
    </Alert>
  );
}

export function AlertCustomStylesRojo({ message }: { message: string }) {
    return (
      <Alert
        icon={<IconRojo />}
        className="rounded-none border-l-4 border-[#c9332e] bg-red/10 font-medium text-[#c9332e]"
      >
        {message}
      </Alert>
    );
  }

// Spinner component
export function LoadingSpinner() {
  return <Spinner className="text-custom-blue" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />;
}