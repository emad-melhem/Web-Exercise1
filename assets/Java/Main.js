
function returnBindingPage(element) {
    page_content = null;
    if (element.name == "Home") {
        page_content = homePage;
    }
    else if (element.name == "About") {
        page_content = aboutPage;
    }
    else if (element.name == "Contact") {
        page_content = contactPage;
    }
    else if (element.name == "Steve") {
        page_content = StevePage;
    }
    return page_content;
}
function btn_click(element) {
    if (old_active_element && old_active_element != element)
        old_active_element.classList.remove("activatedBtn");
    old_active_element.classList.add("deactivated");
    returnBindingPage(old_active_element).style.display = "none";
    old_active_element = element;
    element.classList.add("activatedBtn");
    element.classList.remove("deactivated");
    returnBindingPage(element).style.display = "block";
    document.getElementById('page_name').innerText = element.name;
}

let params = new URL(document.location.toString()).searchParams;
let pname = params.get("p");
var old_active_element = null;
if (pname) {
    old_active_element = document.getElementsByName(pname)[0];
}
else {
    old_active_element = document.getElementsByName("Home")[0];
}
document.onload += btn_click(old_active_element);