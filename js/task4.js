{
  const bonus = 0.02; //2%
  let wallet;
  let price;
  do {
    wallet = +prompt('how many money do you have?');
    price = +prompt('what is the fuel price?');
  } while (isNaN(wallet) || isNaN(price));

  const canBuyFuel = ~~(wallet / price);
  const moneyLeft = wallet % price;
  const moneySpend = wallet - moneyLeft;
  const bonuses = moneySpend * bonus;

  alert(
    `You can buy: ${canBuyFuel} l. \nMoney left ${moneyLeft}$. \nYou will get ${bonuses} bonuses.`
  );
}
