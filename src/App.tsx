import { Outlet } from 'react-router-dom';

import './assets/fonts/font.css';

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
