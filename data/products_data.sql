Use products;

CREATE TABLE productsData (
ProductID varchar(255),
ImageUrl varchar(255),
ProductDescription varchar(255),
Category varchar(255),
Price int
);

select * from productsData;

INSERT INTO productsData (ProductID, ImageUrl, ProductDescription, Category, Price)
VALUES ('P001', 'images/formal shirt - men.jfif', 'Formal shirt for Men', 'Men',599),
('P002', 'images/casual shirt - men.jfif', 'Casual shirt for Men', 'Men',799),
('P003', 'images/round neck tshirt - men.jfif', 'Round neck T-shirt for Men', 'Men',450),
('P004', 'images/jacket men.jfif', 'Jacket for Men', 'Men',1500),
('P005', 'images/kurta - men.jfif', 'Kurta for Men', 'Men',999),
('P006', 'images/formal shirt women.jfif', 'Formal shirt for Women', 'Women',599),
('P007', 'images/casual top women.jfif', 'Casual top for Women', 'Women',750),
('P008', 'images/kurta - women.jfif', 'Kurta for Women', 'Women',1000),
('P009', 'images/saree.jfif', 'Saree for Women', 'Women',1500),
('P010', 'images/western dress.jpg', 'Western for Women', 'Women',2000);


