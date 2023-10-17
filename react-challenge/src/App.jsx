import "./components/style.css";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import data from "./data/data.json";





function App() {
  


  return (
    <div>
      <Navbar />
      <div className="container">
      {data.map((element, index) => (
          <div key={index}>
           < CardList
              image={element.image}
              name={element.title}
              price={element.price}
            />
      
          </div>
        ))}

      </div>
     
    


      <Footer />
    </div>
  );
}

export default App;
