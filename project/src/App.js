
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';
import Footer from './Pages/Footer';


function App() {
// const [data,setData] = useState([])

//  const FetchData = ()=>{
//   axios.get(`https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/bikes`)
//   .then((res)=>{
//     console.log(res.data)
//     setData(res.data);
//   })
//   .catch((res)=>{
//     console.log(res)
//   })
//  }
  
// useEffect(()=>{
//   FetchData()
// },[])


  return (
    <div className="App">
   <Navbar />
   <AllRoutes />
   <Footer />
    </div>
  );
}

export default App;
