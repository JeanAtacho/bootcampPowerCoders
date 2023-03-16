function myButton() {
    const [ liked, setLiked ] = React.useState(0)

    if (liked) {
        return 'React me esta gustando'
    }

    return React.createElement(
        'button',
        {  onClick: () => setLinked(true)},
        'Pulsame'
    )
}

const rootNode = document.querySelector('#root')
const root = ReactDOM.createRoot(rootNode)
root.render(React.creatElement(myButton))