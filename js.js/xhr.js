let devurl1=`https://douban.uieee.com`;
let devurl2=`https://douban-api.uieee.com`;
let testurl=`https://douban-api.now.sh`;
let prourl1=`https://douban-api.zce.now.sh`;
let prourl2=`https://douban-api-git-master.zce.now.sh`;


let baseurl=devurl1
// 提取公因式，减少工作量

let in_theaters = `${baseurl}/v2/movie/in-theaters`
let us_box=`${baseurl}/v2/movie/us_box`
let new_movies=`${baseurl}/v2/movie/new_movies`
let top_250=`${baseurl}/v2/movietop_250`