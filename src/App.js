import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './routes/AppRouter';
import { UserContext } from './contexts/UserContext';
import { useState } from 'react';


function App() {

   const [user, setUser] = useState(null);



   return (
      <UserContext.Provider value={{ user, setUser }}>
         <AppRouter />
      </UserContext.Provider>
   );
}

export default App;
