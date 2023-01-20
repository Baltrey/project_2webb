let gold = 0;
let resetvalue = 0;
let resetvaluetrue = 1;
let resetcost = 100000;
let UpgradeCost = 15;
let ClickerUpgrade = 200;
let ClickerUpgrade2 = 2000;
let ClickerValue = 1;

let goldLable = document.querySelector(".gold-label");
let resetLable = document.querySelector(".reset-label");
let UpgradeCostLable = document.querySelector(".Uppgrade-Cost-Lable")
let ClickerUpgradeLable = document.querySelector(".Clicker-Upgrade-Lable")
let ClickerUpgradeLable2 = document.querySelector(".Clicker-Upgrade-Lable2")

let goldButton = document.querySelector(".gold-button");
let autoButton = document.querySelector(".Auto-Button");
let DynamiteButton = document.querySelector(".Dynamite-Button");
let TNTButton = document.querySelector(".TNT-Button");
let resetbutton = document.querySelector(".Reset-button");

goldButton.addEventListener("click", addgold);
autoButton.addEventListener("click", buyUpgrade);
DynamiteButton.addEventListener("click", Dynamite);
TNTButton.addEventListener("click", TNT);
resetbutton.addEventListener("click", reset);

function addgold() {
    gold += (ClickerValue * resetvaluetrue);
    goldLable.innerHTML = gold.toFixed(0);
    resetvalue += (gold / resetcost);
    resetLable.innerHTML = resetvalue.toFixed(2);
}
function reset() {
    gold = 0;
    resetcost *= 100;
    resetvaluetrue += resetvalue;
    resetvalue = 0;
}

// let upgradeTimer = setInterval(funktion, tid);
// clearInterval(upgradeTimer);
// setTimeout(funktion, tid);

function buyUpgrade() {
    if (gold >= UpgradeCost) {
        gold -= UpgradeCost;
        setInterval(addgold, 200);
        UpgradeCost *= 2;
        UpgradeCostLable.innerHTML = UpgradeCost
    }
}

function Dynamite() {
    if (ClickerUpgrade <= gold) {
        gold -= ClickerUpgrade;
        ClickerValue += 5;
        ClickerUpgrade *= 10;
        ClickerUpgradeLable.innerHTML = ClickerUpgrade
    }
}
function TNT() {
    if (ClickerUpgrade2 <= gold) {
        gold -= ClickerUpgrade2;
        ClickerValue *= 5;
        ClickerUpgrade2 *= 10;
        ClickerUpgradeLable2.innerHTML = ClickerUpgrade2
    }
}