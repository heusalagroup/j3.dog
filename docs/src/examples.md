## Example of a three-dimensional spreadsheet data

### The structure of a three-dimensional spreadsheet database

The three-dimensional spreadsheet in this example has the following dimensions:

 * `X` dimension is the project
 * `Y` dimension is the person
 * `Z` dimension has three layers: Hours (`Z1`), fee per hour (`Z2`) and 
   sales (`Z3`)

Layers may have aliases to make formulas easier to read and write:

 * `Z1` as `HOURS`
 * `Z2` as `FEE`
 * `Z3` as `SALES`

#### `Z1`: Layer for hours for each person in each project

This table displays the contents of the layer `Z1` and cells in `X` and `Y`
dimensions. Each cell contains the hours to be invoiced for each person. The
last cell has a formula to calculate the sum of all hours.

| Person           | Project Phoenix | Project Infinity | Project Nexus | Total Hours     |
|------------------|-----------------|------------------|---------------|-----------------|
| Alice Smith      | 100             | 57               | 0             | `SUM(X2:X-1)`   |
| Bob Johnson      | 100             | 7                | 50            | `SUM(X2:X-1)`   |
| Charlie Williams | 50              | 20               | 10            | `SUM(X2:X-1)`   |
| Diana Brown      | 50              | 50               | 50            | `SUM(X2:X-1)`   |
| Eve Taylor       | 50              | 0                | 57            | `SUM(X2:X-1)`   |
| Frank Anderson   | 23              | 90               | 40            | `SUM(X2:X-1)`   |
| Grace Davis      | 15              | 42               | 40            | `SUM(X2:X-1)`   |
| Henry Thompson   | 10              | 10               | 30            | `SUM(X2:X-1)`   |
| Isabella Moore   | 0               | 0                | 120           | `SUM(X2:X-1)`   |
| James Rodriguez  | 0               | 40               | 30            | `SUM(X2:X-1)`   |
| Total Hours      | `SUM(Y2:Y-1)`   | `SUM(Y2:Y-1)`    | `SUM(Y2:Y-1)` | `SUM(X2:X-1)`   |

Cells may contain values or formulas.

#### `Z2`: Layer for hourly fee for each person in each project

This table displays the contents of the layer `Z2` and cells in `X` and `Y`
dimensions. Each cell contains the hourly fee for services provided. The
last cell has a formula to calculate the average hourly fee.

| Person                    | Project Phoenix | Project Infinity | Project Nexus | Average Fee per hour |
|---------------------------|-----------------|------------------|---------------|----------------------|
| Alice Smith               | 90              | 90               | 90            | `SUM(X2:X-1)`        |
| Bob Johnson               | 50              | 50               | 50            | `SUM(X2:X-1)`        |
| Charlie Williams          | 75              | 80               | 0             | `SUM(X2:X-1)`        |
| Diana Brown               | 50              | 50               | 50            | `SUM(X2:X-1)`        |
| Eve Taylor                | 50              | 50               | 50            | `SUM(X2:X-1)`        |
| Frank Anderson            | 50              | 50               | 50            | `SUM(X2:X-1)`        |
| Grace Davis               | 50              | 50               | 50            | `SUM(X2:X-1)`        |
| Henry Thompson            | 90              | 90               | 90            | `SUM(X2:X-1)`        |
| Isabella Moore            | 120             | 120              | 120           | `SUM(X2:X-1)`        |
| James Rodriguez           | 200             | 200              | 200           | `SUM(X2:X-1)`        |
| Average Fee per Hour      | `AVG(Y2:Y-1)`   | `AVG(Y2:Y-1)`    | `AVG(Y2:Y-1)` | `SUM(X2:X-1)`        |

#### `Z3`: Layer for total sales for each person in each project

To calculate the total sales for each person in each project, you can use the
following formula:

```
SALES = HOURS * FEE
```

To calculate the total sales for each person in each project, you can create a
new layer in the three-dimensional spreadsheet and use the formula above for
each cell.

This table displays the contents of the layer `Z3` and cells in `X` and `Y`
dimensions. Each cell contains the total sales for each person. The
last cell has a formula to calculate the sum of all total sales.

| Person                   | Project Phoenix | Project Infinity | Project Nexus  | Total Sales     |
|--------------------------|-----------------|------------------|----------------|-----------------|
| Alice Smith              | `HOURS * FEE`   | `HOURS * FEE`    | `HOURS * FEE`  | `SUM(X2:X-1)`   |
| Bob Johnson              | `HOURS * FEE`   | `HOURS * FEE`    | `HOURS * FEE`  | `SUM(X2:X-1)`   |
| Charlie Williams         | `HOURS * FEE`   | `HOURS * FEE`    | `HOURS * FEE`  | `SUM(X2:X-1)`   |
| Diana Brown              | `HOURS * FEE`   | `HOURS * FEE`    | `HOURS * FEE`  | `SUM(X2:X-1)`   |
| Eve Taylor               | `HOURS * FEE`   | `HOURS * FEE`    | `HOURS * FEE`  | `SUM(X2:X-1)`   |
| Frank Anderson           | `HOURS * FEE`   | `HOURS * FEE`    | `HOURS * FEE`  | `SUM(X2:X-1)`   |
| Grace Davis              | `HOURS * FEE`   | `HOURS * FEE`    | `HOURS * FEE`  | `SUM(X2:X-1)`   |
| Henry Thompson           | `HOURS * FEE`   | `HOURS * FEE`    | `HOURS * FEE`  | `SUM(X2:X-1)`   |
| Isabella Moore           | `HOURS * FEE`   | `HOURS * FEE`    | `HOURS * FEE`  | `SUM(X2:X-1)`   |
| James Rodriguez          | `HOURS * FEE`   | `HOURS * FEE`    | `HOURS * FEE`  | `SUM(X2:X-1)`   |
| Total Sales              | `SUM(Y2:Y-1)`   | `SUM(Y2:Y-1)`    | `SUM(Y2:Y-1)`  | `SUM(X2:X-1)`   |

Here's what it would look like in the UI (The sample calculations are not 
correct):

| Person                   | Project Phoenix | Project Infinity | Project Nexus | Total Sales |
|--------------------------|-----------------|------------------|---------------|-------------|
| Alice Smith              | 10000           | 9000             | 0             | 19000       |
| Bob Johnson              | 50000           | 7000             | 30000         | 10000       |
| Charlie Williams         | 10000           | 4000             | 1000          | 10000       |
| Diana Brown              | 5000            | 5000             | 5000          | 10000       |
| Eve Taylor               | 3000            | 0                | 7000          | 10000       |
| Frank Anderson           | 1000            | 12000            | 4000          | 10000       |
| Grace Davis              | 300             | 3000             | 4000          | 10000       |
| Henry Thompson           | 500             | 500              | 1500          | 10000       |
| Isabella Moore           | 0               | 0                | 24000         | 10000       |
| James Rodriguez          | 0               | 6000             | 4000          | 10000       |
| Total Sales              | 100000          | 100000           | 100000        | 100000      |

### Conclusion

In this example, we have seen how to use a three-dimensional spreadsheet to  
store and calculate data for projects, people, and layers for hours, fees, 
and sales. The three-dimensional structure of the spreadsheet allows for 
easy organization and calculation of data, and the use of formulas allows 
for automatic calculation of sums, averages, and other values.

The three-dimensional spreadsheet is a powerful tool for organizing and  
analyzing data, and it can be used in a variety of applications and 
industries. Whether you are a project manager, a financial analyst, or a  
business owner, the three-dimensional spreadsheet can help you organize,  
analyze, and make better decisions with your data.
