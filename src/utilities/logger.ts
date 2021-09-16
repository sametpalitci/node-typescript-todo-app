export default function logger(log: string, status: string = "log") {
    const currentDate = new Date().toUTCString();
    const outputLog = `${log} | ${currentDate}`;
    const DEVELOPMENT_MODE = process.env.DEVELOPMENT === "true";

    if (DEVELOPMENT_MODE) return;

    switch (status) {
        case "warn":
            console.warn(outputLog);
        case "error":
            console.error(outputLog);
        default:
            console.log(outputLog);
            break;
    }
}
