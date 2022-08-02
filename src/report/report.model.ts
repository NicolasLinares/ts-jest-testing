import { BaseModel } from "./base.model"
import { SpecialtyEnum } from "../enums/specialty.enum"

export interface ReportModel extends BaseModel {
    ownerId: string
    transcription: string
    userCorrection: string | undefined
    lang: string
    shared: boolean
    specialty: SpecialtyEnum
}