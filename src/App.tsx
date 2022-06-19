import { Body } from "./components/Body"
import { Title } from "./components/Title"
import { GlobalStyles } from "./styles/global"

function App() {
  return (
    <>
      <GlobalStyles />
      <div id="container">
        <Title />
        <Body />
      </div>
    </>
  )
}

export default App