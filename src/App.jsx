import Container from "./container/Container";
import { SidebarProvider } from "./context/SidebarContext";

function App() {
  return (
    <SidebarProvider>
      <div className="app">
        <Container />
      </div>
    </SidebarProvider>
  );
}

export default App;
