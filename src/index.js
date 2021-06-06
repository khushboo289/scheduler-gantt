import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Resource" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" }
];

//to change color
/*var options = {
  gantt: {
    palette: [
      {
        "color": "#cccccc",
        "dark": "#333333",
        "light": "#eeeeee"
      }
    ]
  }
}*/
const rows = [
  [
    "2014Sng",
    "Spring 2014",
    "spring",
    new Date(2014, 2, 22),
    new Date(2014, 5, 20),
    null,
    100,
    null
  ],
  [
    "2014Summer",
    "Summer 2014",
    "summer",
    new Date(2014, 5, 21),
    new Date(2014, 8, 20),
    null,
    100,
    null
  ],
  [
    "2014Autumn",
    "Autumn 2014",
    "autumn",
    new Date(2014, 8, 21),
    new Date(2014, 11, 20),
    null,
    100,
    "2014Summer"
  ],
  [
    "2014Winter",
    "Winter 2014",
    "winter",
    new Date(2014, 11, 21),
    new Date(2015, 2, 21),
    null,
    100,
    "2014Summer"
  ],
  [
    "2015Spring",
    "    Spring 2015",
    "spring",
    new Date(2015, 2, 22),
    new Date(2015, 5, 20),
    null,
    50,
    null
  ],
  [
    "2015Summer",
    "       Summer 2015",
    "summer",
    new Date(2015, 5, 21),
    new Date(2015, 8, 20),
    null,
    0,
    null
  ],
  [
    "2015Autumn",
    "Autumn 2015",
    "autumn",
    new Date(2015, 8, 21),
    new Date(2015, 11, 20),
    null,
    0,
    null
  ],
  [
    "2015Winter",
    "      Winter 2015",
    "winter",
    new Date(2015, 11, 21),
    new Date(2016, 2, 21),
    null,
    0,
    null
  ],
  [
    "Football",
    "Football Season",
    "sports",
    new Date(2014, 8, 4),
    new Date(2015, 1, 1),
    null,
    100,
    null
  ]
];
class App extends React.Component {
  state = {
    chartImageURI: "100"
  };
  render() {
    return (
      <div className="App">
        <Chart
          chartType="Gantt"
          data={[columns, ...rows]}
          width="100%"
          height={"600px"}
          legendToggle
          is3D="true"
          //options = {options}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
