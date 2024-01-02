// components/ProgressBar.js
const ProgressBar = ({ percentage, color }) => {
  return (
    <div className="progress-bar w-full h-full bg-white text-white rounded-md  overflow-hidden">
      <div className={`${color} h-full`} style={{ width: `${percentage}%` }}></div>
    </div>
  );
};
export default ProgressBar;
