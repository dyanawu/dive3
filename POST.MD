# Project Post Mortem

## Approach and Process

1. What in my process and approach to this project would I do differently next time?

_I might have spent a little more time thinking about the design and exploring something like CSS mixins to avoid what turned out to be a lot of repeated styling classes, even though I had React component classes._

2. What in my process and approach to this project went well that I would repeat next time?

_I felt I scoped it decently - I managed to see the size of the data I would be dealing with early enough that I was able to cut parts and still have a functional vertical slice. Deciding to go MVC from the start was also a good idea._

## Code and Code Design

1. What in my code and program design in the project would I do differently next time?

_I ended up having controllers use multiple models and couldn't tell if that made sense, so I would have thought about my models a bit more perhaps._

2. What in my code and program design in the project went well? Is there anything I would do the same next time?

_I managed to have a relation that should be easy to extend and turned out to be somewhat modular._

  For each, please include code examples.
  1. Code snippet up to 20 lines.

``` javascript
// models/trips.js
const Trip = require('../models/trips');
const Country = require('../models/countries');
const Destination = require('../models/destinations');
const Operator = require('../models/operators');
const Dives = require('../models/dives');

const listTripDives = async (req, res) => {
  let tripName = await Trip.getTripName(req.params.tripid);
  let results = await Dives.getDivesByTrip(req.params.tripid);
  res.locals.tripid = req.params.tripid;
  res.locals.dives = results.rows;
  res.locals.tripname = tripName;
  res.render('tripdivelist');
};

const showForm = async (req, res) => {
  const results = await Promise.all([
      Country.getAll(),
      Destination.getAll(),
      Operator.getAll()
  ]);

  res.locals.countries = results[0].rows;
  res.locals.destinations = results[1].rows;
  res.locals.operators = results[2].rows;

  res.render('tripform');
};
```

2. Code design documents or architecture drawings / diagrams
     - _refer [ERD](https://github.com/dyanawu/sei-proj-dive3/blob/master/docs/dive3_erd.jpg)_

## WDI Unit 2 Post Mortem
1. What habits did I use during this unit that helped me?

_I got better at committing more frequently and at context-jumping less frequently._

2. What habits did I have during this unit that I can improve on?

_I would still like to improve on having each commit be a partial working state and will practise that - probably using more placeholders for information, etc._

3. How is the overall level of the course during this unit? (instruction, course materials, etc.)

_I had a lot of fun this unit learning more server-side stuff, but look forward to having frontend frameworks to help with more dynamic/stateful frontends._
