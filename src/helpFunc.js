export function getTimer(duration){
    return new Promise(resolve=> {
        setTimeout(resolve, duration);
    })
}
