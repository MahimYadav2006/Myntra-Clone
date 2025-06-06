
import '../Index.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FetchItems from '../Components/FetchItems';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../Components/LoadingSpinner';


function App() {

  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
    <Header></Header>
    <FetchItems></FetchItems>
    {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet/>}
    <Footer></Footer>
    </>
  )
}

export default App
