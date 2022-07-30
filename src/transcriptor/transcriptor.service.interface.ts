
namespace SYSTEM {

    export interface TranscriptorServiceInterface {
        transcribe(pathFile: string): string
    }
}