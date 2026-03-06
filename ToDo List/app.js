let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let delBns =  document.querySelectorAll(".delete");

btn.addEventListener("click", function() {
    let l = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText = "Del";
    delBtn.classList.add("delete");

    l.innerText = inp.value;
    ul.append(l);
    l.append(" ", delBtn);
    inp.value = "";
    console.log("Add successfully");
});

// for(let delBn of delBns){
//     delBn.addEventListener("click", function() {
//        console.log("dele");
//        delBn.parentElement.remove();
//     });
// }

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        event.target.parentElement.remove();
        console.log("Deleted successfully");
    }
})