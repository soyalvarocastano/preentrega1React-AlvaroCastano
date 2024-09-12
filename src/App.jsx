import ItemListContainer from "./componets/ItemListContainer"
import NavBar from "./componets/Navbar"
import PropGreeting from "./componets/propGreeting"

function App() {

  return (

    <><div>
      <NavBar />
    </div>
    <div>
    <ItemListContainer />
    </div>
    <div>
      <PropGreeting greeting="En mantenimiento"/>
    </div>
    </>
  )
}

export default App
