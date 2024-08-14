function openSidebar() {
    console.log("ll")
    document.getElementById("sidebar").style.width = "250px";
    document.body.classList.add("sidebar-open");
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.body.classList.remove("sidebar-open");
}
