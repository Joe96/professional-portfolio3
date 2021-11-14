var myDChart = document.getElementById("myDChart");

myDChart.height = 100;


var ddata = {
  labels: ["Photoshop", "XD", "Illustrator", "HTML", "CSS", "FL Studio", "3D Printing"],
  datasets: [{
    label: "Design",
    fill: true,
    backgroundColor: "rgba(24, 74, 84, 0.5)",
    borderColor: '#FFFFFF',
    pointBackgroundColor: 'rgb(24, 74, 84)',
    pointBorderColor: '#FFFFFF',
    pointHoverBackgroundColor: '#FFFFFF',
    pointHoverBorderColor: '#FFFFFF',
    data: [90, 90, 90, 95, 95, 85, 76]
  },] 
};

var radarChart = new Chart(myDChart, {
  type: 'radar',
  data: ddata,
  options: {
    scale: {
        gridLines: {
          color: ['white', 'white', 'white', 'white', 'white', 'white']
        }
      }
  }
});