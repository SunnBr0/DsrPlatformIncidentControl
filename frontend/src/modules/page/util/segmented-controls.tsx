import React from 'react';
import '../../../style/page/segmented-controls/segmented-controls.scss';
import { useId } from 'react';
type SegmentedControlsProps = {
  options: string[];
};
export const SegmentedControls: React.FC<SegmentedControlsProps> = ({ options = [] }) => {
  const idPrefix = useId();
  return (
    <div className="segmented-controls">
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

