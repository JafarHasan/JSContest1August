/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(person=>{
  if(person.profession==="developer"){
  console.log(person);
  }
  })

}
function PrintDeveloperbyForEach() {
  arr.forEach(person => {
    if (person.profession === "developer") {
      console.log(person);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newObj= {id:4,name:"susan",age:"20",profession:"intern"} ;
  arr.push(newObj);
  console.log(arr);

}

function removeAdmin() {
  //Write your code here, just console.log
   const newArr = arr.filter(person => person.profession !== "admin");
    console.log(newArr);

}

function concatenateArray() {
  //Write your code here, just console.log
   const arr2 = [
      { id: 5, name: "Rahul", age: "23", profession: "JavaDeveloper" },
      { id: 6, name: "Rishi", age: "24", profession: "PythonDeveloper" },
       { id: 7, name: "Kajal", age: "29", profession: "JSDeveloper" },
    ];
    const resultArr = arr.concat(arr2);
      console.log(resultArr);

}

//PrintDeveloperbyMap() ;
//PrintDeveloperbyForEach();
//addData() ;
//removeAdmin();
//concatenateArray();