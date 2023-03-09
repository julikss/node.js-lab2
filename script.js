const getFiles = async () => {
  
  let response = await fetch("http://localhost:8000/")
  .then(res => res.json());
  console.log(response)
}


getFiles();