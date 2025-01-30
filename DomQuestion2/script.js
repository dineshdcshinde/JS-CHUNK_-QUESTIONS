
const apiData = []


const fetchData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
   return apiData.push(data)
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();


