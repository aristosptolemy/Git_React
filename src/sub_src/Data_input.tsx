import React, { ChangeEvent, useEffect, useState } from 'react';
import '../css/a_button.css';
import '../css/Data.css';
import { ActualQuantityInsert } from '../backend/GoogleAPI';


interface SettingProps {
  setCurrentPage: (page: string) => void;
}
export default function DataInput({ setCurrentPage }: SettingProps) {
  const [QRData, setQRData] = useState([[]]);
  const [InsertNumber, setInsertNumber] = useState<string>('');

  const numberchange = (event: ChangeEvent<HTMLInputElement>) => {
    const setnumber = event.target.value.replace(/[^0-9]/g, '');
    setInsertNumber(setnumber);
  };

  useEffect(() => {
    const storedData = localStorage.getItem('QRData');
    console.log(storedData);
    const productData = storedData ? JSON.parse(storedData) : null;
    setQRData(productData);
    console.log(productData);
  }, []);

  const NextScan = () => {
    if (InsertNumber == ''){
      alert('個数を入力してください');
      return
    }else{
      ActualQuantityInsert(QRData[0][1], Number(InsertNumber));
      setCurrentPage('QRPage');
    }
  };

  return(
    <div className="window-area">
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
          </div>
          <div className="control-area">
            <input
              type="tel"
              pattern='^[0-9]+$'
              placeholder='現物数'
              value={InsertNumber}
              onChange={(e) => numberchange(e)}
            />
            <a className="buttonUnderline" type="button" onClick={NextScan}>
              次へ
            </a>
          </div>
      </div>
    </div>
  );
}