let pupils = document.getElementsByClassName('pupil');
let pupilsArr = Array.from(pupils); 

let pupilStartPoint = -100;
let pupilRange = 200;

let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPossition=0;
let fracXValue=0;

let mouseYEndPoint = window.innerHeight - 300;
let currentYPossition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
    currentXPossition = event.clientX - mouseXStartPoint;
    fracXValue = currentXPossition/mouseXRange;
    // console.log('X = ' + fracXValue );

    currentYPossition = event.clientY;
    fracYValue = currentYPossition / mouseYEndPoint;
    // console.log("Y = " + fracYValue);

    let pupilXCurrentPosition = pupilStartPoint + (fracXValue * pupilRange);
    let pupilYCurrentPosition = pupilStartPoint + fracYValue * pupilRange;

    pupilsArr.forEach((curPupil)=>{
        curPupil.style.transform = `translate(${pupilXCurrentPosition}px, ${pupilYCurrentPosition}px )`;
    })
}
    const windowResize=(event)=>{
        mouseXEndPoint=window.innerWidth;
        mouseXRange=mouseXEndPoint-mouseXStartPoint;

        mouseYEndPoint=window.innerHeight;
    }
window.addEventListener('mousemove', mouseMove);
window.addEventListener("resize", windowResize);