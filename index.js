let jsonString = {
  "name": "John Doe",
  "age": 30,
  "city": "New York"
}   

try {
    let jsonData = JSON.parse(jsonString);
    console.log(jsonData);
    
} catch (error) {
    console.error(`Error occured : ${error.message}`);
}