// Wrk()
// {
//     const c = window.getSelection().toString().trim();
//         if (selectedcText) {
//             console.log(selectedcText);
//           chrome.runtime.sendMessage({ text: selectedText });
//         }
// }


// document.addEventListener('dblclick',Wrk);
// console.log("ASDF");


// // document.addEventListener('dblclick', function (e) {
// //     const selectedText = window.getSelection().toString().trim();
// //     if (selectedText) {
// //       chrome.runtime.sendMessage({ text: selectedText });
// //     }
// //   });

// content.js
// document.addEventListener('dblclick', function (event) {
//     const selectedText = window.getSelection().toString().trim();
//     if (selectedText !== '') 
//     {
//     //console.log(selectedText);
//     alert(selectedText);
//     }
//   });
  
  
// content.js
document.addEventListener('dblclick', function () {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText !== '') {
      alert(selectedText);
    }
  });
  
