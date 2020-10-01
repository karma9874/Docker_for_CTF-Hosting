let curs = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  curs.style.left = (x - 15) + "px";
  curs.style.top = (y - 15) + "px";
  curs.style.display = "block"
});

document.addEventListener('click', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  
  curs.classList.add("explosion");
  setTimeout(function() {
    curs.classList.remove("explosion");
  }, 900);  
  
  let blackhole = document.createElement('blackhole');
  blackhole.style.left = x + "px";
  blackhole.style.top = y + "px";
  document.body.appendChild(blackhole);
  let size = Math.random() * 40;
  blackhole.style.width = 1 + size + "px";
  blackhole.style.height = 1 + size + "px";
  
  setTimeout(function() {
    blackhole.remove();
  }, 1800);
  
});

