const Pokecard = (props) => {

    return (<div>
        <img src=
        {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} 
        />
        <p>{props.name}</p>
        <p>{props.type}</p>
        <p>{props.base_experience}</p>
    </div>)
}

export default Pokecard;