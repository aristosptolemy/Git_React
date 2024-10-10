const URL_STRING = "https://script.google.com/macros/s/AKfycbyzFig3cgYpdipQY0jXwVq0AiF0AE-a2sPZCB-UIel6cgZb5VrExHpzhIVKvZrRkHnZ/exec";

export default async function main() {};

export const TESTPOST = async(
) => {
  try {
    const response = await fetch(
      URL_STRING,
      {
        method: 'POST',
        body: JSON.stringify({
          action: 'test',
          sub_action: 'get',
          sheetName: '在庫一覧',
        })
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const result = await response.json();
    console.log(result);
    if (result.length > 1) {
      return result;
    }else{
      return null;
    }
  }catch(e){
    return (e);
  }
};

export const InventorySearch = async(
  SearchWord: any,
  SearchColumn: any,
  sheetname: string
) => {
  try {
    const response = await fetch(
      URL_STRING,
      {
        method: 'POST',
        body: JSON.stringify({
          action: 'inventoryGet',
          sub_action: 'get',
          searchWord: SearchWord,
          sheetName: sheetname,
          searchColumn: SearchColumn,
        })
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const result = await response.json();
    if (result.length > 1) {
      return result;
    }else{
      return null;
    }
  }catch(e){
    return (e);
  }
};

export const IMAGEGET = async(
  code: Number
) => {
  try {
    const response = await fetch(
      URL_STRING,
      {
        method: 'POST',
        body: JSON.stringify({
          action: 'IMAGEGET',
          sub_action: 'get',
          sheetName: '商品画像',
          searchCode: code,
        })
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const result = await response.json();
    return result;
  }catch(e){
    return (e);
  }
};

export const ActualQuantityInsert = async (
  code: number,
  actualQuantity: number
) => {
  try {
    const response = await fetch(
      URL_STRING,
      {
        method: 'POST',
        body: JSON.stringify({
          action: 'QuantitySet',
          sub_action: 'get',
          sheetName: '在庫一覧',
          searchCode: code,
          setData: actualQuantity,
        })
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const result = await response.json();
    console.log(result);
    if (result.length > 1) {
      return result;
    }else{
      return null;
    }
  }catch(e){
    return (e);
  }
};

