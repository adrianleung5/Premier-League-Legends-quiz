const modalBox = document.getElementById("instructions_box");
const instructions_button = document.getElementById("instruction_btn");
const closeIcon=  document.getElementsByClassName("close-modal")[0];
const getStartedButton = document.getElementById("lets_start_button");
const optionA = document.getElementById("")

// event listeners
instructions_button.addEventListener("click", showModal) ;
closeIcon.addEventListener("click", closeModal);
getStartedButton.addEventListener("click", redirect) 