const friends = ['sajib', 'raju', 'abul', 'kodu', 'sajib', 'kodu', 'raju', 'sajib', 'kodu']

let removeDuplicate = [];
for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if (removeDuplicate.includes(element) === false) {
        removeDuplicate.push(element)
    }
}
console.log(removeDuplicate);