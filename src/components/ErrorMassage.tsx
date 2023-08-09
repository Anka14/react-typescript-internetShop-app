import React from "react";

interface ErrorMassageProps {
  error: string;
}

const ErrorMassage = ({ error }: ErrorMassageProps) => {
  return (
    <div>
      <p className="text-center text-red-600">{error}</p>
    </div>
  );
};

export default ErrorMassage;
