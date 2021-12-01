import React, { useEffect } from 'react';
import * as d3 from 'd3';

/*
            <TimerVis
                className="bg-white"
                label={remainingSeconds ? getStringForSeconds(remainingSeconds) : getStringForSeconds(totalSeconds)}
                data={[
                    { label: `a`, value: `${secondsElapsed}`},
                    { label: `c`, value: `${remainingSeconds}`},
                    { label: `break`, value: `${breakSeconds}`},
                    { label: `left`, value: totalSeconds + breakSeconds} ]}
                outerRadius={150} innerRadius={90}
            />
*/
function PieChart(props) {
    const {
        data,
        outerRadius,
        innerRadius,
        label,
    } = props;

    const margin = {
        top: 20, right: 20, bottom: 20, left: 20,
    };

    // const data = {}

    const width = 2 * outerRadius + margin.left + margin.right;
    const height = 2 * outerRadius + margin.top + margin.bottom;

    const getColor = (i) => {
        switch(i){
            case 0:
                return '#DC2626';
                break;
            case 1:
                return '#7F1D1D';
                break;
            case 2:
                return '#aaaa00';
                break;
            default:
                return '#000000'
        }
    };

    useEffect(() => {
        drawChart();
    }, [data]);

    function drawChart() {
        // Remove the old svg
        d3.select('#pie-container')
            .select('svg')
            .remove();

        // Create new svg
        const svg = d3
            .select('#pie-container')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const arcGenerator = d3
            .arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

        const pieGenerator = d3
            .pie()
            .padAngle(0)
            .value((d) => d.value).sort(null);

        const arc = svg
            .selectAll()
            .data(pieGenerator(data))
            .enter();

        // Append arcs
        arc
            .append('path')
            .attr('d', arcGenerator)
            .attr("fill-opacity",(_, i) => i === 3 ? "0.0" : "1.0")
            .style('fill',(_, i) => getColor(i))
            .style('stroke', '#ffffff')
            .style('stroke-width', (_, i) => i === 3 ? 0 : 1);

        // Append text labels
        // arc
        //     .append('text')
        //     .attr('text-anchor', 'middle')
        //     .attr('alignment-baseline', 'middle')
        //     .text((d) => d.data.label)
        //     .style('fill', (_, i) => colorScale(data.length - i))
        //     .attr('transform', (d) => {
        //         const [x, y] = arcGenerator.centroid(d);
        //         return `translate(${x}, ${y})`;
        //     });
    }

    return (<div id="pie-container" className={"ml-auto mr-auto"}>
        <div className={"relative"}>
            <div className={"absolute top-1/2 p-top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-green-300"}>{label}</div>
        </div>
    </div>);
}

export default PieChart;
