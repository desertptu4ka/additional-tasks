{
    let userAge = +prompt("what year were you born? ");
    if(isNaN(userAge)) {
        do {
            userAge = +prompt("Error, try again \nwhat year were you born? ");
        } while (isNaN(userAge));
    }
    const result = new Date().getFullYear() - userAge;
    alert(`you are about ${result} years old`);
}