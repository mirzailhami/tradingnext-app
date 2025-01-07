import { Injectable } from "@angular/core";
import * as d3 from "d3";

@Injectable({
  providedIn: "root",
})
export class Chart {
  gaugemap: any = {};

  gauge(id: string, value: number, options: any) {
    value = parseFloat(value.toFixed(2));
    var self = this;
    var chart = function (container, configuration) {
      var config = {
        size: 710,
        clipWidth: 200,
        clipHeight: 110,
        ringInset: 20,
        ringWidth: 10,

        pointerWidth: 7,
        pointerTailLength: 5,
        pointerHeadLengthPercent: 0.9,

        minValue: 0,
        maxValue: 10,

        minAngle: -90,
        maxAngle: 90,

        transitionMs: 750,

        majorTicks: 4,
        labelFormat: d3.format("d"),
        labelInset: 15,

        arcColorFn: d3.interpolateHsl(d3.rgb("#f43930"), d3.rgb("#00c89c")),
        showLabels: false, // New flag to show labels
      };
      var range = undefined;
      var r = undefined;
      var pointerHeadLength = undefined;
      var value = 0;

      var svg = undefined;
      var arc = undefined;
      var scale = undefined;
      var ticks = undefined;
      var tickData = undefined;
      var pointer = undefined;

      var donut = d3.pie();

      function deg2rad(deg) {
        return (deg * Math.PI) / 180;
      }

      function newAngle(d) {
        var ratio = scale(d);
        var newAngle = config.minAngle + ratio * range;
        return newAngle;
      }

      function configure(configuration) {
        var prop = undefined;
        for (prop in configuration) {
          config[prop] = configuration[prop];
        }

        range = config.maxAngle - config.minAngle;
        r = config.size / 2;
        pointerHeadLength = Math.round(r * config.pointerHeadLengthPercent);

        // Define a linear scale for the domain
        scale = d3
          .scaleLinear()
          .range([0, 1])
          .domain([config.minValue, config.maxValue]);

        // Calculate specific ticks: 0, middle, and max
        const midValue = (config.maxValue + config.minValue) / 2;
        ticks = [config.minValue, midValue, config.maxValue];

        tickData = d3.range(config.majorTicks).map(() => 1 / config.majorTicks);

        arc = d3
          .arc()
          .innerRadius(r - config.ringWidth - config.ringInset)
          .outerRadius(r - config.ringInset)
          .startAngle((d, i) => {
            const ratio = d * i;
            return deg2rad(config.minAngle + ratio * range);
          })
          .endAngle((d, i) => {
            const ratio = d * (i + 1);
            return deg2rad(config.minAngle + ratio * range);
          });
      }

      self.gaugemap.configure = configure;

      function centerTranslation() {
        return "translate(" + r + "," + r + ")";
      }

      function isRendered() {
        return svg !== undefined;
      }
      self.gaugemap.isRendered = isRendered;

      function render(newValue) {
        svg = d3
          .select(container)
          .append("svg:svg")
          .attr("class", "gauge")
          .attr("width", config.clipWidth)
          .attr("height", config.clipHeight);

        var centerTx = centerTranslation();

        var arcs = svg
          .append("g")
          .attr("class", "arc")
          .attr("transform", centerTx);

        arcs
          .selectAll("path")
          .data(tickData)
          .enter()
          .append("path")
          .attr("fill", function (d, i) {
            return config.arcColorFn(d * i);
          })
          .attr("d", arc);

        var lg = svg
          .append("g")
          .attr("class", "label")
          .attr("transform", centerTx);
        if (config.showLabels) {
          lg.selectAll("text")
            .data(ticks)
            .enter()
            .append("text")
            .attr("transform", function (d) {
              var ratio = scale(d);
              var newAngle = config.minAngle + ratio * range;
              return (
                "rotate(" +
                newAngle +
                ") translate(0," +
                (config.labelInset - r) +
                ")"
              );
            })
            .text(config.labelFormat);
        }

        // Add the score value and max value as side-by-side text
        var valueTextGroup = svg
          .append("g")
          .attr("class", "gauge-value-group")
          .attr("transform", `translate(${r}, ${r - 30})`); // Position text above the center

        // Add current value text, ensure horizontal centering
        valueTextGroup
          .append("text")
          .attr("class", "gauge-value-current")
          .attr("text-anchor", "middle") // Center horizontally
          .style("font-size", "1.7rem") // Larger size for the current value
          .style("font-weight", "bold")
          .text(newValue);

        // Add max value text
        valueTextGroup
          .append("text")
          .attr("class", "gauge-value-max")
          .attr("text-anchor", "middle") // Center horizontally
          .style("font-size", "0.7rem") // Smaller size for max value
          .style("alignment-baseline", "middle") // Vertical alignment
          .attr("dy", "1.2em") // Position below the current value
          .text("/" + config.maxValue);

        var lineData = [
          [config.pointerWidth / 2, 0],
          [0, -pointerHeadLength],
          [-(config.pointerWidth / 2), 0],
          [0, config.pointerTailLength],
          [config.pointerWidth / 2, 0],
        ];
        var pointerLine = d3.line().curve(d3.curveLinear);
        var pg = svg
          .append("g")
          .data([lineData])
          .attr("class", "pointer")
          .attr("transform", centerTx);

        pointer = pg
          .append("path")
          .attr("d", pointerLine)
          .attr("transform", "rotate(" + config.minAngle + ")")
          .style("fill", "gray") // Change pointer color
          .style("opacity", "0.6"); // Semi-transparent pointer

        update(newValue === undefined ? 0 : newValue);
      }

      self.gaugemap.render = render;
      function update(newValue, newConfiguration?) {
        if (newConfiguration !== undefined) {
          configure(newConfiguration);
        }
        var ratio = scale(newValue);
        var newAngle = config.minAngle + ratio * range;
        pointer
          .transition()
          .duration(config.transitionMs)
          .ease(d3.easeElastic)
          .attr("transform", "rotate(" + newAngle + ")");

        // Update the score value text
        svg.select(".gauge-value-current").text(newValue);

        // No need to update the max value text, as it doesn't change
      }
      self.gaugemap.update = update;

      configure(configuration);

      return self.gaugemap;
    };

    return chart(id, options).render(value);
  }

  init(res: any) {
    console.log(res);
    this.gauge("#trade", res.trade.score, {
      size: 200,
      maxValue: 10,
      transitionMs: 2000,
    });

    this.gauge("#return", res.return.score, {
      size: 200,
      maxValue: 10,
      transitionMs: 3000,
    });

    this.gauge("#risk", res.risk.score, {
      size: 200,
      maxValue: 10,
      transitionMs: 4000,
    });

    this.gauge("#execution", res.execution.score, {
      size: 200,
      maxValue: 10,
      transitionMs: 5000,
    });

    this.gauge("#exposure", res.diversification.score, {
      size: 200,
      maxValue: 10,
      transitionMs: 6000,
    });
  }
}
