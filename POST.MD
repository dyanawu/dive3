## Project Post Mortem
Post mortems are important to understand about what happened in a project and actively think about what you learned.

Post-mortems are meant to be a blame-less space open to objective conversation about what went well and what could be improved.

Even in the examples below, where tens of millions of dollars could be lost, the best approach is to think through the series of events that led to the outcome.

Large mistakes are almost never the fault of the developer, but of the sytems and processes in place to prevent errors and problems.

[https://github.com/danluu/post-mortems](https://github.com/danluu/post-mortems)

https://blog.codinghorror.com/the-project-postmortem/

### What to Bring
Please answer the following questions. Take at least 30 minutes to prepare.

#### Approach and Process

1. What in my process and approach to this project would I do differently next time?

I might have spent a little more time thinking about the design and exploring something like CSS mixins to avoid what turned out to be a lot of repeated styling classes, even though I had React component classes.

2. What in my process and approach to this project went well that I would repeat next time?

I felt I scoped it decently - I managed to see the size of the data I would be dealing with early enough that I was able to cut parts and still have a functional project. Deciding to go MVC from the start was also a good idea.

--

#### Code and Code Design

1. What in my code and program design in the project would I do differently next time?

I ended up having controllers use multiple models and couldn't tell if that made sense, so I would have thought about my models a bit more perhaps.

2. What in my code and program design in the project went well? Is there anything I would do the same next time?

I managed to have a relation that should be easy to extend and turned out to be somewhat modular.

  For each, please include code examples.
  1. Code snippet up to 20 lines.
  2. Code design documents or architecture drawings / diagrams
     - refer [ERD](https://github.com/dyanawu/sei-proj-dive3/blob/master/docs/dive3_erd.jpg)

#### WDI Unit 2 Post Mortem
1. What habits did I use during this unit that helped me?

I got better at committing more frequently and at context-jumping less frequently.

2. What habits did I have during this unit that I can improve on?

I would still like to improve on having each commit be a partial working state and will practise that - probably using more placeholders, etc.

3. How is the overall level of the course during this unit? (instruction, course materials, etc.)

I had a lot of fun this unit learning more server-side stuff, but look forward to having frontend frameworks to help with more dynamic/stateful frontends.
