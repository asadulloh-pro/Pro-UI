import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/ui/button';
import Spiner from './components/ui/spiner';
import Tooltip from './components/ui/tooltip';

function App() {
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  useEffect(() => {
    if (loading1) {
      setTimeout(() => {
        setLoading1(false);
      }, 2000);
    }
  }, [loading1]);
  useEffect(() => {
    if (loading2) {
      setTimeout(() => {
        setLoading2(false);
      }, 2000);
    }
  }, [loading2]);
  return (
    <div className="App">
      <div className="App">
        <h2 className='title'>Button</h2>
        <Button
          loading={loading}
          onClick={() => setLoading(!loading)}
          typeEl="primary"
        >
          Primary
        </Button>
        <Button loading={loading1} onClick={() => setLoading1(!loading1)}>
          Default
        </Button>
        <Button
          loading={loading2}
          onClick={() => setLoading2(!loading2)}
          typeEl="dashed"
        >
          Dashed
        </Button>
      </div>

      <div className="App">
        <h2 className='title'>Spiner</h2>
        <Spiner className="w-[50px] h-[50px]" svgClassName="fill-primary" />
        <Spiner className="w-[50px] h-[50px]" svgClassName="fill-main" />
        <div className='p-[10px] bg-primary flex items-center justify-center'>
          <Spiner
            className="w-[50px] h-[50px]"
            svgClassName="fill-primary"
          />
        </div>
      </div>
      <div className="App">
        <h2 className='title'>Toltip</h2>
        <Tooltip tooltip="Salom">
          Salom Tooltip
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
