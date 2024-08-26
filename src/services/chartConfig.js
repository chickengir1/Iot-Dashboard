import * as d3 from "d3";

export const drawCompassChart = (sensorValue, svgRef, color) => {
  d3.select(svgRef.current).selectAll("*").remove();

  const width = 250;
  const height = 250;
  const padding = 20;
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

  const defs = svg.append("defs");
  const gradient = defs.append("radialGradient").attr("id", "grad");
  gradient.append("stop").attr("offset", "0%").attr("stop-color", "#555");
  gradient.append("stop").attr("offset", "100%").attr("stop-color", "#222");

  svg
    .append("circle")
    .attr("r", radius)
    .attr("fill", "url(#grad)")
    .attr("stroke", "#ddd")
    .attr("stroke-width", 5);

  for (let i = 0; i <= 100; i += 10) {
    const angle = i * 1.8 - 90;
    const tickLength = i % 10 === 0 ? 15 : 5;
    const tickRadius = radius - tickLength;

    svg
      .append("line")
      .attr("x1", 0)
      .attr("y1", -radius)
      .attr("x2", 0)
      .attr("y2", -tickRadius)
      .attr("stroke", "#fff")
      .attr("stroke-width", i % 10 === 0 ? 3 : 1)
      .attr("transform", `rotate(${angle})`);

    if (i % 10 === 0) {
      const textRadius = radius - 30;
      svg
        .append("text")
        .attr("x", 0)
        .attr("y", -textRadius)
        .attr("fill", "#fff")
        .attr("font-size", "12px")
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr(
          "transform",
          `rotate(${angle}) translate(0,1) rotate(${angle % 2})`
        )
        .text(i);
    }
  }

  const needle = svg
    .append("line")
    .attr("x1", 0)
    .attr("y1", 20)
    .attr("x2", 0)
    .attr("y2", -radius + 10)
    .attr("stroke", color)
    .attr("stroke-width", 2)
    .attr("transform", `rotate(-90)`);

  const rotationAngle = sensorValue * 1.8;

  needle
    .transition()
    .duration(1000)
    .attr("transform", `rotate(${rotationAngle - 90})`);

  svg
    .append("circle")
    .attr("r", 8)
    .attr("fill", "#555")
    .attr("stroke", "#000")
    .attr("stroke-width", 2);

  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dy", "3.5em")
    .attr("font-size", "18px")
    .attr("fill", color)
    .attr("font-style", "italic")
    .text(`${sensorValue} %`);
};
