import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import Navbar from './components/Navbar';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/add" element={<AddTask />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
