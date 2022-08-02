import { ReportModel } from "./report.model";

export interface CreateReportDto extends Omit<ReportModel, "id" | "createdAt" | "updatedAt"> {}

export interface UpdateReportDto extends Partial<CreateReportDto> { }

export interface FindReportDto extends Readonly<Partial<ReportModel>> { }

export interface RemoveReportDto extends Partial<ReportModel> { }
