import { isEmail } from "common-utils"

describe("Test Email Validation", () => {
  it("is email?", () => {
    expect(isEmail("asepsetyawan9@gmail.com")).toBe(true)
  })
})
