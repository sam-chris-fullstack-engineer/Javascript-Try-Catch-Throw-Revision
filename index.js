//Exception handling

try {
  const name = prompt("Enter the Correct Name");
  console.log(name);
  if (name === "") throw "Field Cannot be Empty";
  else if (!isNaN(name)) {
    throw "Enter the valid name";
  }
} catch (error) {
  console.log(error);
}
// finally{
//   console.log("Thanks for Entering your name");
// }