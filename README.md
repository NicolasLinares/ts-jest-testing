# Testing project with Jest

The project flow starts sending a new audio file to the transcription service to obtain its transcript. The result is saved in the storage system.

## Entities

* **Transcription service**. Receives an audio file in wav format containing the medical report and returns its transcript.

* **Medical report**.We have to storage the following fields in a database:
    - id
    - specialty
    - transcription
    - userCorrection
    - createdAt
    - updatedAt
    - userId
    - language

* **Report service**. The service has the following tasks:
    - Save medical report
    - Get medical report by id
    - Get all medical reports by specialty id
    - Delete a medical report by id
    - Get all medical reports by user id


# Unit tests
