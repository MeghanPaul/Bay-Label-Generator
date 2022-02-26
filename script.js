const bayFormEl = document.querySelector("#baySearchForm");

bayFormEl.addEventListener("submit",formSubmitHandler);

const formSubmitHandler = (event) => {
    //prevent page refresh
    event.preventDefault;

    var bayID = bayFormEl.value.trim();

    if(bayID) {
        cityNameEl.value = "";
        //addToHistory(bayID);
        //displayBarcode(bayID);
    }
};