TESTER = document.getElementById('tester');

Plotly.plot( TESTER, [{
x: [1, 2, 3, 4, 5],
y: [1, 2, 4, 8, 16] }], {
margin: { t: 0 } } );

var index = 0;
setInterval(updateData, 1000);

function updateData(){
    Plotly.react()
}