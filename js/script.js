const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('container-anim');
      }
    });
  });
  
  observer.observe(document.querySelector('.containera'));
  observer.observe(document.querySelector('.containerb'));
  observer.observe(document.querySelector('.containerc'));
  observer.observe(document.querySelector('.containerd'));
  observer.observe(document.querySelector('.containere'));


var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}