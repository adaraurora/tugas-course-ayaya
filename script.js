//scroll smooth
document.querySelectorAll("a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});


//back to top bosh
window.addEventListener("scroll", function () {
    const backToTop = document.getElementById("backToTop");
    if (window.scrollY > 300) { // Muncul saat scroll lebih dari 300px
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll ke atas
});


//ketikan di home
document.addEventListener("DOMContentLoaded", function () {
    const text = "Hey, I'm Adara"; // Ganti teks sesuai keinginan
    let index = 0;
    let isDeleting = false;
  
    function typeText() {
      let typedElement = document.getElementById("typed");
  
      if (!isDeleting && index < text.length) {
        // Mengetik satu per satu
        typedElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 200);
      } else if (isDeleting && index > 0) {
        // Menghapus satu per satu
        typedElement.innerHTML = text.substring(0, index - 1);
        index--;
        setTimeout(typeText, 100);
      } else {
        // Jika selesai mengetik, tunggu sebentar lalu mulai hapus
        isDeleting = !isDeleting;
        setTimeout(typeText, 2000);
      }
    }

    setTimeout(typeText, 1500);
  });
  

  //inii buatt nav yg relative
  const hamburgIcon = document.querySelector('.hamburg');
  const cancelIcon = document.querySelector('.cancel');
  const dropdownMenu = document.querySelector('.dropdown');
  
  function hamburg() {
      dropdownMenu.style.transform = 'translateY(0)';
  }
  
  function cancel() {
      dropdownMenu.style.transform = 'translateY(-500px)';
  }
  

  //ini foto foto di belakang card eduu
  document.querySelectorAll('.card-back').forEach((back) => {
    let images = back.querySelectorAll('img');
    let index = 0;

    setInterval(() => {
        images.forEach((img, i) => img.classList.toggle('active', i === index));
        index = (index + 1) % images.length;
    }, 2000); 
});
