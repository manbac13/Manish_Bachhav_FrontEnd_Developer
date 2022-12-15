import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Banner from "./components/banner"
import SearchCompo from './components/searchCompo';
import DataGrid from './components/dataGrid';

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <SearchCompo/>
      <DataGrid/>
    </>
  );
}

export default App;
