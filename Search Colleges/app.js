let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let ul = document.querySelector("#result");
let h1 = document.querySelector("h1");
let inp = document.querySelector("input");


btn.addEventListener("click", async()=>{
    let country = inp.value;
    console.log(country);
    let colleges = await getColleges(country);
    console.log(colleges);
    show(country, colleges);
})

function show(country, colleges) {
    inp.value="";
    ul.innerText = "";

    h1.innerText = `Universities in ${country}`;
    for(let college of colleges){
        let lis = document.createElement("li");
        lis.innerText = college.name;
        console.log(college.name);
        ul.appendChild(lis);
    }
}
async function getColleges(country){
    try {
        let res = await axios.get(url + country);
        return res.data;
    }
    catch(e){
        console.log("error - ", e);
        return [];
    }
}