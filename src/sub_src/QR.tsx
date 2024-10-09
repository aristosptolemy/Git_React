import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';
import { searchStr } from '../backend/Strage';
import localStorageSet from '../backend/Strage';

interface SettingProps {
  setCurrentPage: (page: string) => void;
}


const QRReader = ({ setCurrentPage }: SettingProps) => {
  const webcamRef = useRef<Webcam>(null);
  const [data, setData] = useState<any>(null);
  const [testData, settestData] = useState<any>(null);
  // 背面カメラを指定
  const videoConstraints = {
    facingMode: { exact: 'environment' },//environmentは背面userは前面
  };

  useEffect(() => {
    localStorageSet();
    const interval = setInterval(() => {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
          const image = new Image();
          image.src = imageSrc;
          image.onload = async () => {
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            const context = canvas.getContext('2d');
            if (context) {
              context.drawImage(image, 0, 0, image.width, image.height);
              const imageData = context.getImageData(0, 0, image.width, image.height);
              const code = jsQR(imageData.data, imageData.width, imageData.height);
              if (code) {
                setData(code.data);
                clearInterval(interval);
                const Data = await searchStr(code.data);
                settestData(Data);
                console.log(Data);
                localStorage.setItem('QRData', JSON.stringify(Data));
                setCurrentPage('DataPage');
              }
            }
          };
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/png"
        width={500}
        videoConstraints={videoConstraints}
      />
      <div>
        {data ? (
          <p>QRコードを読み取りました: {data}</p>
        ) : (
          <p>QRコードをスキャンしてください...</p>
        )}
      </div>
      <div>{testData}</div>
    </div>
  );
};

export default QRReader;
