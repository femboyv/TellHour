/**
    * @name TellHours
    * @description Show the time at the top of the screen.
    * @version 0.0.1
    * @author Louloute
    */



function tellhour(){
    const second= 1000
    const minute = 1000 * 60;
    const hour = minute * 60;
    const d = new Date();
    /*set miliseconde from 1970 */
    let truesecond= Math.round(d.getTime() / second % 60);
    let trueminute = Math.round(d.getTime() / minute % 60);
    let truehour = Math.round(d.getTime() / hour % 12);
    return truehour +":" + trueminute +":" + truesecond
    }
console.log(tellhour())
document.getElementsByClassName("wordmark_a934d8")==tellhour()