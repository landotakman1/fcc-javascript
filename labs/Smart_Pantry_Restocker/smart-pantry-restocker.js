const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];



function parseShipment(rawData) {
  const shipment = [];
  const seenSKUs = [];

  for (let i = 0; i < rawData.length; i++) {
    const line = rawData[i];
    const parts = line.split("|");

    const sku = parts[0];
    const name = parts[1];
    const qty = Number(parts[2]);
    const expires = parts[3];
    const zone = parts[4] || "general";

    if (seenSKUs.includes(sku)) {
      continue;
    } else {
      seenSKUs.push(sku);
      shipment.push({ sku, name, qty, expires, zone});
    }


  }

  return shipment;
}


function planRestock(pantry, shipment) {
  //compares pantry to shipment from parseShipment
  //returns an array of actions in the form { type, item } where type is either "restock", "discard", or "donate"
  //item is the parsed shipment object
  //
  //if shipment item has qty of 0 or less, the action type should be "discard"
  //otherwise, if item's sku already exists in the pantry, the action type should be "restock"
  //otherwise (item's sku does not exist in the pantry), the action type should be "donate"
  //
  const actionsArr = [];
  
  for (let i = 0; i < shipment.length; i++) {
    let item = shipment[i];
    let actions = ["discard", "restock", "donate"];
    let discard = actions[0];
    let restock = actions[1];
    let donate = actions[2];
    const pantrySkus = [];
    for (let j = 0; j < pantry.length; j++) {
      pantrySkus.push(pantry[j].sku);
    }
    
    if (item.qty <= 0) {
      actionsArr.push({ type: discard, item: item });
    } else {
      if (pantrySkus.includes(item.sku)) {
        actionsArr.push({ type: restock, item: item });
      } else {
        actionsArr.push({ type: donate, item: item });
      }
    }
  }
  return actionsArr;

}

function groupByZone(actions) {
  const grouped = {};

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const zone = action.item.zone;

    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(action);
  }

  return grouped;
}

function clonePantry(pantry) {
  let clone = [];
  
  for (let i = 0; i < pantry.length; i++) {
    clone.push({...pantry[i]});
  }

  return clone;
}


let pantryClone = clonePantry(pantry)

let parsedData = parseShipment(rawData);

let restock = planRestock(pantryClone, parsedData);

let zoneGrouping = groupByZone(restock);

console.log(zoneGrouping);
