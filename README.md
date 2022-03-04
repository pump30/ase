# Cloud Development ASE Prerequiste Test for Node.js

<!-- _Disclaimer: We are [counting page hits](https://github.wdf.sap.corp/cloud-native-dev/usage-tracker) using a cookie to distinguish returning & new visitors._
<img src="https://cloud-native-dev-usage-tracker.cfapps.sap.hana.ondemand.com/pagehit/cc-cloud-dev-fundamentals/prerequisite-test-nodejs/1x1.png" alt="" height="1" width="1"> -->

## 🎯 Why?

**A**gile **S**oftware **E**ngineering (Node.js) is a training for Development roles which have good knowledge in Node.js and its ecosystem.

This little test, that should not take much time for a skilled programmer, gives you a first feedback if you have the required knowledge and skills to attend the training.

## 🤔 What if I don't know what to do or can't solve it?

If you don't have all the skills yet don't worry, you can learn them.

Have a look at the [basics](https://pages.github.tools.sap/cloud-curriculum/materials/stack-basics/nodejs/).

Also have a look at [Modern JavaScript Features](https://pages.github.tools.sap/cloud-curriculum/materials/modern-lang-feat/nodejs/) and [Asynchronous Programming](https://pages.github.tools.sap/cloud-curriculum/materials/async/nodejs/).

## 🧰 Technical Prerequisites

You will need a few things in order to work with the exercises.

The bare minimum is:

- [**Git** client](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

- [**Node.js** LTS (>=16) with **NPM** (>=8)](https://nodejs.org/en/download/)

  - If you need to manage *multiple* versions of **`node`** and / or **`npm`**, consider using a [Node Version Manager](https://github.com/npm/cli#node-version-managers) or [Developing inside a Container](https://pages.github.tools.sap/cloud-curriculum/materials/dev-containers/nodejs/).

- **IDE** of your choice

  - We recommend [Visual Studio Code](https://code.visualstudio.com/) with [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extensions installed for the best developer experience throughout the exercises.

## 💻 Exercise

### What do I need to do here?

For this prerequiste test you have to implement a [`Developer`](#2-implement-the-developer-class) class and a [`hackathon`](#3-implement-the-hackathon-function) function.

To do so please follow the detailed steps below.

### 1. Clone Repository & Import

:exclamation:**Please do NOT FORK, and do NOT OPEN PULL REQUESTS on this repo** :exclamation:

1. Clone this repository to your local machine

1. Open it in your preferred IDE

1. Install the development dependencies

:warning: **Do not rename or move the files in this project** :warning:

### 2. Implement the Developer class

1. Create and export (default) a [Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) `Developer` in file `lib/developer.js`.

1. The `constructor` must accept a single [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) with two properties: `name` and `language`. Both of type [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

    Accepted values for `language` are: `nodejs`, `java`, and `python`

1. For both properties the class should provide respective getter and setter methods:

    - `name`: `getName()`, `setName(name)`

    - `language`: `getLanguage()`, `setLanguage(language)`

1. The class must provide a method `code`, which

    - does not accept any arguments and

    - returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which **resolves** with a [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

    The resolved [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) depends on the value of the `name` and `language` properties of the `Developer` instance:

    - `name`: `Nicole`, `language`: `nodejs`

      >`console.log("Hello, Nicole!")`

    - `name`: `John`, `language`: `java`

      >`System.out.println("Hello, John!")`

    - `name`: `Pete`, `language`: `python`

      > `print("Hello, Pete!")`

    - For any other `language`, e.g. `abap`, `swift`, `rust` etc., the returned [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) should **reject** with an [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) instance with a respective [message](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message):

        - `Unsupported language: abap`,

        - `Unsupported language: swift`,

        - `Unsupported language: rust`,

        - etc.

1. Run the tests 🧪 to verify your implementation: `npm run test:developer`

### 3. Implement the hackathon function

1. Create and export (default) a function in file `lib/hackathon.js`.

1. The function should accept a single argument `developers`, which is an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of `Developer` instances.

1. It should return a[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which **resolves** with a single [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

1. It should be the output of each indivual call to `developer.code()` of the provided `developers` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), concatened with a new line (`\n`):

    >console.log("Hello, Nicole!") <br>
    System.out.println("Hello, John!") <br>
    print("Hello, Pete!")

1. If any call to `developer.code()` rejects with an [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error), that error must be catched and the error's [message](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message) must be appended:

    >console.log("Hello, Nicole!") <br>
    System.out.println("Hello, John!")` <br>
    Unsupported language: abap <br>
    print("Hello, Pete!") <br>

1. Run the tests 🧪 to verify your implementation: `npm run test:hackathon`

### 4. Commit and Push your Solution

1. Run **all** the tests :test_tube: to verify your implementations: `npm run test`

1. Go to <https://fun-onboarding.internal.cfapps.sap.hana.ondemand.com/> (SAP NETWORK ONLY).

    - Enter your `C/D/I-Number`, and select *Programming Language*: `Node.js`.

    - Then press `Register` to **gain write permissions on this repository**.

1. Commit your changes and push them to a **remote branch** on **this repository** that matches your `C/D/I-Number` (e.g. d055151 or i234212)

    (Note: The branch will be automatically *deleted* after *each* build, otherwise you could see each others solutions :trollface:)

### 6. Check Results

After pushing to this repository as per the previous step, a build will be triggered that takes ~2 minutes to finish.

In case of errors you will be. notified via email. Don't worry: You have as many attempts as you need!

<details>
<summary>What exactly does the build do?</summary>

The build will:

- Run your tests
- Add and run smoke tests that we provide, to make sure the implementation is correct :wink:
- Delete your remote branch (the branch you pushed to this repo) no matter if the solution is correct or not

</details>

1. Check the [outcome of the build here](https://github.tools.sap/cloud-curriculum/ase-prerequisite-test-nodejs/actions). There should be a pipeline run with your UserId (since it is the branch name) and your commit message.
1. If the pipeline is successful :white_check_mark: you passed, if it fails :x: there are still some issues you need to fix - in this case check the pipeline logs for the reason.
(after fixing repeat [4. Commit and Push to Personal Branch](#5-commit-and-push-to-personal-branch) and check again)

## 📣 Questions/Feedback

We value your feedback and your questions, and please use [the slack channel #fundamentals-prerequisite-test](https://sap-cloud-enablement.slack.com/archives/C02KFC2UAFN) to let us know!

:octocat: **Happy Coding** :octocat:
