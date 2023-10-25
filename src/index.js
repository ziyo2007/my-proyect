import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './Context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


// position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%,-50%) rotate(-200deg);
//         width: 160%;
//         height: 130%;
//         background-image: conic-gradient(#ff00bb,#ff00bb 90deg,transparent 130deg,transparent 180deg,#4530ff 180deg,#4530ff 180deg,transparent 310deg,transparent 360deg,);
//         transition: transform 0.9s;
// &:hover::before{
//   transform: translate(-50%,-50%) rotate(-100deg);
  
// }
// position: absolute;
//         background-color: #000;
//         height: 242px;
//         width: 192px;
//         left: 50%;
//         top: 50%;
//         transform: translate(-50%,-50%);