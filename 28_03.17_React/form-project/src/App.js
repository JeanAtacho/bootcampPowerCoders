import { useState } from 'react'

function App() {
  const [state, setState] = useState({})


  const submitHandler = (e) => {
    e.preventDefault()
    console.log(state)
  }

  const inputChangeHandler = ({ target }) => {
    const { name, value } = target

    const fieldData = {
      value: value
    }

    if (!value.trim()) {
      fieldData['error'] = `El campo ${name} esta vacio`
    }

    setState({ ...state, [name]: value })
    console.log(state)
  }

  // true -> truthy
  // false -> falsy

  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="firstName">Nombre</label>
        <input type="text" name="firtName" id="firstName" onChange={inputChangeHandler} />
        {state.firstName && state.firstName.error && <span class="error">{state.firstName.error}</span>}
      </p>

      <p>
        <label htmlFor="lastName">Apellido</label>
        <input type="text" name="lastName" id="lastName" onChange={inputChangeHandler} />
        {state.lastName && state.lastName.error && <span class="error">{state.lastName.error}</span>}
      </p>

      <p>
        <label htmlFor="email">Email</label>
        <input 
        type="text" 
        name="email" 
        id="email"
        onChange={inputChangeHandler} 
        />
      </p>

      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={inputChangeHandler} />
      </p>

      <p>
        <label htmlFor="password">Confirmacion del password</label>
        <input type="password" name="password_confirm" id="password" onChange={inputChangeHandler} />
      </p>

      <button type="submit">Crear Usuario</button>
    </form>
  );
}

export default App;
