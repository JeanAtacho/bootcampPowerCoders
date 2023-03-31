import

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="36_03.30_React/jwt-react-project/src/views/Login.jsx" element={<Login />}/>
      <Route path="36_03.30_React/jwt-react-project/src/App.jsx" element={<Login />}/>
      <Route path="/*" element={<Navigate to='36_03.30_React/jwt-react-project/src/views/Login.jsx' />}/>
    </Routes>
    </>

  )
}

export default App
