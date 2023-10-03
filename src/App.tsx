import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/ui/button';

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
      <Button
        loading={loading}
        onClick={() => setLoading(!loading)}
        typeEl="primary"
      >
        Primary
      </Button>
      <Button
        loading={loading1}
        onClick={() => setLoading1(!loading1)}
      >
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
  );
}

export default App;
