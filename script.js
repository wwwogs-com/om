// Future animations or scroll effects ke liye
console.log("Animated Portfolio Loaded");
const animatedItems = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{ threshold:0.2 });

animatedItems.forEach(item => observer.observe(item));
