import { CalcContextProvider } from '../../context'
import './index.scss'
import { Display } from './Display'
import { Menu } from './Menu'



function App() {
  return (
    <CalcContextProvider>
      <main className="App App--grid-1" >
        <Display />
        <Menu />
      </main>
    </CalcContextProvider>
  )
}

export default App
