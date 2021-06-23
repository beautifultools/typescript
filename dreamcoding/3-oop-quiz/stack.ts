interface StackItem<T> {
  next: StackItem<T> | undefined;
  value: T;
}

class Stack<T> {
  current: StackItem<T> | undefined;
  constructor() {}

  push(value: T): void {
    if (this.current !== undefined) {
      this.current = {
        next: this.current,
        value,
      };
    } else {
      this.current = {
        next: undefined,
        value,
      };
    }
  }

  pop(): T | undefined {
    const popValue = this.current?.value;
    this.current = this.current?.next;
    return popValue;
  }
}

const stack: Stack<string> = new Stack<string>();

stack.push("v1");
stack.push("v2");

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
