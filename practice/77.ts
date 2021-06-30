{
  // Question Description : https://github.com/xissy/coderpad-interviews/tree/master/p77
  function solution(list: number[][]): number[][] {
    // sort input list
    list.sort((a, b) => {
      if (!Number.isInteger(a[0]) || !Number.isInteger(b[0])) {
        throw Error("A malformed input is found at first item.");
      }
      return a[0] - b[0];
    });

    // compare and merge from start to and
    const result: number[][] = [list[0]];
    for (let i = 1; i < list.length; i++) {
      const lastOfResult = result[result.length - 1];
      const current = list[i];
      if (lastOfResult[1] > current[0] && lastOfResult[1] > current[1]) {
        continue;
      } else if (lastOfResult[1] > current[0]) {
        lastOfResult[1] = current[1];
      } else {
        result.push(current);
      }
    }

    return result;
  }

  console.log(
    solution([
      [1, 3],
      [5, 8],
      [4, 10],
      [20, 25],
    ])
  );
}
