/*
  Desafio do Exercism: https://exercism.org
  Descrição do problema disponível:
  https://exercism.org/tracks/javascript/exercises/ozans-playlist 
  Data: feito a 11 meses atrás
*/

export function removeDuplicates(playlist) {
  let set = new Set();
  for(let music of playlist){
    set.add(music)
  }
  return [...set]
}

export function hasTrack(playlist, track) {
  return new Set([...playlist]).has(track)
}

export function addTrack(playlist, track) {
  const updatedSet = new Set([...playlist]).add(track)
  return [...updatedSet]
}

export function deleteTrack(playlist, track) {
  const updatedSet = new Set([...playlist])
  updatedSet.delete(track)
  return [...updatedSet]
}

export function listArtists(playlist) {
  const artists = new Set()
  const regExp = /(-\s)(.+)/
  
  for(let music of playlist){
    let artist = regExp.exec(music)[2];
    artists.add(artist)
  }
  return [...artists]
}
