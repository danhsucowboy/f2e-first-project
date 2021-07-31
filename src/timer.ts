export default function Timer(callback:(arg: any) => void, delay:number){
    let timerId:number, start:number, remaining:number = delay

    let pause = function():void {
        window.clearTimeout(timerId)
        remaining -= Date.now() - start
    }

    let resume = function():void {
        start = Date.now()
        window.clearTimeout(timerId)
        timerId = window.setTimeout(callback, remaining)
    }

    resume()
} 