import { TESTPOST } from '../backend/GoogleAPI';



export default function main(){}


export const localStorageSet = async (
) => {
  const data = await TESTPOST();
  sessionStorage.setItem('data', JSON.stringify(data));
};

export const searchStr = async (searchCode: any) => {
  const data = JSON.parse(sessionStorage.getItem('data') || '[]');
  if (!data || data.length === 0) {
    console.log('データが存在しません。');
    return [];
  }
  const result = data.filter((item: any[]) => {
    const productCode = item[1];
    return productCode === searchCode;
  });
  return result;
};

