{
  // type 선언 안에서 [A in keyof B]을 통해서 안에 있는 요소들을 돌면서 해당 요소들에 특정 처리를 해줄 수 있다.
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };
  animal.name = "john";

  type Nullable<T> = { [P in keyof T]: T[P] | null };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
