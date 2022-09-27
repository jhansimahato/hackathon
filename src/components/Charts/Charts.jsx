import "./Charts.scss";
import {
  AreaChart,
  Area,
  XAxis,YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { name: "January", Students: 1200 },
  { name: "February", Students: 2100 },
  { name: "March", Students: 800 },
  { name: "April", Students: 1600, Volunteers: 1452 },
  { name: "May", Students: 900, Volunteers: 632 },
  { name: "June", Students: 1700, Volunteers: 520 },
  { name: "July", Students: 1200 , Volunteers: 200},
  { name: "August", Students: 2100, Volunteers: 630 },
  { name: "September", Students: 800, Volunteers: 720 },
  { name: "October", Students: 1600, Volunteers: 1452 },
  { name: "November", Students: 900, Volunteers: 632 },
  { name: "December", Students: 1700 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="student" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="98%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            {/* <linearGradient id="volunteer" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF5733" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FF5733" stopOpacity={0} />
            </linearGradient> */}
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Area
            type="monotone"
            dataKey="Students"
            stroke="#8884d8"
            // fillOpacity={.5}
            fill="url(#student)"
          />
          {/* <Area
            type="monotone"
            dataKey="Volunteers"
            stroke="#FF5733"
            // fillOpacity={.5}
            fill="url(#volunteer)"
          /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;