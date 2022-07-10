import "./App.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import Date from "./components/Date";
function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="App">
      <div className="Header">언제 물 줬지?</div>
      <Date></Date>
      <div>
        <Calendar
          onChange={onChange}
          value={value}
          minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
          maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        />

        <button>물 준 날 기록하기</button>
      </div>
    </div>
  );
}

export default App;
