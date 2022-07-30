namespace SYSTEM {

    export interface ReportService {
        addReport(dto: CreateReportDto): void
        removeReportById(id: ReportModel['id']): void
        updateReport(id: ReportModel['id'], changes: UpdateReportDto): void
        findReport(dto: FindReportDto): ReportModel | undefined
    }
}