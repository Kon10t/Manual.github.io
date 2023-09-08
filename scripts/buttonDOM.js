'use strict'

document.querySelector('#buttonAlert').addEventListener('click', function (e) {
    alert("Hello");
  });
  
  document.querySelector('#buttonPrompt2').addEventListener('click', function (e) {
    let age = prompt("Сколько тебе лет?", 100);
  });
  
  document.querySelector('#buttonConfirm').addEventListener('click', function (e) {
    let isBoss =  confirm("Ты здесь главный?");
  });