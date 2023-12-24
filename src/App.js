
import './App.module.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './components/MainPageScripts/MainPage/MainPage';
import EnterPage from './components/EnterPageSection/EnterPage/EnterPage';
import RegistrPage from './components/RegistrationPageSection/RegistrPage/RegistrPage';
import BiblioModules from './components/BiblioModulesSection/BiblioModulesPage/BiblioModulesPage';
import CreateModulePage from "./components/CreateModulePage/CreateModulePage";
import AllModules from './components/AllModules/AllModules';
import ModuleView from "./components/ModuleView/ModuleView";
import AddCreateCardsPage from './components/AddCreateCardsPage/AddCreateCardsPage';
import EditOneCard from "./components/EditOneCard/EditOneCard";
import SettingsPage from './components/SettingsPage/SettingsPage';


function App() {
  return (
    <BrowserRouter>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      <Routes>
        <Route path="/login" element={<EnterPage />} />
        <Route path="/AllModules" element={<AllModules/>}/>
        <Route path="/*" element={<MainPage />} />
        <Route path="/register" element={<RegistrPage />} />
        <Route path="/ModuleView/:id" element={<ModuleView/>} />
        <Route path="/AddCreateCardsPage/:id" element={<AddCreateCardsPage/>} />
        <Route path="/EditOneCard/:id" element={<EditOneCard/>}  />
        <Route path="/SettingsPage" element={<SettingsPage/>} />
        <Route path="/biblioModules" element={<BiblioModules/> } />
        <Route path="/createModulePage/:id" element={<CreateModulePage />}  />
        <Route path="/CreateModulePage" element={<CreateModulePage />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
