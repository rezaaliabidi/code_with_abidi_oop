"use strict";
// ...............Creating Class "house".......................................
//Blue Print: A blue print is a detailed plan that serves as a guid for
//creating or building something. design, layout or structure of the program
//  class House {
//   ownerName: string = "Hamzah";
//   readonly address: string = "XYZ Main St";
//   numberOfRooms: number = 8;
//   numberOfFloor: number = 2;
//  }
// //.............................declare "house" as object..............................................
// let house1 = new House();
// console.log(house1);
// let house2 = new House();
// console.log(house2);
//...................using "constructor" for dynamic values...................................
class House {
    constructor(owner, address) {
        this.ownerName = "Hamzah";
        this.address = "abc Main Street"; // Use "readonly": to fix the value
        this.numberOfRooms = 8;
        this.ownerName = owner;
        this.address = address;
    }
}
// // object: house
// // If "Hamzah society" contains multiple houses
let house1 = new House("Ali", "def main street");
console.log(house1);
let house2 = new House("Reza", "ghi main street");
console.log(house2);
//.....................Methods in class...................................
// class House {
//   ownerName: string = "Hamza";
//   readonly address: string = "Xyz Main Street";
//   numberOfRooms: number = 8;
//   constructor(owner: string, address: string) {
//     this.ownerName = owner;
//     this.address = address;
//   }
//   bell() {
//     console.log("Ding Dong");
//   }
// }
// let house1 = new House("Ali", "607 main street");
// house1.bell();
// console.log(house1);
//...........................................student class.................................................................
// class Student {
//   name: string;
//   rollNumber: number;
//   age: number;
//   constructor(name: string, rollNum: number, age: number) {
//     this.name = name;
//     this.rollNumber = rollNum;
//     this.age = age;
//   }
// }
//............................................instance object............................................................
// let student1 = new Student("nabeel", 304, 24);
// let student2 = new Student("sohail", 576, 34);
// console.log(student1);
// console.log(student2);
//.................................Interitense ...........................................
//......................Person........................................
//..............................student..............................
//.....................................Teacher.................................
//..............................Creating class "Person"..............................................
// class Person {
//   protected name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   introduction() {
//     console.log(`My name is ${this.name} and i am ${this.age} years old`);
//   }
// }
//..................................Student Class......................................................
// class Student extends Person {
//   rollNum: string;
//   constructor(name: string, age: number, rollNo: string) {
//     super(name, age); // use "super key word" [because "name" and "age" are inherit from the class "Person"]
//     this.rollNum = rollNo;
//   }
// }
// let student1 = new Student("Ali Reza", 20, "655");
// student1.introduction();
// console.log(student1);
// //..........................................Teacher Class...................................................
// class Teacher extends Person {
//   qualification: string;
// //for not showing in object
//   private salary: number; // use "private" key word
//   constructor(
//     name: string,
//     age: number,
//     qualification: string,
//     salary: number
//   ) {
//     super(name, age); // use "super key word" [because "name" and "age" are inherit from the class "Person"]
//     this.qualification = qualification;
//     this.salary = salary;
//   }
// }
// // Function over write
// let teacher1 = new Teacher("Okasha", 30, "Masters", 35000);
// teacher1.introduction();
// // ........................Encapsulation .............................................
// // .......................................Person Class...............................................
//Public: by default
//Private: this proprty can'nt be access outside the class
//Protected: only Parents or their children knowns
//readonly: This property can be access outside the class but readonly conditions.
// class Person {
//     protected name: string; // use "protected" for child and parent knows but not show in the classes 
//     age: number;
//     constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//     }
//     introduction() {
//       console.log(`My name is ${this.name} and i am ${this.age} years old`);
//     }
//   }
//....................................Student Class........................................
//   class Student extends Person {
//     rollNum: string;
//     constructor(name: string, age: number, rollNo: string) {
// // use super key word
//       super(name, age); // here "name" and "age" inherit from the class "Person"
//       this.rollNum = rollNo;
//     }
//   }
//   let student1 = new Student("Ali Reza", 26, "706");
//   student1.introduction();
//   console.log(student1);
// // //...................................Teacher Class...............................
// class Teacher extends Person {
//   qualification: string;
//   //not showing in object
//       private salary!: number; // Encapsulation
//   private secret: number = 45000;
//   constructor(
//     name: string,
//     age: number,
//     qualification: string,
//     salary: number
//   ) {
//     // use "super" key word
//     super(name, age); // here "name" and "age" inherit from the class "Person"
//     this.qualification = qualification;
//     this.salary = salary;
//   }
//   function overwrite..............
// introduction() {
//   // Method overriding also called "Polymorphism"
//   console.log(
//     `My name is ${this.name} and i am ${this.age} years old and I have completed ${this.qualification} Degree`
//   );
// }
// //method to get salary secretly this metho is called getter
//   getSalary(secret: number) {
//     if(secret == this.secret) {
//       console.log(this.salary);
//     } else {
//       console.log("Good");
//     }
//   }
// }
// let teacher1 = new Teacher("Ali Reza", 30, "Masters in computer science", 35000);
// teacher1.introduction();
// teacher1.getSalary(123);
// ................. abstraction............
// interface Idraw {
//   draw(): void;
//   color(): void;
// }
// class Circle implements Idraw {
//   draw(): void {
//     console.log("drawing circle");
//   }
//   color(): void {
//     console.log("Coloring");
//   }
// }
// class Triangle implements Idraw {
//   draw(): void {
//     console.log("Drawing Circle");
//   }
//   color(): void {
//     console.log("coloring");
//   }
// }
