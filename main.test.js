//👉 Write your tests below here:


import count from "./main.js"

test("should be three soldiers", function(){
    const actual = count
    const expected = 3
    if(
        actual !== expected) {
            throw new Error(`${actual} was not equal to ${expected}`)
        }
    })

