/**
 * 
 */

const loaded = new Promise((resolve, reject) => {
    window.addEventListener("DOMContentLoaded", () => {
        resolve();
    })
})

const main = async () => {
    await loaded; // Wait for elements to load

    // Calculate seconds since born till date
    // 976849200
    let timeToDate = document.querySelector("#time-to-date");
    setInterval(() => {
        let secondsAlive = Math.floor((Date.now() - 976849200000) / 1000);
        timeToDate.innerText = secondsAlive;
    }, 1000)

    let footer = document.querySelector(".footer-container");
    const FOOTER_HEIGHT = 300;

    // Function to close footer with animation
    function closeFooter(){
        footer.style.bottom = -FOOTER_HEIGHT + "px";
        footer.style.transition = "0.5s ease-in-out";
        setTimeout(() => {
            footer.style.transition = "";
        }, 500);
        document.querySelector(".instruction-container").style.display = "block" // Show scroll down hint

    }

    document.querySelector(".page-container").addEventListener("click", () => {
        if(parseInt(getComputedStyle(footer).bottom) > -FOOTER_HEIGHT){
            closeFooter()
        }
    })

    window.addEventListener("wheel", (e) => {
        // Scroll Up will Close Footer
        if(e.deltaY < 0){
            closeFooter();
        }

        // Check if user has scrolled to the bottom of the content
        let isBottom = false;
        if((window.innerHeight + window.scrollY) >= document.body.scrollHeight){
            isBottom = true;
        }
        if(!isBottom) return;

        let footerShowPx = parseInt(getComputedStyle(footer).bottom);
        let bottomPx = 0;
        // Scroll down
        if(e.deltaY > 0 && footerShowPx <= 0){
            bottomPx = (footerShowPx + parseInt(e.deltaY)) >= 0 ? 0 : footerShowPx + parseInt(e.deltaY);
            footer.style.bottom = bottomPx + "px";
            document.querySelector(".instruction-container").style.display = "none"; // Hide scroll down hint
        }
    })

    // Click and navigate event for different pages
    // Click HOME
    Array.from(document.querySelectorAll("#home, #footer-home")).forEach((e) => {
        e.addEventListener("click", () => {
            document.querySelector("#content-home").style.display = "grid";
            document.querySelector("#content-about").style.display = "none";
            document.querySelector("#content-contact").style.display = "none";
    
            Array.from(document.querySelectorAll("#home, #footer-home")).forEach((element) => {
                element.classList.add("nav-selected");
            })
            Array.from(document.querySelectorAll("#about, #footer-about")).forEach((element) => {
                element.classList.remove("nav-selected");
            })
            Array.from(document.querySelectorAll("#contact, #footer-contact")).forEach((element) => {
                element.classList.remove("nav-selected");
            })
            closeFooter();
        })
    })

    // Click ABOUT ME
    Array.from(document.querySelectorAll("#about, #footer-about")).forEach((e) => {
        e.addEventListener("click", () => {
            document.querySelector("#content-home").style.display = "none";
            document.querySelector("#content-about").style.display = "grid";
            document.querySelector("#content-contact").style.display = "none";

            Array.from(document.querySelectorAll("#home, #footer-home")).forEach((element) => {
                element.classList.remove("nav-selected");
            })
            Array.from(document.querySelectorAll("#about, #footer-about")).forEach((element) => {
                element.classList.add("nav-selected");
            })
            Array.from(document.querySelectorAll("#contact, #footer-contact")).forEach((element) => {
                element.classList.remove("nav-selected");
            })
            closeFooter();
        })
    })
    
    // Click CONTACT
    Array.from(document.querySelectorAll("#contact, #footer-contact")).forEach((e) => {
        e.addEventListener("click", () => {
            document.querySelector("#content-home").style.display = "none";
            document.querySelector("#content-about").style.display = "none";
            document.querySelector("#content-contact").style.display = "grid";

            Array.from(document.querySelectorAll("#home, #footer-home")).forEach((element) => {
                element.classList.remove("nav-selected");
            })
            Array.from(document.querySelectorAll("#about, #footer-about")).forEach((element) => {
                element.classList.remove("nav-selected");
            })
            Array.from(document.querySelectorAll("#contact, #footer-contact")).forEach((element) => {
                element.classList.add("nav-selected");
            })
            closeFooter();
        })
    })

    // Click logo navigates to home
    document.querySelector(".logo").addEventListener("click", () => {
        document.querySelector("#home").click();
    })

    // Launch with Home clicked
    document.querySelector("#content-home").style.display = "grid";
    document.querySelector("#content-about").style.display = "none";
    document.querySelector("#content-contact").style.display = "none";

    Array.from(document.querySelectorAll("#home, #footer-home")).forEach((element) => {
        element.classList.add("nav-selected");
    })
    Array.from(document.querySelectorAll("#about, #footer-about")).forEach((element) => {
        element.classList.remove("nav-selected");
    })
    Array.from(document.querySelectorAll("#contact, #footer-contact")).forEach((element) => {
        element.classList.remove("nav-selected");
    })
}

main();