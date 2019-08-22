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
    api.saveInterestEntry(newInterestEntry).then(dom.renderToDomInterests)
    }
});

//* ----------------delete entries-------------------
mainContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("interestDelete")) {
        const pointInterestToDelete = event.target.id.split("--")[1];
        console.log(pointInterestToDelete);
        //* to clear the DOM
        api.deleteInterestEntry(pointInterestToDelete)
        document.querySelector("#mainContainer").innerHTML = "";
        api.getInterestData().then(dom.renderToDomInterests)
    }
})
//* -----------------Edit in a modal box --------------------------
mainContainer.addEventListener("click", ()=>{
    if (event.target.id.startsWith("interestEdit")){
        const interestPointToEdit = event.target.id.split("--")[1];
        //-----
        news.retrieveNewsEntry(newsArticleToEdit)

    }
})



//* Be able to look at the dropdown





