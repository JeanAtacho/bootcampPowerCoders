function Hero({ name, thumbnail }){
    return <li className="hero_image">
        <span className="hero_image">
        <img scr={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        </span>
        <span className="hero__name">{name}</span>
    </li>
}

export default Hero