import request from "supertest";
import app from "../index";

describe("GET /", () => {
  it("should respond with a welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Banana Bread Tracker backend is running!");
  });
});
