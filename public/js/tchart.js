var myTChart = document.getElementById("myTChart");

myTChart.height = 100;


var tdata = {
  labels: ["Node.js", "Firebase", "Git" , "JQuery", "Bootstrap", "React.js"],
  datasets: [{
    label: "Technologies",
    fill: true,
    backgroundColor: "rgba(177, 29, 22, 0.5)",
    borderColor: '#FFFFFF',
    pointBackgroundColor: 'rgb(177, 29, 22)',
    pointBorderColor: '#FFFFFF',
    pointHoverBackgroundColor: '#FFFFFF',
    pointHoverBorderColor: '#FFFFFF',
    data: [86, 90, 90, 80, 90, 90]
  },] 
};

var radarChart = new Chart(myTChart, {
  type: 'radar',
  data: tdata,
  options: {
    scale: {
        gridLines: {
          color: ['white', 'white', 'white', 'white', 'white', 'white']
        }
      }
  }
});
