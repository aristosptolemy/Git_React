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
    //setQRData(productData);
    console.log(productData);
  }, []);

  const NextScan = () => {
    setCurrentPage('QRPage');
  };

  return(
    <div className="set">
      <div>業者名: {QRData[0][0]}</div>
      <div>商品コード: {QRData[0][1]}</div>
      <div>商品名: {QRData[0][2]}</div>
      <div>在庫数: {QRData[0][6]}</div>
      
      <a className="buttonUnderline" type="button" onClick={() => NextScan()}>
        次へ
      </a>
    </div>
  );
}