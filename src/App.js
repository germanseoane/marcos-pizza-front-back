import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Navigator from "./navigation/Navigator";

function App() {
  return (
    <AuthProvider>
      <Navigator></Navigator>
    </AuthProvider>
  );
}

export default App;
