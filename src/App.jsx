import ItemListContainer from "./componets/ItemListContainer"
import NavBar from "./componets/Navbar"



function App() {

  return (

    <><div>
      <NavBar />
    </div>
    <div>
    <ItemListContainer />
    </div>
    <div>
      <propGreeting greeting="En mantenimiento"/>
    </div>
    </>
  )
}

export default App
