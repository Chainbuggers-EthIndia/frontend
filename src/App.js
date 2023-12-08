import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LandingPage />
          }
        />
      </Routes>
    </div >
  )
}