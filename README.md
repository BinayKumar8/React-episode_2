# How UI application fetch the data from backend
- There is two approches to do it.
- 1.When our app load
- - Load ==> API ==> Render
- 2.As soon as page loads will render the UI.
- - Load ==> Render ==> API ==> Render
- In React we will always use the 2nd approch
# useEffect()
- useEffect() will call after our component is rendered.
- There is two argument inside the useEffect() hook 1.call back function 2.empty array.

# Extra
- Shimmer UI Insted of loader
# Why did we create/need state variable ?
- when we try use javascript to change something in out component dynamically then it will not update directly in UI.In this case state variable comes to the picture.