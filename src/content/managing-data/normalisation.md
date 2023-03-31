---
published: true
title: Normalisation
modified: 2023-03-30T01:40:00.000Z
preview: null
pagination: /Managing Data/Normalisation
---

*[1NF]: First Normal Form
*[2NF]: Second Normal Form
*[3NF]: Third Normal Form

# Normalisation

Normalisation is a process. We use it in order to identify and eliminate data anomalies and redundancies to improve the integrity and storage of data in a relational database.


## Unnormalised data

Unnormalised data can lead to anomalies (insert, update, delete).

We will use the following example table:

<!-- |EmployeeId|EmployeeName|DateOfBirth|DepartmentCode|DepartmentName|ProjectCode|ProjectDescription|ProjectSupervisor|
|-|-|-|-|-|-|-|-|
|1|John Doe|1/1/1970|SLS|Sales|PR1|Project 1|Adam Goode| -->


|OrderId|OrderDate|CustomerId|CustomerName|CustomerAddress|CityStatePostcode|ProductId|ProductDescription|Quantity|ProductPrice|
|-|-|-|-|-|-|-|-|-|-|
|5258|27/3/2013|32|Computer Training Center|1 Plenty Rd|Bundoora, Victoria, 3086|P123<br>P234<br>P345|Bookcase<br>Cabinet<br>Table|4<br>2<br>1|200<br>500<br>150|



## First Normal Form (1NF)

For a database schema to be in 1NF, it must fit the following criteria:

- A valid primary key exists.
- Attributes are functionally dependent on all or part of the key.
- Attributes are atomic.
- No repeating groups.

### Applying to our example

Notice how in the unnormalised data there are repeating groups of products in the table. We must separate these into their own seperate entries, as shown below. The `CityStatePostcode` attribute has also been split in the same step to ensure all attributes are fully atomic.

`Orders` table:

|OrderId|OrderDate|CustomerId|CustomerName|CustomerAddress|City|State|Postcode|ProductId|ProductDescription|ProductQuantity|ProductPrice|
|-|-|-|-|-|-|-|-|-|-|-|-|
|5258|27/3/2013|32|Computer Training Center|1 Plenty Rd|Bundoora|Victoria|3086|P123|Bookcase|4|200|
|5258|27/3/2013|32|Computer Training Center|1 Plenty Rd|Bundoora|Victoria|3086|P234|Cabinet|2|500|
|5258|27/3/2013|32|Computer Training Center|1 Plenty Rd|Bundoora|Victoria|3086|P345|Table|1|150|

However, this means there is no longer a valid primary key, as the `OrderId` attribute is not unique across all records. To resolve this, we will create another table for the product:

`Orders` table:

|OrderId|OrderDate|CustomerId|CustomerName|CustomerAddress|City|State|Postcode|
|-|-|-|-|-|-|-|-|
|5258|27/3/2013|32|Computer Training Center|1 Plenty Rd|Bundoora|Victoria|3086|
|5258|27/3/2013|32|Computer Training Center|1 Plenty Rd|Bundoora|Victoria|3086|
|5258|27/3/2013|32|Computer Training Center|1 Plenty Rd|Bundoora|Victoria|3086|

`Products` table:

|OrderId FK|ProductId|Description|Quantity|Price|
|-|-|-|-|-|
|5258|P123|Bookcase|4|200|
|5258|P234|Cabinet|2|500|
|5258|P345|Table|1|150|

!> Using OrderId and ProductId as a <u>composite key</u> is acceptable as each product can only occur in a given order once.

Now our database is in 1NF, as there are no repeating groups, each table has a primary key, attributes are atomic, and they all depend on all or part of the key.


### Anomalies

There are a few issues which make this database poorly designed and open it up to anomalies. Some of them may include:

- You cannot insert a new product without it being associated with an order.
- Conversely, you cannot delete an order without risking deleting a product entirely.
- To update a product, you must update each order that has the product in it.
- This also leads to redundant data, as multiple orders may contain the same product, but this design would require it to be listed in each record.


## Second Normal Form (2NF)

For a database schema to be in 2NF, it must fit the following criteria:

- Must be in 1NF, and meet all of its criteria.
- No partial dependencies - non-key attributes that do not depend on the primary key must be removed.


### Fixing our database

Previously we identified that leaving our database in 1NF left it open to insert, deletion, and update anomalies. To fix this, we must remove all partial dependencies.

```scss title="Our database"
Orders {
    [PK] OrderId
    OrderDate
    CustomerId
    CustomerName
    Address
    City
    State
    Postcode
}

Products {
    [PK] OrderId [FK]
    [PK] ProductId
    Description
    Quantity
    Price
}
```

!> This is just another way of representing the structure of our tables. We don't really need to visualise the actual data anymore, so instead it will be omitted.

Looking at the `Products` table, we can see that there are parital dependencies:

- `Description` and `Price` depend on the `ProductId`, but is not relevant to the `OrderId`.
- Similarly, `Quantity` depends on the `OrderId`, but not `ProductId`.

These are called partial dependencies because they depend on a part of the key, or not the whole key. If you think about it in the context of the question, it doesn't make sense to store the order details with the product's details. From first glance the `quantity` attribute is not relevant to the product details, it is relevant to the order.

The next move would be to restructure our tables to suit this requirement:

```scss
Orders {
    [PK] OrderId
    OrderDate
    CustomerId
    CustomerName
    Address
    City
    State
    Postcode
}

OrderProducts {
    [PK] OrderId [FK]
    [PK] ProductId [FK]
    Quantity
}

Products {
    [PK] ProductId
    Description
    Price
}
```

Note the creation of a new table: `OrderProducts`. It uses a composite key from `OrderId` and `ProductId`. You may think that `quantity` should belong to the `Orders` table, but that wouldn't work, because there is no way to indicate what product the quantity is for, and it wouldn't work for orders with multiple products.

This is because there is a many-to-many relationship between an order and a product. Each order can have multiple products on it, and each product can be used on multiple orders. The `OrderProducts` table is essentially a joining table.

!> This exposes one of the reasons we must normalise our database structure. A many-to-many relationship cannot exist in a relational database.

Now our tables are in 2NF. The `Orders` table was not mentioned because it happened to contain no partial dependencies, but you should always check before proceeding that all tables meet the requirements.


## Third Normal Form (3NF)

For a database schema to be in 3NF, it must fit the following criteria:

- Must be in 2NF, and meet all of its criteria.
- No transitive dependencies - non-key attributes which depend on other non-key attributes must be removed.


### Finalising our database structure

> Scroll up to see the tables in 2NF

Once again, there are transitive dependencies in our structure which must be resolved:

- `CustomerName` (and others) depends on `CustomerId` - both are non-key attributes. We will also rename this field to just `Name` for simplicity.

?> While it may appear to be a key due to its name, `CustomerId` is a non-key attribute. It is not used as a primary key in the `Orders` table, and is not a foreign key to any other table.

```scss
Customers {
    [PK] CustomerId
    Name
    Address
    City
    State
    Postcode
}

Orders {
    [PK] OrderId
    CustomerId [FK]
    OrderDate
}

OrderProducts {
    [PK] OrderId [FK]
    [PK] ProductId [FK]
    Quantity
}

Products {
    [PK] ProductId
    Description
    Price
}
```

Again, the other tables are already free of transitive dependencies, making this finally in 3NF :smile:. From here, you may create an Entity Relationship Diagram (ERD) from these tables.

