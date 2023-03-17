import { useState } from 'React'

function App() {
  // const [state, setState] = useState ({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',

  // })

  const [email, setEmail] = useState('')

  const emailChangeHandler = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  return (
    <form>

      <p>
        <label htmlFor="">Nombre</label>
        <input type="text" name="firtName"/>
      </p>

      <p>
        <label htmlFor="">Apellido</label>
        <input type="text" name="lastName"/>
      </p>

      <p>
        <label htmlFor="">Email</label>
        <input 
        type="text" 
        name="email" 
        value={email} 
        onChange={emailChangeHandler}
        />
      </p>

      <p>
        <label htmlFor="">Password</label>
        <input type="text" name="password"/>
      </p>

      <p>
        <label htmlFor="">Confirmacion del password</label>
        <input type="text" name="password_confirm"/>
      </p>

      <button type="submit">Crear Usuario</button>
    </form>
  );
}

export default App;
