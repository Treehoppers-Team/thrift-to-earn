import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

const QrCodeScanner = () => {
  const [data, setData] = useState("No result");
  const [error, setError] = useState("");
  const previewStyle = {
    height: 320,
    width: 320,
  };

  return (
    <div style={previewStyle}>
      <h1>QR Code Scanner</h1>
      <Scanner
        onScan={(result: any) => {
          if (!!result && result[0]?.rawValue) {
            try {
              // Extract rawValue from the first object in the array
              setData(result[0].rawValue);
            } catch (err) {
              setError("Error parsing QR data");
              console.log(result);
            }
          }
        }}
        onError={(err: any) => {
          setError("Error accessing camera: " + err.message);
        }}
      />
      {error ? <p style={{ color: "red" }}>{error}</p> : <p>{data}</p>}
    </div>
  );
};

export default QrCodeScanner;
