// We provide the data for the chart in a local`data.json` file.So you can use that to dynamically add the bars if you choose.

// Your users should be able to:

// - View the bar chart and hover over the individual bars to see the correct amounts for each day
// - See the current day's bar highlighted in a different colour to the other bars
// - View the optimal layout for the content depending on their device's screen size
// - See hover states for all interactive elements on the page
// - ** Bonus **: See dynamically generated bars based on the data provided in the local JSON file

// Understand how Chart.js works
// Create a sample example

// 

const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
