create table nhs2011 (Geo_Code integer, Prov_Name text, CMA_CA_Name text, Geo_Type text, GNR real, Topic text, Characteristic text, Note integer, Total integer, Flag_Total integer, Male integer, Flag_Male integer, Female integer, Flag_Female integer);
.separator ","
.import 99-004-XWE2011001-201.csv nhs2011

create table census2011 (Geo_Code integer, Prov_Name text, CMA_CA_Name text, Geo_Type text, Topic text, Characteristic text, Note integer, Total integer, Flag_Total integer, Male integer, Flag_Male integer, Female integer, Flag_Female integer, Extra text);;
.import 98-316-XWE2011001-201.CSV census2011

