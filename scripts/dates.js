function p(ob){
console.log(ob)  //2021-02-03T13:34:17.148Z
//console.log(typeof ob); //(date) object
}

let now = new Date();
p(now);

let epoch = new Date(0); //arg are milliseconds since 1970 epoch
p(epoch); //1970-01-01T00:00:00.000Z

let century = new Date(2100, // Year 2100
                        0, // January
                        1, // 1st
                        2, 3, 4, 5); // 02:03:04.005, local time

p(century); //2100-01-01T01:03:04.005Z


//UTC  Universal Coordinated Time, or GMT

console.log(Date.UTC(2100, 0, 1))
console.log(new Date(Date.UTC(2100, 0, 1))) //2100-01-01T00:00:00.000Z
console.log(new Date().toUTCString()) //Wed, 03 Feb 2021 13:46:26 GMT
console.log(new Date().toISOString()) //2021-02-03T13:47:03.553Z

//passing a string: accepts: toString(), toUTCString(), toISOString : returns ISO format
p(new Date("2100-01-01T00:00:00.000Z")) //2100-01-01T00:00:00.000Z
p(new Date("Wed, 03 Feb 2021 13:46:26 GMT")) //2021-02-03T13:46:26.000Z

//get/set methods
let date = new Date();
p(date.getFullYear()) //2021
p(date.getUTCFullYear()); //2021
date.setFullYear(2022)
p(date) //2022-02-03T13:54:07.808Z
  //same with Month, Date, Hours...

//timestamps
p(Date.now()) //1612360597749  //useful to measure code time to run
p(date.getTime()) //1643896665734

//Date arithmetic: <, <=, >, and >= comparison operators works

//formatting and parsing data strings

let d = new Date(2020, 0, 1, 17, 10, 30); // 5:10:30pm on New Year's Day 2020


p(d.toString()) // => "Wed Jan 01 2020 17:10:30 GMT-0800 (Pacific Standard Time)"
p(d.toUTCString()) // => "Thu, 02 Jan 2020 01:10:30 GMT"
p(d.toLocaleDateString()) // => "1/1/2020": 'en-US' locale
p(d.toLocaleTimeString()) // => "5:10:30 PM": 'en-US' locale
p(d.toISOString()) // => "2020-01-02T01:10:30.000Z"

p(Date.parse("2100-01-01T00:00:00.000Z")) //timestamp: 4102444800000



function displayFormat(date) {
    //console.log(date);
    //console.log("display format date", date)
    return date != null ? date.toDateString() : "";
  }

  function editFormat(date) {
    console.log("edit format")
    console.log(date);
    //console.log(date.toISOString().substr(0,10));
    return date != null ? date.toISOString().substr(0, 10) : "";
  }
  
  function unformat(str) {
    const val = new Date(str);
    return Number.isNaN(val.getTime()) ? null : val;
  }


p(displayFormat(new Date())) //2021-02-03T13:34:17.148Z => Wed Feb 03 2021
p((editFormat(new Date()))) // 2021-02-03T13:34:17.148Z => 2021-02-03
p(unformat(10000000)) //10000000 => 1970-01-01T02:46:40.000Z




