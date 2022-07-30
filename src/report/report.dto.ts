
namespace SYSTEM {

    export interface CreateReportDto extends Omit<ReportModel, "id" | "createdAt" | "updatedAt" | "ownerId"> { }

    export interface UpdateReportDto extends Partial<CreateReportDto> { }

    export interface FindReportDto extends Readonly<Partial<ReportModel>> { }

    export interface RemoveReportDto extends Partial<ReportModel> { }
}