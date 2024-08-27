import * as d3 from "d3";

export const drawCompassChart = (
  sensorValue,
  selectedSensor,
  svgRef,
  color
) => {
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
      `translate(${(width + padding * 2) / 2.2}, ${(height + padding * 2) / 2})`
    );

  const defs = svg.append("defs");
  const gradient = defs.append("radialGradient").attr("id", "grad");
  gradient.append("stop").attr("offset", "50%").attr("stop-color", "#555");
  gradient.append("stop").attr("offset", "100%").attr("stop-color", "#222");

  svg
    .append("circle")
    .attr("r", radius)
    .attr("fill", "url(#grad)")
    .attr("stroke", "#ddd")
    .attr("stroke-width", 5);

  for (let i = 0; i <= 100; i += 5) {
    const angle = i * 2.3 - 115;
    const isMajorTick = i % 10 === 0;
    const tickLength = isMajorTick ? 15 : 7;
    const tickRadius = radius - tickLength;

    svg
      .append("line")
      .attr("x1", 0)
      .attr("y1", -radius)
      .attr("x2", 0)
      .attr("y2", -tickRadius)
      .attr("stroke", "#fff")
      .attr("stroke-width", isMajorTick ? 3 : 1)
      .attr("transform", `rotate(${angle})`);

    if (isMajorTick) {
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

  const needlePath = d3
    .line()
    .x((d) => d[0])
    .y((d) => d[1]);

  const needlePoints = [
    [0, 20],
    [3, 15],
    [0.5, -radius + 15],
    [-0.5, -radius + 15],
    [-3, 15],
    [0, 20],
  ];

  const needle = svg
    .append("path")
    .attr("d", needlePath(needlePoints))
    .attr("fill", "red")
    .attr("stroke", "red")
    .attr("stroke-width", 2)
    .attr("transform", `rotate(-90)`);

  const rotationAngle = sensorValue * 2.3 - 25;

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

  const textPadding = 5;
  const borderRadius = 3;

  const textElement = svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dy", "4.5em")
    .attr("font-size", "16px")
    .attr("fill", color)
    .attr("font-weight", "bold")
    .text(`${selectedSensor}`);

  const bbox = textElement.node().getBBox();
  const rectWidth = bbox.width + textPadding * 6;
  const rectHeight = bbox.height + textPadding * 1.5;

  svg
    .insert("rect", "text")
    .attr("x", bbox.x - textPadding * 3)
    .attr("y", bbox.y - textPadding + 1)
    .attr("width", rectWidth)
    .attr("height", rectHeight)
    .attr("rx", borderRadius)
    .attr("ry", borderRadius)
    .attr("fill", "#fff")
    .attr("stroke", "#fff");

  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dy", "3em")
    .attr("font-size", "14px")
    .attr("fill", "#fff")
    .attr("font-style", "italic")
    .attr("font-weight", "bold")
    .text(`${sensorValue}%`);
};
