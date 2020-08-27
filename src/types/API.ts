export type ApiCallFunc<Parameters, ReturnType> = (
  body: Parameters,
) => Promise<ReturnType | undefined>;
