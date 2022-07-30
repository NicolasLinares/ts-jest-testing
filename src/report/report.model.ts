
namespace SYSTEM {

    export interface ReportModel extends BaseModel {
        ownerId: string | number
        transcription: string
        userCorrection: string
        lang: LangEnum
        shared: boolean
        specialty: MedicalSpecialtyEnum | LegalSpecialtyEnum
    }
}