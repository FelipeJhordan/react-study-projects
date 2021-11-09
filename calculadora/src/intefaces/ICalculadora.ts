export default interface ICalculadora {
    result: number,
    operation: string,
    history: ICalculo[]
}

interface ICalculo {
    firstValue: number,
    nextValue: number,
    oeprador: string,

}