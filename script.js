// Start------ How to add milliseconds as function in setimeout.

const myfun = () => {
  let p_tm = new Date();
  let p_hrs = p_tm.getHours();
  let p_mints = p_tm.getMinutes();
  let x = document.getElementById("time").value;
  x.toString();
  let input_hrs = 0;
  let input_minutes = 0;
  for (let i = 0; i < x.length; i++) {
    if (i == x.indexOf(":")) {
      let y = x.slice(0, i);
      Number.parseInt((input_hrs += y));
    }
  }
  for (let i = 0; i < x.length; i++) {
    if (i == x.indexOf(":")) {
      let z = x.slice(i + 1, x.length);
      Number.parseInt((input_minutes += z));
    }
  }
  let countdown;
  if (input_hrs < p_hrs && input_minutes < p_mints) {
    // console.log(input_minutes - p_mints + 60);
    // console.log(input_hrs - p_hrs + 23);
    countdown =
      (input_hrs - p_hrs + 23) * 3600000 +
      (input_minutes - p_mints + 60) * 60000;
  } else if (input_hrs > p_hrs && input_minutes < p_mints) {
    // console.log("hrs" + (input_hrs - p_hrs - 1));
    // console.log(input_minutes - p_mints + 60);
    countdown =
      (input_hrs - p_hrs - 1) * 3600000 +
      (input_minutes - p_mints + 60) * 60000;
  } else if (input_hrs < p_hrs && input_minutes > p_mints) {
    // console.log(input_hrs - p_hrs + 24);
    // console.log(input_minutes-p_mints);
    countdown =
      (input_hrs - p_hrs + 24) * 3600000 + (input_minutes - p_mints) * 60000;
  } else if (input_hrs > p_hrs && input_minutes > p_mints) {
    // console.log("hrs" + (input_hrs - p_hrs));
    // console.log(input_minutes-p_mints);
    countdown =
      (input_hrs - p_hrs) * 3600000 + (input_minutes - p_mints) * 60000;
  } else if (input_hrs == p_hrs && input_minutes > p_mints) {
    // console.log(input_minutes-p_mints);
    countdown = (input_minutes - p_mints) * 60000;
  } else if (input_hrs == p_hrs && input_minutes < p_mints) {
    // console.log(input_hrs - p_hrs + 23);
    // console.log(input_minutes - p_mints + 60);
    countdown =
      (input_hrs - p_hrs + 23) * 3600000 +
      (input_minutes - p_mints + 60) * 60000;
  }
  console.log(countdown);
  return countdown;
};
// console.log(countdown);
function myfun2() {
  setTimeout(function () {
    document.getElementById("alarm").style.display = "inline-block";
    document.getElementById("btn2").style.display = "inline-block";
    let audio = new Audio("alarm audio.mp3");
    audio.play();
    setTimeout(function(){
    document.getElementById("alarm").style.display = "none";
    },5000)
  }, myfun());
}
function myfun3() {
  alert('Your snooze time is 1 minute')
  setTimeout(function () {
    document.getElementById("alarm").style.display = "inline-block";
    let audio = new Audio("alarm audio.mp3");
    audio.play();
    setTimeout(function(){
      document.getElementById("alarm").style.display = "none";
      },5000)
  }, 60000);
}
// clearTimeout(myfun2(),5000);
// const alert=()=>{
//   document.getElementById('time').innerHTML+='Done';
// }
