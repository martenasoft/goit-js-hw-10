import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector(".form");s.addEventListener("submit",function(o){o.preventDefault();const t=parseInt(s.querySelector("input[name='delay']").value,10),r=s.querySelector("input[name='state']:checked").value;new Promise((e,n)=>{setTimeout(()=>{r==="fulfilled"?e(t):n(t)},t)}).then(e=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})});
//# sourceMappingURL=2-snackbar.js.map
