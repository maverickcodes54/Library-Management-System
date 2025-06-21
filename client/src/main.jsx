import { createRoot } from 'react-dom/client'
import './index.css'
import './flags.css';
import App from './App.jsx'
// navigation
import { BrowserRouter } from 'react-router-dom'
// boot strap packages
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
// prime react packages
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';                // Core styles
import 'primeicons/primeicons.css';                              // Icons


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
    
)
