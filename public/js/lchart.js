var myLChart = document.getElementById("myLChart");

var ldata = {
  labels: ["Java", "Pyhton", "C++", "Dart", "PHP", "JavaScript", "Kotlin", "SQL"],
  datasets: [{
    label: "Languages",
    fill: true,
    backgroundColor: "rgba(2, 43, 35, 0.5)",
    borderColor: '#FFFFFF',
    pointBackgroundColor: 'rgb(2, 43, 35)',
    pointBorderColor: '#FFFFFF',
    pointHoverBackgroundColor: '#FFFFFF',
    pointHoverBorderColor: '#FFFFFF',
    data: [90, 85, 65, 90, 85, 85, 85, 90]
  },] 
};

var radarChart = new Chart(myLChart, {
  type: 'radar',
  data: ldata,
  options: {
    scale: {
        gridLines: {
          color: ['white', 'white', 'white', 'white', 'white', 'white']
        }
      }
  }
});
