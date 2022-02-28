import React, { FC } from 'react';

export interface StepProps {
  label: string;
  step: string;
  active?: boolean;
}

const Step: FC<StepProps> = ({ label, step, active = false }) => {
  return (
    <div className={`inline-flex items-center gap-2 ${active && 'font-bold'}`}>
      <span
        className={`flex min-h-[2rem] min-w-[2rem] items-center justify-center rounded-full p-1 text-center ${
          active ? 'bg-orange-500 text-white' : 'bg-gray-500 text-black'
        }`}
      >
        <span>{step}</span>
      </span>
      <span>{label}</span>
    </div>
  );
};

export default React.memo(Step);
