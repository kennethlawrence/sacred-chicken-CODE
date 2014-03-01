create table nhs2011 (Geo_Code integer, Prov_Name text, CMA_CA_Name text, Geo_Type text, GNR real, Topic text, Characteristic text, Note integer, Total integer, Flag_Total integer, Male integer, Flag_Male integer, Female integer, Flag_Female integer);
.separator ","
.import nhs2011.csv nhs2011

create table census2011 (Geo_Code integer, Prov_Name text, CMA_CA_Name text, Geo_Type text, Topic text, Characteristic text, Note integer, Total integer, Flag_Total integer, Male integer, Flag_Male integer, Female integer, Flag_Female integer, Extra text);;
.import census2011.csv census2011

