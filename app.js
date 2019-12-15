
var graphContainer = document.querySelector('.graph_container');


function rand() {
  return Math.random();
}


Plotly.plot('graph', [{
  y: [0],
  mode: 'lines', 
  marker: {color: 'pink', size: 8},
  line: {width: 2}
}, {
  y: [0],
  mode: 'lines+markers',
  marker: {color: 'gray', size:8},
  line: {width: 2}
}
], layout);

var cnt = 0;
var interval = setInterval(function() {
  
  var yValue = Math.floor(Math.random() * 100);
  Plotly.extendTraces('graph', {
    y: [[yValue],[yValue+10]]
  }, [0,1])

  cnt = cnt+1;
  if(cnt === 100) clearInterval(interval);
}, 100);


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function getSize(){
  console.log(graphContainer.clientHeight);
  console.log(graphContainer.clientWidth);
}

getSize();

var graphDiv = document.querySelector('graph_div');
var menu = document.querySelector('.menu');
menu.addEventListener('change', generateData);

function generateData(event){
  switch(menu.value){
    case '1':
      console.log('1');
      graphContainer.style.gridTemplateColumns = "1fr"; 
      graphContainer.style.gridTemplateRows = "1fr";
      graphDiv.style.width = "600px";
      break;
    case '2':
      console.log('2');
      graphContainer.style.gridTemplateColumns = "2fr"; 
      graphContainer.style.gridTemplateRows = "1fr";
      break;
    case '3':
      console.log('3');
      graphContainer.style.gridTemplateColumns = "2fr"; 
      graphContainer.style.gridTemplateRows = "2fr";
      break;
    case '4':
      console.log('4');
      graphContainer.style.gridTemplateColumns = "3fr"; 
      graphContainer.style.gridTemplateRows = "1fr";
      break;
    case '5':
      console.log('5');
      graphContainer.style.gridTemplateColumns = "2fr"; 
      graphContainer.style.gridTemplateRows = "2fr";
      break;
    default:
      break;
  }
}

