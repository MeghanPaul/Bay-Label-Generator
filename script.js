const bayNameEl = document.querySelector("#baySearch");
const bayFormEl = document.querySelector("#baySearchForm");

var formSubmitHandler = function(event) {
    console.log(event);
    //prevent page refresh
    event.preventDefault();

    var bayID = bayNameEl.value.trim();
    console.log(bayID);

    if(bayID) {
        console.log("Bay ID: " + bayID);
        bayNameEl.value = "";
        //addToHistory(bayID);
        displayBarcode(bayID);
    }
};

const displayBarcode = (bayID) => {
    $("#barcode-img").attr("src",`http://bwipjs-api.metafloor.com/?bcid=code128&text=9809005612-${bayID}&includetext`);
}

bayFormEl.addEventListener("submit",formSubmitHandler);