document.addEventListener('DOMContentLoaded', () => {
    /**
     * For multiple todos
     */
  //document.querySelectorAll('.todo').forEach(container => todo(container))

  const container = document.querySelector('.todo')!;
  todo(container);
});

function todo(container: Element) {
  container.innerHTML = `
<h2> ToDo </h2>
<ul></ul>
<h3>0 Done</h3>
<form>
<input type='text' name='text' />
<button type='submit'>Add</button>
</form>`;

  const form = container.querySelector<HTMLFormElement>('form')!; //https://stackoverflow.com/questions/40349987/how-to-suppress-error-ts2533-object-is-possibly-null-or-undefined
  const list = container.querySelector<HTMLUListElement>('ul')!;
  const done = container.querySelector<HTMLHeadingElement>('h3')!;

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const inputs = form.elements  as HTMLFormControlsCollection;
     const input  = <HTMLInputElement>inputs["text"]  
   //const input =  (HTMLFormElement as { [key: string]: any })["text"] as HTMLFormElement
     //const [,,inp] = inputs 
    console.log(input);
    addItem(input.value);
    form.reset();
  });

  function addItem(itemText: string) {
    const item = document.createElement('li');
    item.appendChild(document.createTextNode(itemText));

    /**
     * construct a checkbox
     */
    const check = document.createElement('input');
    check.type = 'checkbox' as string;

    /**
     * update the count
     */

    check.onchange = recount; //OR  check.addEventListener('change', () => recount())

    item.appendChild(check);

    /**
     * Add btn for deletion
     */
    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.addEventListener('click', () => {
      list.removeChild(item);
      recount();
    });

    item.appendChild(button);

    /**
     * Append into the DOM tree
     */
    list.appendChild(item);
  }

  function recount() {
    const count = list.querySelectorAll('input:checked').length; //get all that is checked
    done.textContent = `${count} Done`;
  }
}
