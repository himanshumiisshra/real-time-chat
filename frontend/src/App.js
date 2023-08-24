

import {UserContextProvider} from "./UserContext";
import Routes from "./Routes";

function App() {
  
  return (
    <>
    {/* <h1 className="bg-red-600">test</h1> */}

    <UserContextProvider>
      <Routes />
    </UserContextProvider>
    </>
 
  )
}

export default App