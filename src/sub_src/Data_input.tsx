import React, { useEffect, useState } from 'react';
import '../css/a_button.css';
import '../css/Data.css';

interface SettingProps {
  setCurrentPage: (page: string) => void;
}
export default function DataInput({ setCurrentPage }: SettingProps) {
  const [QRData, setQRData] = useState([[]]);

  useEffect(() => {
    const storedData = localStorage.getItem('QRData');
    console.log(storedData);
    const productData = storedData ? JSON.parse(storedData) : null;
    setQRData(productData);
    console.log(productData);
  }, []);

  const NextScan = () => {
    setCurrentPage('QRPage');
  };

  return(
    <div className="set">
      <div className="detail">
        <table>
          <tbody>
            <tr>
              <th scope='row'>業者名:</th>
              <td>{QRData[0][0]}</td>
            </tr>
            <tr>
              <th scope='row'>商品コード:</th>
              <td>{QRData[0][1]}</td>
            </tr>
            <tr>
              <th scope='row'>商品名:</th>
              <td>{QRData[0][2]}</td>
            </tr>
            <tr>
              <th scope='row'>システム在庫数:</th>
              <td>{QRData[0][6]}</td>
            </tr>
          </tbody>
        </table>
        <a className="buttonUnderline" type="button" onClick={() => NextScan()}>
          次へ
        </a>
      </div>
    </div>
  );
}