

interface TranscriptionService {
    transcribe(pathFile: string): string
}


export class MockTranscriptionService implements TranscriptionService {

    defaultTranscription : string = "Se detecta fractura en la costilla derecha mediante la readiografía"

    transcribe(pathFile: string): string {
        return this.defaultTranscription
    }
}