//import React from 'react';


export const startsWith = (arr, searchWord) => {
  return arr.filter(country => country.toLowerCase().startsWith(searchWord))
}

export const includes = (arr, searchWord) => {
  return arr.filter(country => country.toLowerCase().includes(searchWord))
}

// export function includesCount(arr, searchWord){
//   const filteredCountry = arr.filter(country => {
//    return country.includes(searchWord)
//   })
//   return (
//     <h3>{searchWord.toUpperCase} {filteredCountry.length}</h3>
//   )
// }