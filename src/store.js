import { writable } from 'svelte/store'
import axios from 'axios'

export const characters = writable([])
export const fetchCharacters = (url) => {
    console.log('fetchCharacters')
    axios.get(url)
        .then((res) => characters.set(res.data.results))
}

export const character = writable({})
export const fetchCharacter = () => {
    console.log('fetchCharacter')
    axios.get(`https://rickandmortyapi.com/api/character/1`)
        .then(res => character.set(res.data))
}
