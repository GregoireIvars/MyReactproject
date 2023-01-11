

function Request () {
 const requesteHandle = async() =>{

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const url = ('https://swapi.dev/api/people')
    fetch(url, requestOptions).then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json();
    }).then(response => {
      console.log(response.json());
      return response.json();
    })
  }
 return (

 ) 
 
}
export default Request;