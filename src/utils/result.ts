type ResultSuccess<T> = {
  ok: true
  data: T
}

type ResultFailure<E extends string> = {
  ok: false
  error: E
}

type Result<T, E extends string> = ResultSuccess<T> | ResultFailure<E>

export { Result, ResultSuccess, ResultFailure }
