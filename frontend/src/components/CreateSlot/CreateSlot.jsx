import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";
import TextField from "@mui/material/TextField";
import TimePicker from "@mui/lab/TimePicker";
import Button from "@mui/material/Button";
import { UserContext } from "../../store/user";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import { toast, ToastContainer } from "react-toastify";
import "./CreateSlot.css";

const CreateSlot = () => {
  const [date, setDate] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(null);
  const [endTime, setEndTime] = React.useState(null);

  const [isLoading, doneLoading] = React.useState(true);
  const { user, dispatchUser } = React.useContext(UserContext);

  const [slots, setSlots] = React.useState([]);

  React.useEffect(async () => {
    try {
      const res = await fetch(
        `https://sugam-backend.herokuapp.com/distributer/${user.user.uid}/activeSlots`,
        {
          method: "GET",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.token.token,
          },
          mode: "cors",
        }
      );

      const data = await res.json();
      console.log(data);
      setSlots(data);

      doneLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        `https://sugam-backend.herokuapp.com/distributer/${user.user.uid}/createSlots`,
        {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.token.token,
          },
          mode: "cors",
          body: JSON.stringify({
            date: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
            startTime: startTime.getTime(),
            endTime: endTime.getTime(),
          }),
        }
      );

      const data = await res.json();
      console.log(data);

      toast.success("Successfully created!", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.log(error);

      toast.error("Error! Try Again.", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const disableDates = (date) => {
    const currentDate = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    const slot = slots.find(
      (slot) =>
        slot.date === currentDate &&
        slot.month === currentMonth &&
        slot.year === currentYear
    );

    return slot !== undefined;
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="create-slot-box">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="row">
              <div className="col-md-6">
                <CalendarPicker
                  shouldDisableDate={disableDates}
                  className="create-slot-calendar"
                  date={date}
                  onChange={(newDate) => setDate(newDate)}
                />
              </div>

              <div className="col-md-6 timecon">
                <TimePicker
                  label="Start Time"
                  value={startTime}
                  onChange={(newValue) => {
                    setStartTime(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      className="create-slot-time"
                      size="small"
                      {...params}
                    />
                  )}
                />

                <TimePicker
                  label="End Time"
                  value={endTime}
                  onChange={(newValue) => {
                    setEndTime(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      className="create-slot-time"
                      size="small"
                      {...params}
                    />
                  )}
                />
              </div>
            </div>
          </LocalizationProvider>
          <Button
            className="create-slot-button"
            variant="contained"
            onClick={handleSubmit}
          >
            Create
          </Button>

          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default CreateSlot;
