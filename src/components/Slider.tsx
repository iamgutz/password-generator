import './Slider.css'; // Include your CSS file for styling

interface SliderProps {
  minValue: number;
  maxValue: number;
  currentValue: number;
  onChange: (value: string) => void;
}

const Slider = ({ minValue, maxValue, currentValue, onChange }: SliderProps) => {
  return (
    <div>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={currentValue}
        className="slider"
        onChange={e => onChange(e.target.value)}
      />
      <div className="value">foo</div>
    </div>
  );
};

export default Slider;
