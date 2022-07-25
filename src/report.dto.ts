import { Report } from "./report.model";

export interface CreateReportDto extends Omit<Report, "id" | "createdAt" | "updatedAt" | "ownerId"> { }

export interface UpdateReportDto extends Partial<CreateReportDto> { }

export interface FindReportDto extends Readonly<Partial<Report>> { }

export interface RemoveReportDto extends Partial<Report> { }