import { CreateReportDto, FindReportDto, RemoveReportDto, UpdateReportDto} from "./report.dto"
import { Report } from "./report.model"
import { faker } from '@faker-js/faker';


type FindRule = [string, number | string | Date | boolean]

interface ReportService {
    addReport(dto: CreateReportDto): void
    removeReportById(id: Report['id']): void
    updateReport(id: Report['id'], changes: UpdateReportDto): void
    findReport(dto: FindReportDto): Report | undefined
}

class ReportServiceMock implements ReportService {

    reports: Report[] = []

    addReport(dto: CreateReportDto): void {
        const report: Report = {
            id: faker.datatype.uuid(),
            ownerId: faker.datatype.uuid(),
            createdAt: new Date(),
            updatedAt: new Date(),
            ...dto
        }
        this.reports.push(report)
    }

    removeReportById(id: Report['id']): void {
        this.reports = this.reports.filter(report => report.id !== id)
    }

    updateReport(id: Report['id'], changes: UpdateReportDto): void {
        const index = this.reports.findIndex(report => report.id === id)
        const oldReport = this.reports[index]
        this.reports[index] = { 
            ...oldReport,
            ...changes
        }
    }

    findReport(dto: FindReportDto): Report | undefined {
        let findRules: FindRule[] = []
        if (dto.id !== undefined) {
            findRules.push(["id", dto.id])
        }
        if (dto.shared !== undefined) {
            findRules.push(["shared", dto.shared])
        }
        return this.reports.find(report => {
            findRules.includes([report.id.toString(), report.id])
        })
    }
}
