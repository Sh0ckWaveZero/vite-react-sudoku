const Cell = ({ number, isInitial, onChange }) => (
  <div
    onClick={(event) => {
      if (isInitial) return;
      onChange((number + 1) % 5);
    }}
    className={`cell ${isInitial ? "initial" : ""}`}>
    {number !== 0 && number}
  </div>
)


export default Cell