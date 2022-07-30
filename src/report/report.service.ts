namespace SYSTEM {

    const faker = require('@faker-js/faker');

    export type FindRuleType = [string, number | string | Date | boolean]

    export class ReportServiceMock implements ReportService {

        reports: ReportModel[] = []

        addReport(dto: CreateReportDto): ReportModel["id"] {
            const report: ReportModel = {
                id: faker.datatype.uuid(),
                ownerId: faker.datatype.uuid(),
                createdAt: new Date(),
                updatedAt: new Date(),
                ...dto
            }
            this.reports.push(report)

            return report.id
        }

        removeReportById(id: ReportModel['id']): boolean {
            if (this.reports.findIndex(rep => rep.id === id) === -1) {
                return false
            }

            this.reports = this.reports.filter(report => report.id !== id)
            return true
        }

        updateReportById(id: ReportModel['id'], changes: UpdateReportDto): ReportModel | undefined  {
            const index = this.reports.findIndex(report => report.id === id)
            if (index === -1) {
                return undefined
            }

            const oldReport = this.reports[index]
            this.reports[index] = {
                ...oldReport,
                ...changes
            }

            return this.reports[index];
        }

        getReportById(id: ReportModel['id']): ReportModel | undefined {
            const index = this.reports.findIndex(report => report.id === id)
            if (index === -1) {
                return undefined
            }
            return this.reports[index]
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