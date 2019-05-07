'use strict'

const every = (arr, func) => {
    for( let i in arr){
        if (!func(arr[i])){
            return false
        }
    }
    return true
}
export default every