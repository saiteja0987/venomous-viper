const play = document.getElementById("play-button")

play.onclick = (e) => {
    // alert("helloS")
    e.preventDefault();
    const namevalue1= document.getElementById("name").value;
    const namevalue2= document.getElementById("Name").value;
    if (namevalue1.length > 0 && namevalue2.length > 0){

        // var name = document.getElementById("name").value;
        localStorage.setItem("name", name);
        location.href ="index2.html"

    } else {
        alert ("Please enter your Name and Username!");
    }
}
