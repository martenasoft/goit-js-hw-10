// 2-snackbar.js
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Обробник сабміту форми
const form = document.querySelector(".form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Отримуємо значення з форми
  const delay = parseInt(form.querySelector("input[name='delay']").value, 10);
  const state = form.querySelector("input[name='state']:checked").value;

  // Створюємо проміс
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  // Обробляємо виконання промісу
  promise
    .then((delay) => {
      iziToast.success({
        title: "Success",
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: "topRight",
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: "Error",
        message: `❌ Rejected promise in ${delay}ms`,
        position: "topRight",
      });
    });
});
