const getFiles = async () => {
  const options = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      "Content-Type": "application/json",
    }
  };
  await fetch("http://localhost:8000", options)
  .then(response => response.json())
  .then(json => {
      console.log(json);
  });
  
}


getFiles();