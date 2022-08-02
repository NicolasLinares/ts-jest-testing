import { PersistenceInterface } from "../persistence/persistence.interface"
import { CreateReportDto, FindReportDto, UpdateReportDto } from "./report.dto"
import { ReportModel } from "./report.model"
import { ReportManagerInterface } from "./reportManager.interface"
import { ReportPersistenceService } from "./reportPersistence.service"
import { faker } from "@faker-js/faker"

export type FindRuleType = [string, number | string | Date | boolean]

export class ReportManager implements ReportManagerInterface {

    private persistence: PersistenceInterface<ReportModel>

    constructor(persistence: ReportPersistenceService) {
        this.persistence = persistence
    }

    addReport(dto: CreateReportDto): ReportModel | undefined {
        const report: ReportModel = {
            id: faker.datatype.uuid(),
            createdAt: new Date(),
            updatedAt: new Date(),
            ...dto
        }
        let isSaved = this.persistence.save(report)
        if (!isSaved) {
            return undefined
        }
        return report
    }

    removeReportById(id: ReportModel['id']): ReportModel | undefined {
        let report = this.persistence.get(id)
        this.persistence.remove(id)
        return report
    }

    getReportById(id: ReportModel['id']): ReportModel | undefined {
        return this.persistence.get(id)
    }

    getAll(): ReportModel[] {
        return this.persistence.getAll()
    }
}

