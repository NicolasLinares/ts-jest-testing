namespace SYSTEM {

    export interface ReportService {
        addReport(dto: CreateReportDto): ReportModel['id']
        removeReportById(id: ReportModel['id']): boolean
        updateReportById(id: ReportModel['id'], changes: UpdateReportDto): ReportModel | undefined
        getReportById(id: ReportModel['id']): ReportModel | undefined
        findReport(dto: FindReportDto): ReportModel | undefined
    }
}