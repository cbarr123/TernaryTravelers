import api from "./api.js"
import factory from "./factory.js"
import dom from "./dom.js"


//initial render of homepage
mainContainer.innerHTML = factory.createHomepage()
//fetch places data and render
// api.getPlacesData().then(dom.renderToDom)
api.getInterestData().then(dom.renderToDomInterests)

//* Be able to add entries to interests
let newInterestEntry = ""

mainContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("pointSubmit")) {
        const name = document.querySelector("#pointName");
        const description = document.querySelector("#pointDescription");
        const cost = document.querySelector("#pointCost");
        const review = document.querySelector("#pointReview")
        newInterestEntry = {
            name: name.value,
            description: description.value,
            cost: cost.value,
            review: review.value,
        }
        console.log(newInterestEntry)
    api.saveInterestEntry(newInterestEntry).then(() => {api.getInterestData}).then(dom.renderToDomInterests)
    }
});

//* ----------------delete entries-------------------
mainContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("interestDelete")) {
        const pointInterestToDelete = event.target.id.split("--")[1];
        console.log(pointInterestToDelete);
        //* to clear the DOM
        document.querySelector("#mainContainer").innerHTML = "";
        api.deleteInterestEntry(pointInterestToDelete)
        api.getInterestData().then(dom.renderToDomInterests)
    }
})




//* Be able to look at the dropdown






//* Be able to edit entries including check boxes