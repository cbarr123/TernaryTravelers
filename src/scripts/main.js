import api from "./api.js"
import factory from "./factory.js"
import dom from "./dom.js"


//initial render of homepage
mainContainer.innerHTML = factory.createHomepage()
//fetch places data and render
api.getPlacesData().then(dom.renderToDom)

//* Be able to add entries to inteerets
//* Be able to look at the dropdown






//* Be able to edit entries including check boxes