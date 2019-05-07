'use strict'

const filter = (arr, func) => {
    let newArr = []

    for(let i in arr){
        if (func(arr[i], i, arr))
            newArr.push(arr[i])
    }
    return newArr
}

export default filter