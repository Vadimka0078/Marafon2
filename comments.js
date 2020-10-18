let commentForm = document.querySelector('.form_comment');
let commentField = document.querySelector('.comment');
let submitButton = document.querySelector('.btsub');

commentField.oninput = function () {
  if (commentField.value.length < 10) {
    submitButton.disabled = true;
    commentField.classList.add('warning')
  } else {
    submitButton.disabled = false;
    commentField.classList.remove('warning')
  }
};

// commentField.oninput = function () {
//     console.log(commentField.value.length);
//   };
  