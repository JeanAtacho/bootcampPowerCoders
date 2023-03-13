function myButton() {
    const [ liked, setLiked ] = React.useState(0)

    if (liked) {
        return 'React me esta gustando'
    }

    return <button onClick={() => setLiked(true)}>Pulsame</button>

    // return React.createElement(
    //     'button',
    //     {  onClick: () => setLiked(true)},
    //     'Pulsame'
    // )
}

const rootNode = document.querySelector('#root')
const root = ReactDOM.createRoot(rootNode)
root.render(React.createElement(myButton))