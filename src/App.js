import "./App.css";
import Book from "./components/Book";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Book />
      </Layout>
    </div>
  );
}

export default App;
