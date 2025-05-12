

//   async function handleSubmit(event) {
//   event.preventDefault();

//   const form = event.target;
//   const name = form.querySelector('input[placeholder="Name"]').value.trim();
//   const email = form.querySelector('input[placeholder="Email"]').value.trim();
//   const phone = form.querySelector('input[placeholder="Phone Number"]').value.trim();

//   if (!name || !email || !phone) {
//     alert("Please fill all fields.");
//     return;
//   }

//   try {
//     const response = await fetch('/api/register', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name, email, phone }),
//     });

//     const result = await response.json();

//     if (response.ok) {
//       alert(result.message || "Registration successful!");
//       form.reset();
//       hideRegistrationForm();
//     } else {
//       alert(result.message || "Submission failed.");
//     }
//   } catch (error) {
//     console.error("Submit error:", error);
//     alert("Error submitting form.");
//   }
// }


//     const mobileMenu = document.getElementById("mobile-menu");
//     const registrationForm = document.getElementById("registration-form");

//     function toggleMobileMenu() {
//         if (mobileMenu.classList.contains("translate-x-full")) {
//             mobileMenu.classList.remove("hidden");
//             setTimeout(() => mobileMenu.classList.remove("translate-x-full"), 10);
//             document.body.classList.add('overflow-hidden');
//         } else {
//             mobileMenu.classList.add("translate-x-full");
//             document.body.classList.remove('overflow-hidden');
//             setTimeout(() => mobileMenu.classList.add("hidden"), 300);
//         }
//     }

//     function showRegistrationForm() {
//         registrationForm.classList.add("show");
//         registrationForm.classList.remove("hidden");
//         window.scrollTo({ top: registrationForm.offsetTop, behavior: 'smooth' });
//     }

//     function hideRegistrationForm() {
//         registrationForm.classList.remove("show");
//         registrationForm.classList.add("hidden");
//     }

//     function handleSubmit(event) {
//     event.preventDefault();
    
//     const form = event.target;
//     const name = form.querySelector('input[placeholder="Name"]').value;
//     const email = form.querySelector('input[placeholder="Email"]').value;
//     const phone = form.querySelector('input[placeholder="Phone Number"]').value; // assuming 'Password' is phone or update label

//     fetch('/api/register', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name, email, phone })
//     })
//     .then(res => res.json())
//     .then(data => {
//         alert(data.message || "Registration successful!");
//         hideRegistrationForm();
//     })
//     .catch(err => {
//         console.error(err);
//         alert("Error saving data.");
//     });
// }
const mobileMenu = document.getElementById("mobile-menu");
const registrationForm = document.getElementById("registration-form");

function toggleMobileMenu() {
    if (mobileMenu.classList.contains("translate-x-full")) {
        mobileMenu.classList.remove("hidden");
        setTimeout(() => mobileMenu.classList.remove("translate-x-full"), 10);
        document.body.classList.add('overflow-hidden');
    } else {
        mobileMenu.classList.add("translate-x-full");
        document.body.classList.remove('overflow-hidden');
        setTimeout(() => mobileMenu.classList.add("hidden"), 300);
    }
}

function showRegistrationForm() {
    registrationForm.classList.remove("hidden");
    window.scrollTo({ top: registrationForm.offsetTop, behavior: 'smooth' });
}

function hideRegistrationForm() {
    registrationForm.classList.add("hidden");
}