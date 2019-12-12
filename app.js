var graphDiv = document.getElementById('tester');

var data = [{
  x: [0],
  y: [0],
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
    showline: true
  },
  //yaxis: {
    //title: 'Current',
    //showline: true
  //}
  
};
Plotly.newPlot(graphDiv, data, layout);
yValue = 1;
setInterval(appendData, 1000);

function appendData(){
    var xValue = Math.floor(Math.random() * 100);
    Plotly.extendTraces(graphDiv, {y: yValue, x: xValue}, [0]); 


}
