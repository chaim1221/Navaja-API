CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create schema work;

create table work.order(
    id uuid PRIMARY KEY
  , englishLevelRequired smallint NOT NULL
  , workerSkillId integer NOT NULL REFERENCES worker.skill
  , masteryRequired smallint NOT NULL
  , timeNeeded timestamp NOT NULL
  , proposedWage decimal NOT NULL
);

create table work.offer (
    id integer PRIMARY KEY
  , orderId uuid REFERENCES work.order
  , workerProfileId integer REFERENCES worker.profile
  , meetsSponsorshipRequirements boolean NOT NULL
  , timePromised timestamp NOT NULL
  , counterOffer decimal NOT NULL
);

create table work.assignment(
    id integer PRIMARY KEY
  , orderId uuid REFERENCES work.order
  , workerProfileId integer REFERENCES worker.profile
  , distanceFromWorker decimal NOT NULL
  , transportationMethodId integer NOT NULL
  , acceptedWage decimal NOT NULL
);

-- demographic information is contained in the report schema
