{
  interface SparseArray {
    init(arr: number[], size: number): void;
    set(i: number, val: number): void;
    get(i: number): number;
  }

  class SparseArrayImpl implements SparseArray {}
}
