const createHomepage = () => {
    return`
    <H1>Mira's Travel Diary</H1>
    <div class="placesContainer>
        <section id="newPointInterest>
            <fieldset>
                Point Of Interest<input name = "pointName" input type = "text" id="pointName">
                Description<textarea wrap="soft" name="pointDescription" id="pointDescription"></textarea>
                Cost<input name = "pointCost" input type = "text" id="pointCost>
                <button id="placeSubmit" type="submit">Submit</button>
            </fieldset>
        </section>
        <section id="displayPlaces></section>
    </div>
    `
}

const createPointInterest = (interest) => {
    return`
        <article class="pointInterest--${interest.id}">
            <section>${interest.name}</section>
            <section>${interest.description}</section>
            <section>URL: ${interest.cost}</section>
            <button id="interestDelete--${interest.id}">Delete Place of Interest</button>
            <button id="interestEdit--${interest.id}">Edit Place of Interest</button>
        </article>`
}


const createPlace = (place) => {
    return`
        <article class="pointInterest--${place.id}">
            <section>${place.name}</section>
            <section>${place.visa_required}</section>
            <section>URL: ${place.visited}</section>
            <input type="hidden" id="hiddenId" value=""/>
            <button id="placesDelete--${place.id}">Delete Place</button>
            <button id="placesEdit--${place.id}">Edit Place</button>
        </article>`
}






export default{
    createHomepage, createPlace, createPointInterest
}