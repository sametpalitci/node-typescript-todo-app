export default function controls(...args: string[]) {
    return args.reduce(
        (previousValue, currentValue) => previousValue && currentValue
    )
        ? true
        : false;
}