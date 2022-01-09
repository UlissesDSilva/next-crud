export default class Client {
  #id: string
  #name: string
  #age: number
  #editable: boolean

  constructor(name: string, age: number, id: string = null, editable: boolean = false){
    this.#name = name
    this.#age = age
    this.#id = id
    this.#editable = editable
  }

  static emptyClient() {
    return new Client("", 0, null, false)
  }

  get id() {return this.#id}

  get name() {return this.#name}

  get age() {return this.#age}

  get editable() {return this.#editable}  
}