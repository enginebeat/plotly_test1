
//var graphDiv = document.getElementById('tester');
/*
var data = [{
  x: [0, 1],
  y: [0, 1],
  type: 'scatter'
}];

var layout = {
  title: 'Voltage & Current traces',
  
  xaxis: {
    title: 'Time',
    showgrid: true,
    zeroline: true
  },
  yaxis: {
    title: 'Voltage',
    showline: true,
    zeroline: true
  },
  //yaxis: {
    //title: 'Current',
    //showline: true
  //}
  
};
Plotly.newPlot(graphDiv, data, layout);

setInterval(appendData, 1000);

function appendData(){
    var yValue = Math.floor(Math.random() * 100);
    console.log(yValue);
    Plotly.extendTraces(graphDiv, {y: [[yValue]]}, [0]);
    //y: [[rand()], [rand()]]
  //}, [0, 1])
  console.log('in appendData()');
    


}
*/


function rand() {
  return Math.random();
}

//var graph = document.getElementById('tester');
Plotly.plot('graph', [{
  y: [1,2,3].map(rand),
  mode: 'lines+markers', 
  marker: {color: 'pink', size: 8},
  line: {width: 4}
}, {
  y: [1,2].map(rand),
  mode: 'lines+markers',
  marker: {color: 'gray', size:8},
  line: {width: 4}
}
]);

var cnt = 0;
var interval = setInterval(function() {
  //Plotly.extendTraces('graph', {
    //y: [[rand()], [rand()]]
  //}, [0, 1])
  var yValue = Math.floor(Math.random() * 100);
  Plotly.extendTraces('graph', {
    y: [[yValue],[yValue+1]]
  }, [0,1])

  cnt = cnt+1;
  if(cnt === 100) clearInterval(interval);
}, 500);

