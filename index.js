function Add(){
    var txtLeftSide = document.getElementById("txtLeftSide");
    var txtRightSide = document.getElementById("txtRightSide");
    var output = document.getElementById("output");
    output.innerHTML = Number(txtLeftSide.value) + Number(txtRightSide.value);
}