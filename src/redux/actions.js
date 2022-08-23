export const GET_CHARACTERS = "OBTENER LOS PERSONAJES";
export const ADD_FAVORITE = "AGREGAR A FAVS";
export const REMOVE_FAVORITE = "REMOVER DE FAVS";
const URL_PERSONAJES = "https://rickandmortyapi.com/api/character";

//ACTIONS

export function getPersonajes() {
  return function (dispatch) {
    return fetch(URL_PERSONAJES)
      .then((r) => r.json)
      .then((rJson) =>
        dispatch({ type: GET_CHARACTERS, payload: rJson.results })
      );
  };
}

export function addFav(personaje) {
  return { type: ADD_FAVORITE, payload: personaje };
}

export function removeFav(id) {
  return { type: REMOVE_FAVORITE, payload: id };
}
