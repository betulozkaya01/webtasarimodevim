document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form1");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = form.name.value.trim();
      const surname = form.surname.value.trim();
      const email = form.email.value.trim();
      const tel = form.tel.value.trim();
      const msg = form.msg.value.trim();
  
      if (!name || !surname || !email || !tel || !msg) {
        alert("Tüm alanları doldurunuz!");
        return;
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          alert("Geçerli bir e-posta adresi giriniz.");
          return;
      }
  
      const telPattern = /^05\d{9}$/;
      if (!telPattern.test(tel)) {
          alert("Geçerli bir telefon numarası giriniz. (Örn: 05XXXXXXXXX)");
          return;
      }
      
      if (tel.length < 10) {
              alert("Telefon numaranızı eksiksiz giriniz.");
              return;
          }
  
      // Simulate form handling
      console.log("Form Submitted:");
      console.log("Name:", name);
      console.log("Name:", surname);
      console.log("Email:", email);
      console.log("Email:", tel);
      console.log("Message:", msg);
    });
  });