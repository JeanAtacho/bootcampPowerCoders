function Details ({ likes }) {
    return <aside className="fixed-datails">
        <div className="app">
            <div className="fixed-details_left">
                <i className={likes ? 'icon-heart' : 'incon-heart-empty'}></i>
                ( { likes } )
            </div>
        </div>
    </aside>
}

export default Details