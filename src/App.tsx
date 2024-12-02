import '../src/styles/global.css'
import '../src/styles/index.css'
import { Button } from './components/ui/button'

function App() {
  return (
    <div className="flex w-full justify-center items-center h-screen flex-col">
      <h1> Shadcn UI Button</h1>

      <Button>Button</Button>
    </div>
  )
}

export default App
