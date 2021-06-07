class Stack {
  top: number;
  items: Record<string, unknown>;

  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value: string) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    this.top -= 1;
  }
}

describe('My Stack', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created Empty', () => {
    expect(stack.top).toBe(-1);

    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push('booom!');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('booom!');
  });

  //   it.todo('can pop off');

  it('can pop off', () => {
    stack.pop();
    expect(stack.top).toBe(-2);
    expect(stack.items).toEqual({});
    expect(stack.peek).toBe(undefined);
  });
});
