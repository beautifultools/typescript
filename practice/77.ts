{
    function (list:number[][]){
        // sort input list
        list.sort((a,b) => {
            if(!Number.isInteger(a[0]) || !Number.isInteger(b[0])){
                throw Error("A malformed input is found at first item.")
            }
            return a[0] - b[0]
        })

        // compare and merge from start to and
        list.reduce(prev, cur, curIndex, arr, []){
            
        }
    }
}