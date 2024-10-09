const URL_STRING = "https://script.google.com/macros/s/AKfycbyzFig3cgYpdipQY0jXwVq0AiF0AE-a2sPZCB-UIel6cgZb5VrExHpzhIVKvZrRkHnZ/exec";

export default async function main() {};

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