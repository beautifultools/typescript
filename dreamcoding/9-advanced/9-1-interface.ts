{
  // ineterface와 type의 차이

  // 기능적인 차이
  // interface : interface만 중복 선언해서 merge가 가능함.
  // type : type만 계산된 값을 넣을 수 있음. 원시 타입, 유니온 타입을 지정할 수 있음.

  // 예전에는 interface만이 가능한 것들이 많아 interface 사용을 추천하였지만 현재는 type이 많이 발전해 기능상의 거의 비슷함
  // 다른 곳에서 가져다가 해당 내용을 구현할 규격을 의미하는 것이면 interface, 데이터를 담을 공간을 의미하는 것이라면 type을 쓰는 것이 의미적으로 좋음.

  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // object ★
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class ★
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }

  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
  }

  // Extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // 😆 only interfaces can be merged.
  interface PositionInterface {
    z: number;
  }

  // type PositionType {
  // }

  // 😆 Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person["name"]; // string

  type NumberType = number;
  type Direction = "left" | "right";
}
