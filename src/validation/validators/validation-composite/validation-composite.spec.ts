import { FieldValidationSpy } from '../test/mock-field-validation'
import { ValidationComposite } from './validation-composite'

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const fieldFieldValidationSpy = new FieldValidationSpy('any_field')
    const fieldFieldValidationSpy2 = new FieldValidationSpy('any_field')
    fieldFieldValidationSpy2.error = new Error('any_error_message')
    const sut = new ValidationComposite([
      fieldFieldValidationSpy,
      fieldFieldValidationSpy2
    ])
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('any_error_message')
  })
})
