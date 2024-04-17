import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import { SavePage, SettingPage, WeatherPage } from "./_root/pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<WeatherPage />} />
          <Route path="/favorite" element={<SavePage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
