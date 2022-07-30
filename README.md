# Testing project with Jest

We have an audio transcription system that receives the audio files and stores the result in a database.

The project flow starts sending an audio file to the transcription service to obtain its transcript. The result is saved in the storage system.

## Entities

* **Report**. A report has the following fields:

|  Field         |   Type  |
|----------------|---------|
| id             | string  |
| specialty      | string  |
| transcription  | string  |
| userCorrection | string  |
| createdAt      | Date    |
| updatedAt      | Date    |
| userId         | string  |
| language       | string  |

* **Report service**. Service in charge of the report management. The service has the following tasks:

|      Task      | Parameters  | Returns |
|----------------|-------------|---------|
| Save report    | report      | id      |
| Remove report  | id          | boolean |
| Update report  | id, changes | report  |
| Get report     | id          | report  |
| Find report    | id          | report  |


* **Transcription service**. Service in charge of the audio transcription. Receives the path of the audio file and returns its transcription. The service has the following tasks:

|      Task         | Parameters       | Returns |
|-------------------|------------------|---------|
| Transcribe audio  | audio file path  | string  |


# Unit tests
