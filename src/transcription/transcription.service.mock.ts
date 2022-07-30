
namespace SYSTEM {
    
    export class TranscriptionServiceMock implements TranscriptionServiceInterface {

        defaultTranscription : string = "Se detecta fractura en la costilla derecha mediante la readiografía"

        transcribe(pathFile: string): string {
            return this.defaultTranscription
        }
    }
}