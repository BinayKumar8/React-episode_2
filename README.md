- First we need to export the component and then we can import it.
- Never put any cord file in your component file.
- Its good to have create constant in capital letter and sneek case.
** React can do faster dom manipulation or efficient DOM manipulation.
** Can i use named export along with default export?

# Export
- First way to export the list/component by using export deafult componentName/listName.(DEFEAULT EXPORT)
- Second way to export using name.(NAME EXPORT).
- In a single file if there is two or more things to export we can use name export.
- In one file we have one deafult export.
- When ever we import a name export we can write it like import { exportname }.
# React Hook
- It is normal javascript function.
- There are 2 very important hooked present in React.
- 1.useState() ==> super powerful react variable. // we have to import it like named import.
    // It maintain the state of the the component.
- 2.useEffect()
- By using const [nameofthevariable] = useState(); we can create it.
-  ** When ever a state variable update/changes React re-render the component.

# Virtual DOM
- Virtual DOM is the representation of actual DOM.
- React virtual DOM is an Object.

# Dif Algorithim
- It find out the difference between old virtual DOM and new virtual DOM.
- After it found the difference then it will update the actual DOM accordingly.

# Reconciliation Algorithm(React Fiber)
- The algorithm React uses to diff one tree with another to determine which parts need to be changed.