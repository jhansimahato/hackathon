import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = ({sessionCount,desc, studentAttendence,TodayAttendence,WeeklyAttendence, MonthlyAttendence}) => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Attendance</h1>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={studentAttendence} text={studentAttendence} strokeWidth={5} />
        </div>
        <p className="title">Total session attended</p>
        <p className="count">{sessionCount}</p>
        <p className="desc">
          {desc}
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Today</div>
            <div className="itemResult negative">
              <div className="resultCount">{TodayAttendence}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <div className="resultCount">{WeeklyAttendence}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <div className="resultCount">{MonthlyAttendence}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;