# Little testing project with Jest

The idea of the project is to simulate a report handler that abstracts the persistence logic, with the aim of testing it with the [Jest Framework](https://jestjs.io/es-ES/).

## Entities

* **Report**. A report has the following fields:

    |  Field         |   Type  |
    |----------------|---------|
    | id             | string  |
    | createdAt      | Date    |
    | updatedAt      | Date    |
    | ownerId        | string  |
    | transcription  | string  |
    | userCorrection | string  |
    | shared         | boolean |
    | language       | string  |
    | specialty      | string  |

* **Report Manager**. Service in charge of the report management. The manager has the following tasks:

    |      Task        | Parameters  | Returns      |
    |------------------|-------------|--------------|
    | Add report       | report      | report       |
    | Remove report    | id          | report       |
    | Get report       | id          | report       |
    | Get all reports  | -           | report list  |
    | ...              | ...         | ...          |


* **Report Persistance**. Simulate a database service.

    |      Task        | Parameters  | Returns      |
    |------------------|-------------|--------------|
    | Save report      | report      | boolean      |
    | Remove report    | id          | boolean      |
    | Get report       | id          | report       |
    | Get all reports  | -           | report list  |
    | ...              | ...         | ...          |


# Unit Tests

Testing of the behaviour of the Report Manager when add, remove or get any report.

With the unit tests, new functionalities could be added to the report manager or modify the persistence service, ensuring the correct functioning of the system.