import { ReportModel } from "../src/report/report.model"
import { ReportPersistenceService } from "../src/report/reportPersistence.service"

import { generateRandomDatabase, createRandomReport } from "./utils"

// Service or entity to test
describe("Report Persistence Service", () => {

	const maxElements = 10 // Tests pass with 0 elements
	var database : ReportPersistenceService

	beforeAll(() => {
		let reports = generateRandomDatabase(maxElements)
		database = new ReportPersistenceService()
		database.populate(reports)
	})

	describe(`When POPULATE database with ${maxElements} elements`, () => {
		test("Then the database should not be undefined", () => {
			expect(database).not.toBeUndefined()
		})

		test(`Then the number of elements should be ${maxElements}`, () => { 
			let length = database.getAll().length
			expect(length).toBe(maxElements)
		})
	})

	describe("When ADD a report in database", () => {

		describe("And the report does NOT EXISTS",  () => {

			let newReport : ReportModel

			beforeEach(() => {
				newReport = createRandomReport()
			})

			test("Then the service saves the report and returns true", () => {
				let result = database.save(newReport)
				expect(result).toBeTruthy()
			})

			test("Then the number of reports increse by one", () => {
				let oldLength = database.getAll().length
				let result = database.save(newReport)
				let newLength = database.getAll().length
				expect(result).toBeTruthy()
				expect(newLength).toBe(oldLength + 1)
			})
		})

		describe("And the report ALREADY EXISTS",  () => {

			let reportAlreadySaved : ReportModel

			beforeEach(() => {
				let report = createRandomReport()
				database.save(report)
				reportAlreadySaved = report
			})

			test("Then the service does not save the report and returns false", () => {
				let result = database.save(reportAlreadySaved)
				expect(result).toBeFalsy()
			})

			test("Then the number of reports does not change", () => {
				let oldLength = database.getAll().length
				database.save(reportAlreadySaved)
				let newLength = database.getAll().length
				expect(newLength).toBe(oldLength)
			})
		})
	})

	describe("When REMOVE a report in database", () => {

		describe("And the report does NOT EXISTS",  () => {

			let reportNotSaved : ReportModel

			beforeAll(() => {
				reportNotSaved = createRandomReport()
			})

			test("Then the service does not remove the report and returns false", () => {
				let result = database.remove(reportNotSaved.id)
				expect(result).toBeFalsy()
			})

			test("Then the number of reports does not change", () => {
				let oldLength = database.getAll().length
				let result = database.remove(reportNotSaved.id)
				let newLength = database.getAll().length
				expect(result).toBeFalsy()
				expect(newLength).toBe(oldLength)
			})
		})

		describe("And the report ALREADY EXISTS",  () => {

			let reportAlreadySaved : ReportModel

			beforeEach(() => {
				let report = createRandomReport()
				database.save(report)
				reportAlreadySaved = report
			})

			test("Then the service removes the report and returns true", () => {
				let result = database.remove(reportAlreadySaved.id)
				expect(result).toBeTruthy()
			})

			test("Then the number of reports decrease by one", () => {
				let oldLength = database.getAll().length
				let result = database.remove(reportAlreadySaved.id)
				let newLength = database.getAll().length
				expect(result).toBeTruthy()
				expect(newLength).toBe(oldLength - 1)
			})
		})
	})
})
