
const loadAllPhones = () => {
    console.log('3 sec')
    document.getElementById("spinner").style.display = "none";
}




const handleSearch = () => {
    document.getElementById("spinner").style.display = "block";
    
    setTimeout(function () {
        loadAllPhones()
    },3000)
}