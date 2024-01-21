# UNIT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Compare and contrast JavaScript and Ruby. What are three things they have in common and what are three differences?

Similarities

1. As OOP languages, JS and Ruby use objects to structure and manipulate data efficiently.
2. Key-value pairs are fundamental in both languages, playing a crucial role in organizing data structures.
3. Arrays, essential for managing ordered collections, are a core feature in both JS and Ruby.

Differences

1. JS is chiefly used for frontend web development, adding interactivity to webpages, whereas Ruby is often favored for server-side development.
2. JS adheres to a more traditional programming syntax, while Ruby's syntax is lauded for its readability and user-friendliness.
3. JS excels in nonblocking operations, making it suited for real-time web apps, while Ruby adopts a more straightforward, linear approach.

Researched answer:

_Similarities_

1. In both JS and Ruby, objects are fundamental, enabling the creation of data structures that mirror real-world entities with properties and behaviors. This enhances code organization and reusability. \* For example, a JS `Gum` class might include properties like `nutritious`, `flavorful`, and `lasting`, and methods like `buyGum` and `gumFeedback`. An instance of this class allows detailed specification and state changes, such as tracking purchases. Similarly, a Ruby `Gum` class uses `attr_accessor` for property access, an `initialize` method for setup, and methods like `buy_gum` and `gum_feedback` for state management.
2. JS uses objects and Ruby uses hashes to organize data into key-value pairs, a structure that's vital for efficient data storage and retrieval using unique identifiers, like user IDs or product SKUs.
3. Arrays in both JS and Ruby are critical for storing ordered lists, such as usernames or product prices. They facilitate tasks like iterating over data sets or managing collections of elements.

_Differences_

1. JS is chiefly used for client-side scripting in web browsers, vital for interactive webpages and frontend development. Ruby, however, is more common in backend development, bolstered by frameworks like Ruby on Rails that simplify database interactions and server-side logic.
2. JS's syntax, versatile yet similar to traditional languages like C and Java, tends to be verbose. Inversely, Ruby's syntax is renowned for its readability and elegance, offering a more natural and expressive coding experience.
3. JS, especially with Node.js, is adept at asynchronous operations, enabling efficient nonblocking IO, essential for real-time apps. \* Async operations enable the handling of multiple tasks in a single-threaded event loop, different from multi-threading in other languages. This approach allows background processing of time-consuming tasks, like data fetching, without halting the rest of the code. Key to creating responsive, multitasking apps, JS chiefly uses callback functions for these operations. \* Async operations are essential for nonblocking user interfaces, allowing continued user interaction during background processes like data loading. This enhances responsiveness, contrasting with blocking IO models where the app is inactive until IO tasks finish.

4. What does it mean to implement a TDD workflow?

Your answer: Test-Driven Development (aka Test-Driven Design) workflow is like plotting a route on a GPS before embarking on a fun trip. First, I write tests to map out my desired destination, or in coding terms, the intended functionality. Then, I write just enough code to arrive there--to pass the tests. Finally, I refine my code, much like optimizing a travel route, ensuring it's not only reaching the destination but doing so efficiently and reliably.

Researched answer: TDD workflow is a proactive approach to software development where tests are written before the actual code. This strategy ensures a robust, adaptable, and reliable codebase, where each function or module performs its intended task both clearly and efficiently. Here, tests are automated, meaning they run independently to verify the code's functionality and behavior. This automated testing ensures that the code meets its requirements and maintains its integrity over time.

3. What is a block in Ruby?

Your answer: Like a secret ingredient given to a chef (method), a Ruby block is a set of instructions giftwrapped in either `{}` or `do...end` keywords that the chef can use to spice things up.

Researched answer: A Ruby block is a segment of code, akin to an anonymous function, that is enclosed and can be passed to methods as an argument. These blocks are versatile: they can receive arguments, return values, and encapsulate specific instructions or logic. This makes them ideal for a wide range of tasks, such as creating reusable and flexible code for data filtering. \* For example, in filtering an array of user records, a block can define unique criteria for each use case. It serves as a customizable part of the filtering process, allowing for different filtering conditions without altering the method itself, which provides the overarching filtering framework.

4. STRETCH: What is a version manager?

Answer: It's like a coding time machine, allowing me to switch effortlessly between different versions of programming languages like Ruby or Node.js. It's key for project isolation, meaning it keeps each project's environment and dependencies separate, ensuring that changes in one project don't impact another. This makes it invaluable in managing multiple software versions on a single system, providing compatibility and preventing conflicts across diverse project requirements.

## Looking Ahead: Terms for Next Unit

Research and define the following terms.

1. Database migrations: Are scripts that manage changes to a database schema over time, akin to an upgrade plan for a database. They allow for adding, removing, or altering tables and fields, with version control for incremental changes and the ability to revert to previous schema versions if needed.

2. Model validations: Are rules applied to data models to ensure the accuracy and consistency of data entering the database. They validate data against specific criteria, like ensuring email addresses are valid or usernames are unique, preventing incorrect or duplicate data entry.

3. Params: Short for parameters, represent data sent to a server from a web client. This data can include URL query strings or form data. Specifically, in a POST (Power-On Self-Test) request--a method used in HTTP (Hypertext Transfer Protocol) to submit data to a server, such as in a form submission--params are used to package and convey this data. \* For example, when a user logs in to a website, their login credentials (username and password) are sent as params in a POST request to the server for authentication.
