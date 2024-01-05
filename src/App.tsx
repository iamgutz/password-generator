import './App.css';
import PasswordGenerator from './PasswordGenerator';

function App() {
  return (
    <div className="bg-slate-800 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full px-3 mx-auto md:max-w-3xl">
        <PasswordGenerator />
      </div>
    </div>
  );
}

export default App;
