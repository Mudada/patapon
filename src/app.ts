import * as S from "sanctuary"

//. ### Command
//# data Part = Pata | Pon | Chaka | Don
interface Pata {type: "Pata"}
const Pata = ():Pata => ({type: "Pata"})

interface Pon {type: "Pon"}
const Pon = ():Pon => ({type: "Pon"})

interface Chaka {type: "Chaka"}
const Chaka = ():Chaka => ({type: "Chaka"})

interface Don {type: "Don"}
const Don = ():Don => ({type: "Don"})

type Part = Pata | Pon | Chaka | Don

//# data Command = Command Part Part Part Part
type Command = [Part, Part, Part, Part]

const takePata = (pata :Pata):boolean => true

const pataPata = ():Command => [Pata(), Pata(), Pata(), Pon()]

// console.log(takePata(Pata())) This work
// console.log(takePata(Pon())) This fail
