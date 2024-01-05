import { useEffect, useState } from 'react';
import './Slider.css'; // Include your CSS file for styling

interface SliderProps {
  minValue: number;
  maxValue: number;
  currentValue: number;
  onChange: (value: string) => void;
}

const Slider = ({ minValue, maxValue, currentValue, onChange }: SliderProps) => {
  const [progress, setProgress] = useState(0);

  const updateProgress = (value: number) => {
    const range = maxValue - minValue;
    const newProgress = ((value - minValue) / range) * 100;
    setProgress(newProgress);
  };

  const handleOnChange = (value: string) => {
    onChange(value);
    updateProgress(Number(value));
  };

  useEffect(() => {
    updateProgress(currentValue);
  });

  return (
    <div>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={currentValue}
        className="slider"
        onChange={e => handleOnChange(e.target.value)}
        style={{
          background: `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`,
        }}
      />
    </div>
  );
};

export default Slider;
