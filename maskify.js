// return masked string
function maskify(cc) {
let s = cc.substring(cc.length - 4, cc.length)
let pager = cc.substring(0,cc.length-4).replace(/[1234567890abcdefghijklmnopqrstuvwxyz]/gi,'#')
return(pager + s)
}
