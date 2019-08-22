import factory from "./factory.js"

const renderToDom = (places) => {
    const whereToDisplayPlacesInTheDom = document.querySelector("#mainContainer");
    places.forEach(place => {
        console.table(place)
        const htmlPlaceRepresentation = factory.createPlace(place);
        whereToDisplayPlacesInTheDom.innerHTML += htmlPlaceRepresentation
    });
}




export default{
    renderToDom
}