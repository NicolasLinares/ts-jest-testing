import { CreateReportDto, FindReportDto, UpdateReportDto } from "./report.dto"
import { ReportModel } from "./report.model"

export interface ReportManagerInterface {
    addReport(dto: CreateReportDto): ReportModel | undefined
    removeReportById(id: ReportModel['id']): ReportModel | undefined
    getReportById(id: ReportModel['id']): ReportModel | undefined
    getAll(): ReportModel []
}
