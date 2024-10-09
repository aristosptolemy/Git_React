import React, { useEffect, useState } from 'react';
interface SettingProps {
  setCurrentPage: (page: string) => void;
}
export default function DataInput({ setCurrentPage }: SettingProps) {
  const [QRData, setQRData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('QRData');
    const productData = storedData ? JSON.parse(storedData) : null;
    setQRData(productData);
  }, []);
  return(
    <div>
      <div>業者名{QRData[0]}</div>
      <div>商品コード{QRData[1]}</div>
      <div>商品名{QRData[2]}</div>
    </div>
  );
}