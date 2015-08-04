create schema employer;

create table employer.profile(
    id integer PRIMARY KEY
  , active boolean NOT NULL
  , returnCustomer boolean NOT NULL
  , receiveUpdates boolean NOT NULL
  , name varchar(50) NOT NULL
  , email varchar(254) NOT NULL
  , password varchar(250) NOT NULL
);

create table employer.business(
    id integer PRIMARY KEY
  , profileId integer NOT NULL REFERENCES employer.profile
  , name varchar(50) NOT NULL
  , federalTaxId varchar(50) NOT NULL
);

-- an employer must have an address record to hire a worker
create table employer.address(
    id integer PRIMARY KEY
  , profileId integer NOT NULL REFERENCES employer.profile
  , businessId integer REFERENCES employer.business -- not null = business address
  , active boolean NOT NULL
  , address1 varchar(50) NOT NULL
  , address2 varchar(50)
  , city varchar(50) NOT NULL
  , state varchar(2) NOT NULL
  , phonePrimary varchar(10) NOT NULL
  , phoneSecondary varchar(10)
);

create table employer.review(
    id integer PRIMARY KEY
  , profileId integer NOT NULL REFERENCES employer.profile
  , rating smallint NOT NULL
  , culture varchar(5) NOT NULL
  , title varchar(50) 
  , message varchar(200) 
);

