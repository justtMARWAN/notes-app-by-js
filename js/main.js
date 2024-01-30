let inputTitle = document.getElementById("title-note"),
  add = document.getElementById("add"),
  inputText = document.getElementById("content-note"),
  output = document.getElementById("output");

//output
let item, btndel, h2, p;
//no note alert
add.addEventListener("click", function (e) {
  e.preventDefault();

  if ((inputTitle.value == "") | (inputTitle.value == " ")) {
    alert("make sure that u have written a note");
  } else if ((inputText.value == "") | (inputText.value == " ")) {
    alert("make sure that u have written details");
  } else {
    item = document.createElement("div");
    btndel = document.createElement("button");
    h2 = document.createElement("h2");
    p = document.createElement("p");
    //give the notes the value
    h2.innerHTML = inputText.value;
    p.innerHTML = inputText.value;
    btndel.innerHTML = "delete";
    //add class
    item.classList.add("item");
    btndel.classList.add("remove");
    h2.classList.add("title-note");
    p.classList.add("content-note");
    //هنضيف جوا ال div
    item.appendChild(btndel);
    item.appendChild(p);
    item.appendChild(h2);
    //use the output
    output.appendChild(item);
    //delete
    inputTitle.value = '';
    inputText.value = '';
  }
  btndel.addEventListener('click',function(){
    output.removeChild(this.parentElement)
  })
});
