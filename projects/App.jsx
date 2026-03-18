import { useState } from "react";
import "./App.css";

function App() {
  const totalSeats = 30;
  const pricePerSeat = 500;



  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      // remove seat
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      // add seat
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="container">
      <h1>🎟 Ticket Booking</h1>

      <div className="seats">
        {[...Array(totalSeats)].map((_, index) => {
          const seatNumber = index + 1;
          const isSelected = selectedSeats.includes(seatNumber);

          return (
            <div
              key={seatNumber}
              className={`seat ${isSelected ? "selected" : ""}`}
              onClick={() => handleSeatClick(seatNumber)}
            >
              {seatNumber}
            </div>
          );
        })}
      </div>

      <div className="details">
        <h3>Selected Seats: {selectedSeats.join(", ") || "None"}</h3>
        <h3>Total Price: ₹{selectedSeats.length * pricePerSeat}</h3>
      </div>
    </div>
  );
}

export default App;