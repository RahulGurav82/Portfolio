
// light-dark button

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

const modeSwitch = document.getElementById("mode-switch");
modeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});

// sidebar menu

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        // Remove the event listener when the sidebar is closed
        document.removeEventListener('click', closeSidebarOnClickOutside);
    } else {
        sidebar.classList.add('open');
        // Add the event listener to close the sidebar when clicking outside
        document.addEventListener('click', closeSidebarOnClickOutside);
    }
}

function closeSidebarOnClickOutside(event) {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');
    
    // If the click is outside the sidebar and the hamburger menu
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove('open');
        document.removeEventListener('click', closeSidebarOnClickOutside); // Remove listener after closing
    }
}

// loop scrolling
const scrollContainer = document.querySelector('.display');
const content = document.querySelector('.content');
// console.log(content);
// Duplicate the content for seamless scrolling
content.innerHTML += content.innerHTML;

// copy email button

const copyButton = document.querySelector(".email-btn");
const email = document.querySelector("#email-to-copy").textContent;

copyButton.addEventListener("click", ()=> {
    navigator.clipboard.writeText(email)
    .then(()=> {
        alert("email copied to clipboard");
    })
    .catch(err => {
        console.log("copy err". err);
    })
});

// call button

const callButton = document.querySelector(".call-btn");

callButton.addEventListener("click", () => {

    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
    if(isMobile) {
        window.location.href = 'tel:+919137408709';
    } else {
        showPopup();
    }

    // Function to show a popup
    function showPopup() {
        // Create a basic popup (you can style it as needed)
        const popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.padding = '20px';
        popup.style.backgroundColor = '#1199FF';
        popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        popup.style.borderRadius = '8px';
        popup.style.zIndex = '1000';

        // Add content to the popup
        popup.innerHTML = `
            <h3>Schedule a Call</h3>
            <p>Please use our contact form or email us to schedule a call.</p>
            <button id="close-popup" style="margin-top: 10px; padding: 5px 10px; background: #EEAA00; border : 1px solid #003366">Close</button>
        `;

        // Append the popup to the body
        document.body.appendChild(popup);

        // Close the popup on button click
        const closeButton = document.getElementById('close-popup');
        closeButton.addEventListener('click', () => {
            document.body.removeChild(popup);
        });
    }
});
