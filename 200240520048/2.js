

function check() {
    let uname = document.querySelector("#uname").value;
    let pw = document.querySelector("#pword").value;
    let maill = document.querySelector("#mail").value;

    let info = document.querySelector("#info");
    let err = document.querySelector("#error");

    if (uname == "" || pw == "" || maill == "") {
        err.style.visibility = "visible";
        err.style.color = "red";
        err.innerHTML = "can not be empty";
    }
    else {
        err.style.visibility = "hidden";
        info.style.visibility = "visible";
        info.children[0].innerHTML = uname;
        info.children[4].innerHTML = maill;
        info.children[2].innerHTML = pw;
    }

    //clear
    document.querySelector("#uname").value = "";
    document.querySelector("#pword").value = "";
    document.querySelector("#mail").value = "";
}