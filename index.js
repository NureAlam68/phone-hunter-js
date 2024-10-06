
const loadAllPhones = async(status, searchText) => {
    console.log(searchText);
    document.getElementById("spinner").style.display = "none";

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText?searchText:"iphone"}`);
    const data = await res.json();

    console.log(data)

    if (status === true) {
        displayAllPhone(data.data)
    }
    else {
        displayAllPhone(data.data.slice(0,6))
    }
};




const displayAllPhone = (phones) => {
    console.log(phones);
}



const handleShowAll = () => {
    loadAllPhones(true)
}







const handleSearch = () => {
    document.getElementById("spinner").style.display = "block";
    const searchText = document.getElementById('search-box').value;
    setTimeout(function () {
        loadAllPhones(false, searchText)
    },3000)
};

loadAllPhones(false, "iphone");

