import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FilterProvider } from './Contexts/FilterContext.jsx';

createRoot(document.getElementById('root')).render(
  <FilterProvider>
  <App />
</FilterProvider>
)
