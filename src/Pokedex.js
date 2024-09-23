import Pokecard from "./Pokecard.js"
const Pokedex = (props) => {
    let pokemon = props.pokemon.map( mons => 
        <Pokecard 
            id={mons.id} 
            name={mons.name}
            type={mons.type}
            base_experience={mons.base_experience}
           />
        )
    
    return (
    <div>
        {pokemon}
    </div>)
}

export default Pokedex;