
namespace SYSTEM {

    export interface TranscriptionServiceInterface {
        transcribe(pathFile: string): string
    }
}