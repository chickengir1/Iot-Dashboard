import * as d3 from "d3";

export const drawCompassChart = (sensorValue, svgRef, color) => {
  d3.select(svgRef.current).selectAll("*").remove();

  const width = 190;
  const height = 190;
  const padding = 10;
  const radius = Math.min(width, height) / 2 - padding;

  const svg = d3
    .select(svgRef.current)
    .attr("width", width + padding * 2)
    .attr("height", height + padding * 2)
    .append("g")
    .attr(
      "transform",
      `translate(${(width + padding * 2) / 2}, ${(height + padding * 2) / 2})`
    );

  svg
    .append("circle")
    .attr("r", radius)
    .attr("fill", "#F8FAFB")
    .attr("stroke", "#000")
    .attr("stroke-width", 2);

  const needle = svg
    .append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 0)
    .attr("y2", -radius + 20)
    .attr("stroke", color)
    .attr("stroke-width", 4)
    .attr("transform", `rotate(-90)`);

  needle
    .transition()
    .duration(1000)
    .attr("transform", `rotate(${sensorValue * 1.8 - 90})`);

  svg.append("circle").attr("r", 8).attr("fill", color);

  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dy", "3.5em")
    .attr("font-size", "15px")
    .attr("fill", "#000")
    .text(`${sensorValue}`);

  svg.select("text").transition().duration(100).attr("fill", color);
};
