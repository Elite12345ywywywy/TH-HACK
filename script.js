document.getElementById("removepop").addEventListener("click", function() {
    var overlay = document.getElementById("overlay");
    var overlay1 = document.getElementById("maine");
    overlay.style.display = "none";
    
    overlay1.style.overflow = "scroll";
});

// Add this JavaScript code to enable automatic sliding

// Interval between slide transitions in milliseconds
const slideInterval = 5000; // 5 seconds

// Function to switch to the next slide
function nextSlide() {
    const carousel = document.querySelector('.carousel');
    const scrollWidth = carousel.scrollWidth;
    const scrollLeft = carousel.scrollLeft;
    const itemWidth = carousel.clientWidth;
    const nextScrollLeft = scrollLeft + itemWidth;
    
    // Check if next slide exceeds the scrollable width
    if (nextScrollLeft < scrollWidth) {
        carousel.scrollTo({
            left: nextScrollLeft,
            behavior: 'smooth'
        });
    } else {
        // If next slide exceeds, scroll back to the beginning
        carousel.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    }
}

// Automatically switch slides at the specified interval
setInterval(nextSlide, slideInterval);

window.addEventListener('load', function() {
    var audio = document.getElementById("loading");
    audio.play();
});

document.addEventListener('DOMContentLoaded', function() {
    // Add a click event listener to the document
    document.addEventListener('click', function(event) {
        // Check if the clicked element is a button
        if (event.target.tagName === 'BUTTON') {
            // Get the audio element
            var audio1 = document.getElementById('clicking');
            // Play the audio
            audio1.play();
        }
    });
});
 function openRandomLink() {
            // List of links
            const links = [
                'https://t.me/lotteryshot82'
            ];
            // Generate a random index
            const randomIndex = Math.floor(Math.random() * links.length);
            // Open the random link
            window.open(links[randomIndex], '_blank');
        }
        
        
        
        window.addEventListener('load', function() {
    var audio = document.getElementById("loading");
    audio.play();
});

document.addEventListener('DOMContentLoaded', function() {
    // Add a click event listener to the document
    document.addEventListener('click', function(event) {
        // Check if the clicked element is a button
        if (event.target.tagName === 'BUTTON') {
            // Get the audio element
            var audio1 = document.getElementById('clicking');
            // Play the audio
            audio1.play();
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Add a click event listener to the document
    document.addEventListener('click', function(event) {
        // Check if the clicked element has the class 'clicku'
        if (event.target.classList.contains('clicku')) {
            // Get the audio element
            var audio1 = document.getElementById('clicking');
            // Play the audio
            audio1.play();
        }
    });
});
