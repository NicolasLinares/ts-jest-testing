import { SpecialtyEnum } from "../src/enums/specialty.enum"
import { LangEnum } from "../src/enums/lang.enum"
import { ReportModel } from "../src/report/report.model"
import { CreateReportDto } from "../src/report/report.dto"
import { faker } from "@faker-js/faker"

export function generateRandomDatabase (maxElements: number) {
    return Array<ReportModel>.from({length: maxElements}, createRandomReport)
}

export function createRandomReport(): ReportModel {
    return {
        id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        ownerId: faker.datatype.uuid(),
        transcription: faker.lorem.paragraph(),
        userCorrection: faker.datatype.boolean() ? faker.lorem.paragraph() : undefined,
        shared: faker.datatype.boolean(),
        lang: faker.helpers.arrayElement(Object.values(LangEnum)),
        specialty: faker.helpers.arrayElement(Object.values(SpecialtyEnum)),
    }
}

export function createRandomCreateReportDto(): CreateReportDto {
    return {
        ownerId: faker.datatype.uuid(),
        transcription: faker.lorem.paragraph(),
        userCorrection: faker.datatype.boolean() ? faker.lorem.paragraph() : undefined,
        shared: faker.datatype.boolean(),
        lang: faker.helpers.arrayElement(Object.values(LangEnum)),
        specialty: faker.helpers.arrayElement(Object.values(SpecialtyEnum)),
    }
}

