export class HCL {
  id: number;
  name: string;

  constructor(i: number, n: string) {
    this.id = i;
    this.name = n;
  }


  display():void{
    console.log(this.id + " " + this.name);
  }
}

// let obj = new HCL(190,"Arihaka");
// obj.display();

// export class HCLNoida {
//     id: number;
//     name: string;
  
//     constructor(i: number, n: string) {
//       this.id = i;
//       this.name = n;
//     }
  
  
//     display():void{
//       console.log(this.id + " " + this.name);
//     }
//   }
  