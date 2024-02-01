export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const waitReject = (ms: number) => new Promise((resolve, reject) => setTimeout(reject, ms));
