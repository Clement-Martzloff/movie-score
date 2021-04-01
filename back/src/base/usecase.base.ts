export interface UseCase<In, Out> {
  executeImpl: (DTO: In) => Out | Promise<Out>;
}
