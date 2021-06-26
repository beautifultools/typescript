{
  const obj = {
    name: "john",
  };

  // 오브젝트 안의 프로퍼티를 접근할 때는 .으로 특정 이름의 키를 접근할 때는 ['']로 접근
  obj.name; // ellie
  obj["name"]; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
    species: string;
  };

  type Name = Animal["name"]; // string
  const text: Name = "hello";

  type Gender = Animal["gender"]; //'male' | 'female'
  type Species = Animal["species"];
  const species: Species = "2";

  type Keys = keyof Animal; // 'name' | 'age' | 'gender' | 'species'
  const key: Keys = "species";

  type Key2 = typeof key;
  const key2: Key2 = "species";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "ellie",
    gender: "male",
  };
}
