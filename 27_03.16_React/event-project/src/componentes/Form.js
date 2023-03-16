function Form({ search, inputRef}) {
    return             <form action="#" onSubmit={search}>
    <input type="text" name='search' onChange={search} ref={inputRef} placeholder='Que superheroe quieres buscar?' />
    <button type="submit">Buscar</button>
</form>
}

export default Form