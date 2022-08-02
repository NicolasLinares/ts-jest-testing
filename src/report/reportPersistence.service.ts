
import { ReportModel } from "./report.model"
import { PersistenceInterface } from "../persistence/persistence.interface"

export class ReportPersistenceService implements PersistenceInterface<ReportModel> {

    private reports: Map<ReportModel["id"], ReportModel>

    constructor() {
        this.reports = new Map<ReportModel["id"], ReportModel>()
    }

    populate(entries: Array<ReportModel>) : number {
        let count = 0
        entries.forEach(report => {
            let isSaved = this.save(report)
            count = isSaved ? count + 1 : count
        })
        return count
    }

    save(report: ReportModel): boolean {
        if (this.reports.has(report.id)) {
            return false
        }
        this.reports.set(report.id, report)
        return true
    }
    get(id: ReportModel["id"]): ReportModel | undefined {
        if (!this.reports.has(id)) {
            return undefined
        }
       return this.reports.get(id)
    }
    remove(id: ReportModel["id"]): boolean {
        if (!this.reports.has(id)) {
            return false
        }
        this.reports.delete(id)
        return true 
    }
    getAll(): ReportModel[] {
        return Array.from(this.reports.values())
    }
}