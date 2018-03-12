var dataset = [{name:"Apples", value:100},
			   {name:"Pears", value:200},
			   {name:"Oranges", value:300}];

window.onload = function(){

	var svg = d3.select("body").append("svg").attr("width",400).attr("height", 500);

	var elements = svg.selectAll("rect")
		.data(dataset);

	elements.enter().append("text")
		.attr('x',10)
		.attr('y',function(d,i){
			return (i*60)+35;
		})
		.attr('font-size','20')
		.attr('fill','steelblue')
		.text(function (d) {
			return d.name;
		});

	// your solution goes here

}
