import './App.css'
import { CakeView } from './feature/cake/CakeView'
import { IcecreamView } from './feature/icecream/icecreamView'
import { UserView } from './feature/user/UserView'

function App() {
 

  return (
    <>
      <div>
        <CakeView />
        <IcecreamView />
        <UserView />
      </div>
       
    </>
  )
}

export default App
