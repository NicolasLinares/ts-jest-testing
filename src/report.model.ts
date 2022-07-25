import { BaseModel } from "./base.model"

export enum MedicalSpecialty {
    Radiology = "RX",
    General = "GEN",
    Oncology = "ONCO"
}

export enum LegalSpecialty {
    Business = "BUS",
    Family = "FAM",
    Criminal = "CRI"
}

export enum Lang {
    ES = "es-ES",
    BR = "pt-BR",
    US = "en-US"
}

export interface Report extends BaseModel {
    ownerId: string | number
    transcription: string
    userCorrection: string
    lang: Lang
    shared: boolean
    specialty: MedicalSpecialty | LegalSpecialty
}
