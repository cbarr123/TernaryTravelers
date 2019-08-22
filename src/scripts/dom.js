import factory from "./factory.js"

const renderToDomPlaces = (places) => {
    const whereToDisplayPlacesInTheDom = document.querySelector("#mainContainer");
    places.forEach(place => {
        console.table(place)
        const htmlPlaceRepresentation = factory.createPlace(place);
        whereToDisplayPlacesInTheDom.innerHTML += htmlPlaceRepresentation
    });
}
const renderToDomInterests = (interests) => {
    const whereToDisplayPlacesInTheDom = document.querySelector("#mainContainer");
    interests.forEach(interest => {
        console.table(interest)
        const htmlPlaceRepresentation = factory.createPointInterest(interest);
        whereToDisplayPlacesInTheDom.innerHTML += htmlPlaceRepresentation
        // console.log(htmlPlaceRepresentation)
    });
}



export default{
    renderToDomPlaces, renderToDomInterests
}