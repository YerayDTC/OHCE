import { describe, it, expect, vi } from "vitest"
import { myFunction } from "./main.js"
import {Ohce} from "./ohce.js"


describe("Default test", () => {
  it("should work", async () => {
    const logger = { log: vi.fn() }//crea un espia, un objeto
    const ohce = new Ohce(logger)
    
    await ohce.execute("yeray")

    expect(logger.log).toHaveBeenCalledWith("Buenos dias yeray")
  })
})
