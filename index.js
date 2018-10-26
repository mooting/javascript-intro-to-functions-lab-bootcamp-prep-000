const shout = ( string ) => string.toUpperCase()

const whisper = ( string ) => string.toLowerCase()

const logShout = ( string ) => {
  spy( shout( string ))
}
