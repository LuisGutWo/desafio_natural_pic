import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import Loading from "./Loading";

const PokemonPage = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getPokemon = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!res.ok) setError(true);
      const pokeData = await res.json();
      setPokemon(pokeData);
    } catch (error) {
      console.log(error.message);
    }

    setLoading(false);
  };
  useEffect(() => {
    getPokemon();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Error: Anime no encontrado</div>;

  return (
    <div className="container">
      <Card
        style={{ width: "18rem" }}
        className="cards text-start border border-dark"
      >
        <Card.Img
        variant="top"
        className="p-5"
        src={pokemon.sprites?.other?.dream_world?.front_default}
      />
        <Card.Title className="alert bg-secondary bg-gradient text-black">
          {pokemon.id}- {pokemon.name}
        </Card.Title>
        <img src="" alt="" />
        <NavLink to="/">
          <Button>Volver a Seleccion de Pokemon's</Button>
        </NavLink>
      </Card>
    </div>
  );
};

export default PokemonPage;
