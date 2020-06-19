/*
Beginner Series #2 Clock

https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.

Example:
past(0, 1, 1) == 61000
Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59

function past(h, m, s){
  //#Happy Coding! ^_^
}
*/

function past(h, m, s){
    return h * 3600000 + m * 60000 + s * 1000;
  }
  
  
  //console.log(past(0,1,1)) //should return 61000
  console.log(past(1,0,1)) //should return 3661000
  /*Test.assertEquals(past(0,1,1),61000)
      Test.assertEquals(past(1,1,1),3661000)
      Test.assertEquals(past(0,0,0),0)
      Test.assertEquals(past(1,0,1),3601000)
      Test.assertEquals(past(1,0,0),3600000)
  
  Hint 1: consider midnight to be 0. use the three inputs to calculate how many milliseconds have passed. your function must return that value
  Hint 2: Don't overthink it... it's fairly simple (no need for if statements or loops etc)
  Hint 3: milliseconds in an hour: 3600000, milliseconds in a min: 60000, a second: 1000
  Hint 4: we only give input values of 1 or 0, so the number returned for an hour will either be 3600000 or 0.  What maths function could we use to return this?  Think about it for some time(s).
  Hint 5: return h * 360000 + m * ? + s + ?;
  */