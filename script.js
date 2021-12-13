let userInfo = []

for (let i = 0; i < Infinity; i++) {
    let input = prompt('')
    let res = input.split(' ')
    if (res[0] == 'add' || res[0] == 'add,') {
        userInfo.push(res[1])
        console.log(`элемент ${res[1]} был добавлен в массив`);
    } else if (res[0] == 'del' || res[0] == 'del,') {
        for (const key in userInfo) {
            if (userInfo[key] == res[1]) {
                userInfo.splice(key, 1)
                console.log(`элемент ${res[1]} был удален из массива`);
            }
        }
    } else if (input == 'stop' || input == 'Stop') {
        break
    } else {
        alert(`Не удалось обработать команду (`);
    }

}
console.log(userInfo);