DROP DATABASE IF EXISTS sdc;
DROP TABLE IF EXISTS page_info;
DROP TABLE IF EXISTS amenities;

CREATE DATABASE sdc;

CREATE TABLE page_info(
room_id INTEGER PRIMARY KEY,
room_name TEXT UNIQUE NOT NULL,
city TEXT,
type TEXT,
title TEXT,
max_guests INTEGER,
subtype TEXT,
beds INTEGER,
baths INTEGER,
host_username TEXT,
avatar TEXT,
short_description TEXT,
main_description TEXT,
house_rules TEXT,
house_rules_description TEXT,
cancellations TEXT,
sleeping_arrangements TEXT
);

CREATE TABLE amenities(
id serial PRIMARY KEY,
room_id INTEGER REFERENCES page_info(room_id),
amenity_type TEXT,
name TEXT,
icon TEXT,
explanation TEXT
);

\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_0.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_1.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_2.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_3.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_4.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_5.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_6.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_7.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_8.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_9.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_10.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_11.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_12.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_13.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_14.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_15.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_16.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_17.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_18.csv' WITH (FORMAT csv);
\COPY page_info FROM '../../Volumes/SUSB/HR_SDC/generatedData/Info/info_19.csv' WITH (FORMAT csv);

\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_0.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_1.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_2.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_3.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_4.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_5.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_6.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_7.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_8.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_9.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_10.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_11.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_12.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_13.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_14.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_15.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_16.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_17.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_18.csv' WITH (FORMAT csv);
\COPY amenities(room_id,amenity_type,name,icon,explanation) FROM '../../Volumes/SUSB/HR_SDC/generatedData/Amenities/amenities_19.csv' WITH (FORMAT csv);


















