import { ReportPersistenceService } from "../src/report/reportPersistence.service"
import { ReportManagerInterface } from "../src/report/reportManager.interface"
import { ReportManager } from "../src/report/reportManager"
import { ReportModel } from "../src/report/report.model"
import { CreateReportDto } from "../src/report/report.dto"

import { generateRandomDatabase, createRandomCreateReportDto } from "./utils"
import { faker } from "@faker-js/faker"

// Service or entity to test
describe("Report Manager", () => {

	const maxElements = 10 // Tests pass with 0 elements
	var reportManager: ReportManagerInterface

	beforeAll(() => {
		let reports = generateRandomDatabase(maxElements)
		let database = new ReportPersistenceService()
		database.populate(reports)
		reportManager = new ReportManager(database)
	})

	describe("When ADD a report", () => {

		describe("And the report does NOT EXISTS",  () => {

			let newReportDto : CreateReportDto

			beforeEach(() => {
				newReportDto = createRandomCreateReportDto()
			})

			test("Then the manager adds the report and returns the report saved", () => {
				let reportSaved = reportManager.addReport(newReportDto)

				expect(reportSaved).not.toBeUndefined()
				expect(reportSaved?.transcription).toBe(newReportDto.transcription)
				expect(reportSaved?.userCorrection).toBe(newReportDto.userCorrection)
				expect(reportSaved?.shared).toBe(newReportDto.shared)
				expect(reportSaved?.lang).toBe(newReportDto.lang)
				expect(reportSaved?.specialty).toBe(newReportDto.specialty)
			})
		})
	})

	describe("When REMOVE a report by Id", () => {

		describe("And the report does NOT EXISTS",  () => {
			test("Then the manager fails and returns undefined", () => {
				let randomId = faker.datatype.uuid()
				let result = reportManager.removeReportById(randomId)
				expect(result).toBeUndefined()
			})
		})

		describe("And the report EXISTS", () => {
			let reportSaved : ReportModel | undefined

			beforeEach(() => {
				let newReportDto = createRandomCreateReportDto()
				reportSaved = reportManager.addReport(newReportDto)
			})

			test("Then the manager returns the report removed", () => {
				let reportSavedId = reportSaved?.id
				let reportRemoved : ReportModel | undefined = undefined
				if (reportSavedId) {
					reportRemoved = reportManager.removeReportById(reportSavedId)
				}
				expect(reportRemoved).not.toBeUndefined()
				expect(reportRemoved?.id).toBe(reportSaved?.id)
				expect(reportRemoved?.transcription).toBe(reportSaved?.transcription)
			})
		})
	})
})
