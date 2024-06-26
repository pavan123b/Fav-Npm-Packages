CREATE DATABASE favnpmpkgs;

CREATE TABLE favlist(
    _id SERIAL PRIMARY KEY,
    pkgname VARCHAR(255),
    reason VARCHAR(1000)
);