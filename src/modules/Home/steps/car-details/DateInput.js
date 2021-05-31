import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { range } from "lodash";
import { getYear, getMonth } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.scss";
import moment from "moment";

const DateInputTwo = ({
  onChange,
  value,
  minDate,
  maxDate,
  name,
  ref,
  readOnly,
  monthsShown,
}) => {
  const [startDate, setStartDate] = useState("");
  const years = range(1940, getYear(new Date()) + 5, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <DatePicker
        className="date"
        showPopperArrow={false}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            className="date-header"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              className="date-button-left"
              type="button"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              {"<<"}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button
              className="date-button-right"
              type="button"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              {">>"}
            </button>
          </div>
        )}
        dateFormat="dd/MM/yyyy"
        onChange={(date) => {
          setStartDate(date);
          onChange(moment(date).format("DD-MM-YYYY"));
        }}
        selected={startDate}
        value={value || ""}
        autoComplete="off"
        minDate={minDate}
        maxDate={maxDate}
        name={name || "date"}
        ref={ref}
        autocomplete="off"
        readOnly={readOnly ? true : false}
        monthsShown={monthsShown || 1}
      />
    </>
  );
};

export default DateInputTwo;
