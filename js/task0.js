const countries = [
  "Ukraine",
  "Poland",
  "Croatia",
  "Montenegro",
  "France",
  "USA",
];

const countriesPrice = [100, 200, 300, 400, 500, 600];

{
  //sing in
  let userName = prompt("Choose your name: ");
  if (!userName) {
    do {
      console.log("user choose wrong name");
      userName = prompt("Error, try again, \nChoose your name: ");
    } while (!userName);
  }
  console.log("User name is: ", userName);

  let userPass = prompt("Choose your password: ");
  if (!userPass) {
    do {
      console.log("user choose wrong password");
      userPass = prompt("Error, try again, \nChoose your password: ");
    } while (!userPass);
  }
  console.log("User password is: ", userPass);

  //log in
  let accessName = prompt("Write in your name: ");
  if (accessName !== userName) {
    do {
      console.log("user write a wrong name");
      accessName = prompt("Error, try again, \nwrite in your name: ");
    } while (accessName !== userName);
  }
  console.log("user write the correct name");

  let accessPass = prompt("Write in your password: ");
  if (accessPass !== userPass) {
    do {
      console.log("user write a wrong password");
      accessPass = prompt("Error, try again, \nwrite in your password: ");
    } while (accessPass !== userPass);
  }
  console.log("user write the correct password");

  //check wallet
  let wallet = +prompt("How much money do you have? \n(For example: 1000)");

  function checkMoney() {
    if (isNaN(wallet) || wallet < countriesPrice[0]) {
      do {
        console.log("user write a wrong value");
        wallet = +prompt(
          "You have got not enough money for traveling \nWould you like to change your mind?"
        );
      } while (isNaN(wallet) || wallet < countriesPrice[0]);
    }
    console.log("money: " + wallet + "$");
  }
  checkMoney();

  //show countries
  function getChooseList() {
    //get index of the most expensive country
    let index = 0;
    for (let i = countriesPrice.length - 1; i >= 0; i += -1) {
      let price = countriesPrice[i];
      if (price <= wallet) {
        index = i + 1;
        break;
      }
    }

    //get array of available countries
    const countriesArr = countries.slice(0, index);
    console.log(`list: ${countriesArr}`);

    return countriesArr;
  }

  let countriesAvailable = getChooseList();
  let countriesArrText = countriesAvailable.map((el, index) => {
    return index + 1 + ") " + el;
  });

  //show list
  alert(
    "Congratulations! Yours available contries: \n" +
      countriesArrText.join("\n")
  );

  //time to choose
  function getDirection() {
    let countryChoosen = prompt(
      "It's time to choose the country \n" +
        countriesArrText.join("\n") +
        "\nWrite number or title"
    );

    if (+countryChoosen <= countriesAvailable.length) {
      return +countryChoosen - 1;
    } else {
      countryChoosen = countryChoosen.toLowerCase();
      console.log(countriesAvailable);
      const country = countriesAvailable.findIndex(
        (el) => el.toLowerCase() === countryChoosen
      );
      if (country >= 0) {
        return country;
      }
    }
    //error
    alert("try again!");
    console.log("user writed wrong value");
    return;
  }
  let direction;
  do {
    direction = getDirection();
  } while (!(direction >= 0));

  //calc spended money
  let moneyLeft = wallet - countriesPrice[direction];
  let country = countries[direction];

  //result
  alert(
    `Dear ${userName}\nYou will fly to: ${country}\nMoney left: ${moneyLeft}`
  );
}
