const getPlacesData = () => {
    return fetch("http://localhost:8088/places")
    .then(entries => entries.json())
}

const savePlacesEntry = (newPlacesEntry) => {
    return fetch("http://localhost:8088/places",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPlacesEntry)
    })
}

const retrievePlacesEntry = (id) => {
    return fetch(`http://localhost:8088/places/${id}`)
    .then(response => response.json())
}

const saveEditedPlacesEntry = (updatedPlacesObject, id) => {
    return fetch(`http://localhost:8088/places/${id}` ,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedPlacesObject)
    })
    .then(updatedPlacesObject => updatedPlacesObject.json())
}

const deletePlacesEntry = (id) => {
    return fetch(`http://localhost:8088/places/${id}`,{
    method: "DELETE",
    })
    .then(response => response.json())
  }