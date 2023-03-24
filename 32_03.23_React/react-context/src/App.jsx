import ToolBar from './components/ToolBar.jsx'
import ThemeProvider from './providers/theme.jsx'

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <ToolBar />
      </ThemeProvider>

    </div>
  )
}

export default App
