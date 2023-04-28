
const breed = async () => {

    const info = document.querySelector('.details');
    info.innerHTML = "";

    const info1 = document.querySelector('.sec4');
    info1.innerHTML = "";

    const info2 = document.querySelector('.sec5');
    info2.innerHTML = "";

    const info3 = document.querySelector('.sec6');
    info3.style.display = 'none';

    // Setting up the URL using CORS
    const name = document.querySelector("#dogname").value;
    const url = `https://api.api-ninjas.com/v1/dogs?name=${name}`
    const character = await fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': "8kaOydCWTws1zXcCPLDZBA==HV42Qt4x9qspv8qc",
            accept: 'application/json',
        },
    });

    //Converting the API into json format and accessing it

    const point = await character.json();

    //If the data is not found in API

    if (!point || point.length === 0) {
        alert('Sorry, the dog breeds you are searching is not available.');
        return; // Exit the function
    }

    // If data founds from API
    const img = point[0].image_link;
    document.querySelector(".sec4").innerHTML = `
    <img src = ${img}>`;
    document.querySelector(".sec5").innerHTML = ` 
    ${point[0].name}`; 

    document.querySelector(".sec6").style.display = "block";

    //Showing the more details of the dog 
    function moredetail() {
        const info = document.querySelector('.details');
        info.innerHTML = `<p>Min life Expectancy:${point[0].min_life_expectancy}</p>
        <p>Max life Expectancy:${point[0].max_life_expectancy}</p>`;
    }
    document.querySelector('.detailbutton').addEventListener("click", moredetail);
      
}

document.querySelector(".clickable").addEventListener("click", breed);


// Calling a function using "Enter" keyword
document.querySelector("#dogname").addEventListener("keypress", (keyword)=>{
    if(keyword.key === "Enter"){
        breed();
    }

});