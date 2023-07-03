
# Question Answer Section
1> What is NPM?
- NPM full form is not there.

2>If NPM full form is not there then what it is?
- NPM manages packages but it does not stand for node package manager.

3>what is package.json file?
- Its a configuration for npm.Its keep track of one version installed in our system.

4>What is bundler?
- In our project there is separate html,css and js/ts files are there.To make it one file and sent to production is the work of a bundler.

5>what is the work of a bundler?
- It packages our App correctly and shiped it to production.

6>What is dev dependencies and normal dependencies?
- When we are developing our app in the developement phase then dev dependencies is required and normal dependencies is required in production phase.
example command: --->
dev dependencies =======> npm install -D parcel
normal dependencies =======> npm install parcel

7>What is package-lock.json file?
- Package-lock.json keep track of exact version that are install in our application.

8>What is node_module?
- node_module is like a data base, it contain the data of the dependancey/packages that our project needs.

9> Should i push my package-lock.json and package.json file to github?
- Yes.

10> Why should we push our package-lock.json & package.json to github but not node_modules?
- Because it make a note of each dependency and its version and we can regenerate the node_modules(we have exact version and dependany inside our package.json and package-lock.json) thats why we are pushing package-lock.json & package.kson to github and not push our node_modules.

11> Why CDN link is not a good way to bring React and ReactDOM into our project?
- By using CDN links we need make network call to get react library in our app. If the react version is change the we need to change the the version of React inside CDN links thats why we use node_modules.We can install it using npm command.

=======================================================================================================================================
# Importing Notebook
- caret ---> ^ (Suppose we have parcel of 2.2.1 version is there and if there is any minor update happen then its will automatically update the version to 2.2.2)
- tilde ---> ~ (Suppose we have parcel of 2.2.1 version is there and if there is any major update happen then its will automatically update the version to 3.2.1)
- ** Its is recommended to use caret(^);
- ** If we want the exact version and dont want to upgrade then we can remove caret(^) or tilde(~).

- ** Suppose we install node_modules for percel but there are other dependencies that are installed inside node_modules. Beacuse percel has its own dependencies and that dependencies also its own dependencies.This is structured called as Transitive dependency.

- ** What ever we regenerate we cannot put it on git.

- ** if we want install our package we can use npm command but if want to execute a particular package we can use npx command.

- ** CDN link is not a good way to bring React and ReactDOM into our project.


=======================================================================================================================================
# PARCEL
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
