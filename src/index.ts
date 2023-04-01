export type Result<T, E> = Ok<T> | Err<E>;

interface ResponseEnum {
   isOk: () => boolean;
   isErr: () => boolean;
}

export class Ok<T> implements ResponseEnum  {
    constructor(public value: T) {}

    isOk(): this is Ok<T> {
        return true;
    }

    isErr(): this is Err<never> {
        return false;
    }
}

export class Err<E> implements ResponseEnum {
    constructor(public error: E) {}

    isOk(): this is Ok<never> {
        return false;
    }

    isErr(): this is Err<E> {
        return true;
    }
}