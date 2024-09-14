import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

const QrCodeScanner = () => {
  const [data, setData] = useState("No result");
  const [error, setError] = useState("");

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <Scanner
        onScan={(result: any) => {
          if (!!result && result[0]?.rawValue) {
            try {
              // Extract rawValue from the first object in the array
              setData(result[0].rawValue);
            } catch (err) {
              setError("Error parsing QR data");
              console.log(result)
            }
          }
        }}
        onError={(err:any) => {
          setError("Error accessing camera: " + err.message);
        }}
      />
      {error ? <p style={{ color: "red" }}>{error}</p> : <p>{data}</p>}
    </div>
  );
};

export default QrCodeScanner;
// import { QrReader } from "react-qr-reader";

// const QrCodeScanner = () => {
//   const [data, setData] = useState("No result");

//   return (
//     <div>
//       <h1>QR Code Scanner</h1>
//       <QrReader
//         onResult={(result:any, error:any) => {
//           if (!!result) {
//             setData(result?.text);
//           }

//           if (!!error) {
//             console.info(error);
//           }
//         }}
//         style={{ width: "100%" }}
//       />
//       <p>{data}</p>
//     </div>
//   );
// };