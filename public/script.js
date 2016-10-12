'use strict';

const osx_button = document.getElementById('osx');
const win_button = document.getElementById('win');

win_button.addEventListener('click', () => {
  window.open('download/windows_projector_app.exe.zip');
});

osx_button.addEventListener('click', () => {
  window.open('download/mac_projector_app.dmg.zip');
});
