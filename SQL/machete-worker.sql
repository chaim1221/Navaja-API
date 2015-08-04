﻿create schema worker;

create table worker.profile(
    id integer PRIMARY KEY
  , active boolean NOT NULL
  , returnCustomer boolean NOT NULL
  , receiveUpdates boolean NOT NULL
  , name varchar(50) NOT NULL
  , email varchar(254) NOT NULL
  , password varchar(250) NOT NULL
  , phonePrimary varchar(10) NOT NULL
  , phoneSecondary varchar(10)
);

-- navaja workers are individual contractors, who can also be 
-- sole proprietors or businesses. the sky's the limit.
-- however, creating a business with navaja is a paid service.
create table worker.business(
    id integer PRIMARY KEY
  , profileId integer NOT NULL REFERENCES worker.profile
  , name varchar(50) NOT NULL
  , federalTaxId varchar(50) NOT NULL
);

-- a worker does not need an address, but may wish to add one 
-- to complete their profile.
create table worker.address(
    id integer PRIMARY KEY
  , profileId integer NOT NULL REFERENCES worker.profile
  , businessId integer REFERENCES worker.business -- not null = business address
  , active boolean NOT NULL
  , address1 varchar(50) NOT NULL
  , address2 varchar(50)
  , city varchar(50) NOT NULL
  , state varchar(2) NOT NULL
);

-- a list of skills that workers can possess and employers can request
create table worker.skill(
    id integer PRIMARY KEY
  , name varchar(50) NOT NULL
);

create table worker.sponsorship(
    id integer PRIMARY KEY
  , profileId integer NOT NULL REFERENCES worker.profile
  , employerProfileId integer NOT NULL REFERENCES employer.profile
  , workerSkillId integer NOT NULL REFERENCES worker.skill
  , mastery smallint NOT NULL
  , title varchar(50) NOT NULL
  , message varchar(50) NOT NULL
);

-- demographic information is contained in the report schema
