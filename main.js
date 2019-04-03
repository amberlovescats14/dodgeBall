// dodgeBall Javascript


class Person {
  static action() {
    return 'Signed Up'
  }
  static actionSentence() {
    return `This person has ${this.action}`
  }
  constructor(first, last){
    this.first = first
    this.last = last
  }
  fullName() {
    
    // const fullName = `${this.first} ${this.last}`
    document.getElementById('players').innerHTML = `${this.first} ${this.last}`
  
  }

  setFirstName(first){
    this.first = first
  }
  setLastName(last){
    this.last = last
  }
  

}
let p = new Person
const person1 = new Person('Amber', 'Jones')
document.getElementById('button').addEventListener('click', person1.fullName)
