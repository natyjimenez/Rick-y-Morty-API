const json = '{"age":30, "names":"John Dore"}';

try {
    const user = JSON.parse(json);
    console.log(user.age)
    console.log(user.name)
} catch (e) {
    console.log('Error')
}