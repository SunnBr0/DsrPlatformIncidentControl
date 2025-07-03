import React from 'react';
import { useId } from 'react';
type SegmentedControlsProps = {
  options: string[];
  className?: string;
};
export const SegmentedControls: React.FC<SegmentedControlsProps> = ({
  options = [],
  className = 'segmented-controls',
}) => {
  const idPrefix = useId();
  return (
    <div className={className}>
      {options.map((item, index) => (
        <React.Fragment key={index}>
          <input
            id={`${idPrefix}-${index}`}
            name={idPrefix}
            type="radio"
            defaultChecked={index === 0}
          />
          <label htmlFor={`${idPrefix}-${index}`}>{item}</label>
        </React.Fragment>
      ))}
    </div>
  );
};
