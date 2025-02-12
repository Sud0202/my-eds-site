  export default async function decorate(block) {

    fetch ("http://localhost:3000/sampledata.json")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));

}
