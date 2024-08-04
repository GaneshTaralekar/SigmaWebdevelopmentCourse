let arr = [10,20,30,40,50]
console.log(arr[0])
for (const iterator of arr) {
    console.log(iterator)
}

arr[3]=45

for (const iterator of arr) {
    console.log(iterator)
}

console.log(arr)
