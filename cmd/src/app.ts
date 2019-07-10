import * as S from "sanctuary"

//. ### Command
//# data Part = Pata | Pon | Chaka | Don

interface Type {
    type: string
}

interface Show {
    show<T>():string
}

class Pata implements Type, Show {
    type = "Pata"
    show = () => "pata"
}

class Pon implements Type, Show {
    type = "Pon"
    show = () => "pon"
}

class Chaka implements Type, Show {
    type = "Chaka"
    show = () => "chaka"
}

class Don implements Type, Show {
    type = "Don"
    show = () => "don"
}

type Part = Pata | Pon | Chaka | Don

type Song = [Part, Part, Part, Part]

const PataPata: Song = [
     new Pata()
    ,new Pata()
    ,new Pata()
    ,new Pon()
]

const show = (showable: Show):string =>
    showable.show()

const showSong = (song: Song):string[] =>
    S.map (show) (song)

/*
  type Left<A> = A
  type Right<B> = B
  type Either<A, B> = Left<A> | Right<B>

  Either<A, B> = Left A | Right B
  Either<String, Int> = Left String | Right Int

  Maybe<T> = Just T | Nothing
  Maybe<Int> = Just Int | Nothing

  const head = (Array<Int>):Maybe<Int> => {
     if ([]) => Nothing
     else ([0]) => Just x
  }

  const head = (Array<Int>):Either<String, Int> => {
  if ([]) => Left "Tableau Vide"
  else ([0]) => Right [0]
  }

applyEither<A, B> =
    (f:((A): X), g((B): X), val:Either<A,B>):X {
        switch(val.type) {
            case "Left":
                return f(val);
            case "Right":
                return g(val);
        }
    }
f => return -1
g => return val
applyEither f g Left<"error"> // $> -1
applyEither f g Right<12> // $> 12

map (applyEither (f) (g)) [Left<"error">, Right<1>]
  // [-1, 1]
  main {
     head([1,2,3])

  }
*/
