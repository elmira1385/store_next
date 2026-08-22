import React from "react";

export type TEvidenceItem = {
  children: React.ReactNode;
  title: string;
  description: string;
};
const ASampleForEvidence = ({
  children,
  title,
  description,
}: TEvidenceItem) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {children}
      <p className="text-3xl font-bold">{title}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ASampleForEvidence;
