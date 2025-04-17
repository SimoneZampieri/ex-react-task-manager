import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import DefLayout from "./layouts/DefLayout";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <DefLayout>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/add" element={<AddTask />} />
          </Routes>
        </DefLayout>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
