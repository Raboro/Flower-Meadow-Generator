CREATE TABLE IF NOT EXISTS FLOWERS(
    id INT NOT NULL,
    name varchar(50) NOT NULL,
    category varchar(50) NOT NULL,
    stem_color varchar(50) NOT NULL,
    stem_height smallint NOT NULL,
    stem_width smallint NOT NULL,
    stem_thrones boolean NOT NULL,
    petal_color varchar(50) NOT NULL,
    petal_height smallint NOT NULL,
    petal_width smallint NOT NULL,
    petal_thrones boolean NOT NULL,
    PRIMARY KEY (id)
);