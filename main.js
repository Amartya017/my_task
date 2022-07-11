$(document).ready(function(){
    var tablewrap = document.getElementById('dt');
    tablewrap.classList.toggle('hidden')
});
function myfunction() {
  var tablewrap = document.getElementById('dt');
  tablewrap.classList.toggle('hidden')
  var btnvalue = document.getElementById('cm').value;
  if(btnvalue == 'Expand')
  {
    document.getElementById('cm').value = 'Collapse';
  }
  else{
    document.getElementById('cm').value = 'Expand';
  }
};
function myfunction2() {
    var tablewrap = document.getElementById('dt');
    tablewrap.classList.toggle('hidden')
};
