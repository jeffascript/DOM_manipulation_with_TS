import './style.css'


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

pop(){
    this.top -= 1;
    
}

}

const resp = new Stack()

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
<p> ${resp.push('I am here')}</p>
<p> ${resp.peek } ==> pushed!  </p>
<p> ${resp.pop()}</p>

<p> ${resp.peek } ==> popped!!! </p>
`

