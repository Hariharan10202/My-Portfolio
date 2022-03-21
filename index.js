const SubmitHandler = event => {
  event.preventDefault();
  let Password = document.getElementsByClassName('password').value;
  if (Password.length == '') alert('Hi');
  else if (Password.length >= 6 && Password.length <= 14) {
    alert('Hello');
  } else {
    alert('Password length contains between 6 to 14');
  }
};
