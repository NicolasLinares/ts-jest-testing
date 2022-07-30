namespace SYSTEM {

    const faker = require('@faker-js/faker');

    export type FindRuleType = [string, number | string | Date | boolean]

    export class ReportServiceMock implements ReportService {

        reports: ReportModel[] = []

        addReport(dto: CreateReportDto): void {
            const report: ReportModel = {
                id: faker.datatype.uuid(),
                ownerId: faker.datatype.uuid(),
                createdAt: new Date(),
                updatedAt: new Date(),
                ...dto
            }
            this.reports.push(report)
        }

        removeReportById(id: ReportModel['id']): void {
            this.reports = this.reports.filter(report => report.id !== id)
        }

        updateReport(id: ReportModel['id'], changes: UpdateReportDto): void {
            const index = this.reports.findIndex(report => report.id === id)
            const oldReport = this.reports[index]
            this.reports[index] = {
                ...oldReport,
                ...changes
            }
        }

        findReport(dto: FindReportDto): ReportModel | undefined {
            let findRules: FindRuleType[] = []
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

}