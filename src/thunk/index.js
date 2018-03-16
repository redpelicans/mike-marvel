import crypto from 'crypto';
import { marvelLoaded, characterBio, changePage} from '../actions';

const getPublicKey = () => 'a23361187f19aea47d878ab3cc92980e';
const getPrivateKey = () => '3bd780908ddbe361a72b717faab7908f39cde17c';
const getTs = () => Math.round(new Date() / 1000);
const getHash = () => crypto.createHash('md5').update(`${getTs()}${getPrivateKey()}${getPublicKey()}`).digest('hex');

export const loadMarvel = () => dispatch => {
  const url = `http://gateway.marvel.com/v1/public/characters?limit=100&ts=${getTs()}&apikey=${getPublicKey()}&hash=${getHash()}`
  fetch(url)
    .then(res => res.json())
    .then(({data}) => dispatch(marvelLoaded(data.results)))
    .catch(err => console.log(err))
}

export const loadCharacterDetail = (pageId, characterId) => dispatch => {

  const urlcharacter = `http://gateway.marvel.com/v1/public/characters/${characterId}?ts=${getTs()}&apikey=${getPublicKey()}&hash=${getHash()}`;
  fetch(urlcharacter)
    .then(res => res.json())
    .then(({data}) => {
      dispatch(characterBio(data.results[0]));  
      return (dispatch(changePage(pageId)))
    })
    .catch(err => console.log(err))
}