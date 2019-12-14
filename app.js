
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
  var element = document.querySelector('.graph_container');

  console.log(element.clientHeight);
  console.log(element.clientWidth);
}

getSize();

