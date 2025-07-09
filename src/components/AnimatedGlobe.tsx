'use client';

import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    am4core: any;
    am4maps: any;
    am4geodata_worldLow: any;
    am4themes_animated: any;
  }
}

export default function AnimatedGlobe() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && chartRef.current) {
      // Dynamically import AmCharts
      const loadAmCharts = async () => {
        const am4core = await import('@amcharts/amcharts4/core');
        const am4maps = await import('@amcharts/amcharts4/maps');
        const am4geodata_worldLow = await import('@amcharts/amcharts4-geodata/worldLow');
        const am4themes_animated = await import('@amcharts/amcharts4/themes/animated');

        // Themes begin
        am4core.useTheme(am4themes_animated.default);
        // Themes end

        if (!chartRef.current) return;

        let chart = am4core.create(chartRef.current, am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_worldLow.default;

        // Set projection
        chart.projection = new am4maps.projections.Orthographic();
        chart.panBehavior = "rotateLongLat";
        chart.deltaLatitude = -20;
        chart.padding(20, 20, 20, 20);

        // limits vertical rotation
        chart.adapter.add("deltaLatitude", function (value: number | undefined) {
          if (value === undefined) return -20;
          return am4core.math.fitToRange(value, -90, 90);
        });

        // Create map polygon series
        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

        // Configure series
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#fbbf24"); // Light yellow color
        polygonTemplate.stroke = am4core.color("#454a58");
        polygonTemplate.strokeWidth = 0.5;

        let graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
        graticuleSeries.mapLines.template.line.stroke = am4core.color("#ffffff");
        graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
        graticuleSeries.fitExtent = false;

        chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
        chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#ffffff");

        // Create hover state and set alternative fill color
        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

        let animation: any;
        setTimeout(function () {
          animation = chart.animate({ property: "deltaLongitude", to: 100000 }, 20000000);
        }, 3000);

        chart.seriesContainer.events.on("down", function () {
          if (animation) {
            animation.stop();
          }
        });

        chartInstance.current = chart;
      };

      loadAmCharts();
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={chartRef}
      className="w-full h-full"
      style={{ width: '100%', height: '100%' }}
    />
  );
} 