export default class Client {
  private id: string
  private name: string
  private age: number
  private editable: boolean

  constructor(name: string, age: number, id: string = null, editable: boolean = true){
    this.name = name
    this.age = age
    this.id = id
    this.editable = editable
  }

  static emptyClient() {
    return new Client("", 0)
  }

  get getId() {return this.id}

  get getName() {return this.name}

  get getAge() {return this.age}

  get getEditable() {return this.editable}  
}