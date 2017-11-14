(function($) {
// left chart
var $ctx_chart_left = $("#chart_left");
var data_chart_left = {
    datasets: [{
        data:[{
            x: 10,
            y: 20
        }, {
            x: 15,
            y: 10
        }],
    }],
};
var options_chart_left = {
    scales: {
        xAxes: [{
        display: true,
        ticks: {
            suggestedMin: 0,
        }
        }],
        yAxes: [{
        display: true,
        ticks: {
            suggestedMin: 0,
        }
        }]
    }
};
var chart_left = new Chart($ctx_chart_left, {
    type: 'scatter',
    data: data_chart_left,
    options: options_chart_left
});
// right chart
var $ctx_chart_right = $("#chart_right");
var data_chart_right = {
};
var options_chart_right = {
};
var chart_right = new Chart($ctx_chart_right, {
    type: 'line',
    data: data_chart_right,
    options: options_chart_right
});
})(jQuery);