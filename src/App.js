import React from "react";
import "./App.css";

const ApresentaPokemon = (props) => {
  return (
    <div>
      <div className="contPoke">
      <h2 className="nome">{props.nome}</h2>
        <p className="tipo">Tipo: {props.tipo}</p>
        <p className="hp">Vida: {props.hp}</p>
        <p className="atk">Ataque: {props.atk}</p>
        <p className="def">Defesa: {props.def}</p>
        <p className="spd">Velocidade: {props.spd}</p>
        <p className="ger">Geração: {props.ger}</p>
        <p className="leg">Lendário: {props.leg}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="pai">
      <ApresentaPokemon 
        nome="Pidgey" 
        tipo="Normal, Voador" 
        hp="40" 
        atk="45" 
        def="40" 
        spd="56" 
        ger="1" 
        leg="Não" 
      />
      <ApresentaPokemon 
        nome="Arbok" 
        tipo="Venenoso" 
        hp="60" 
        atk="85" 
        def="69" 
        spd="80" 
        ger="1" 
        leg="Não" 
      />
      <ApresentaPokemon 
        nome="Vulpix" 
        tipo="Fogo" 
        hp="38" 
        atk="41" 
        def="40" 
        spd="65" 
        ger="1" 
        leg="Não" 
      />
      <ApresentaPokemon 
        nome="Psyduck" 
        tipo="Água" 
        hp="50" 
        atk="52" 
        def="48" 
        spd="55" 
        ger="1" 
        leg="Não" 
      />
      <ApresentaPokemon 
        nome="Arcanine" 
        tipo="Fogo" 
        hp="90" 
        atk="110" 
        def="80" 
        spd="95" 
        ger="1" 
        leg="Não" 
      />
      <ApresentaPokemon 
        nome="Abra" 
        tipo="Psíquico" 
        hp="25" 
        atk="20" 
        def="15" 
        spd="90" 
        ger="1" 
        leg="Não" 
      />
      <ApresentaPokemon 
        nome="Ponyta" 
        tipo="Fogo" 
        hp="50" 
        atk="85" 
        def="55" 
        spd="90" 
        ger="1" 
        leg="Não" 
      />
      <ApresentaPokemon 
        nome="Rhyhorn" 
        tipo="Terrestre, Pedra" 
        hp="80" 
        atk="85" 
        def="95" 
        spd="25" 
        ger="1" 
        leg="Não" 
      />
      <ApresentaPokemon 
        nome="Magmar" 
        tipo="Fire" 
        hp="65" 
        atk="95" 
        def="57" 
        spd="93" 
        ger="1" 
        leg="Não" 
      />
    </div>
  );
}

export default App;
