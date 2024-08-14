function openSidebar() {
    console.log("ll")
    document.getElementById("sidebar").style.width = "250px";
    document.body.classList.add("sidebar-open");
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.body.classList.remove("sidebar-open");
}

function toggleDarkLight(mode) {
    if(mode === "dark") {
        console.log("dark")
        document.getElementById("dark").style.display = "none";
        document.getElementById("light").style.display = "inline-block";
        document.body.classList.add("dark-mode"); // Add dark-mode class to body
    } else {
        console.log("light")
        document.getElementById("light").style.display = "none";
        document.getElementById("dark").style.display = "inline-block";
        document.body.classList.remove("dark-mode"); // Add dark-mode class to body 
    }
}
