import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [rows, setRows] = useState([]);

  const handleInsertRow = () => {
    setCount(count + 1);
    setRows([...rows, { id: count, itemName: `Item ${count}`, amount: "0" }]);
  };

  const handleClearRows = () => {
    setRows([]);
  };

  const handleAmountChange = (id, value) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, amount: value } : row))
    );
  };

  const handleSubmit = () => {
    console.log(rows);
  };

  const handleRemoveRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <div className="flex h-[100vh] justify-center items-center">
      <div>
        {/*  */}
        <div className="flex justify-between mb-6">
          <button className="btn mr-1 btn-sm" onClick={handleInsertRow}>
            Insert Row
          </button>
          <button className="btn mr-1 btn-sm" onClick={handleClearRows}>
            Clear Rows
          </button>
          {rows.length > 0 && (
            <button className="btn mr-1 btn-sm" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>

        {rows.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.itemName}</td>
                  <td>
                    <input
                      className="text-center"
                      type="text"
                      value={row.amount}
                      onChange={(e) =>
                        handleAmountChange(row.id, e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-sm mr-1"
                      onClick={() => handleRemoveRow(row.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
