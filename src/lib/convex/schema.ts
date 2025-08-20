import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    tasks: defineTable({
        text: v.string(),
        isCompleted: v.boolean(),
    }),
    leaderboardEntry: defineTable({
        name: v.string(),
        email: v.string(),
        score: v.number(),
        maxScore: v.number(),
        date: v.string()
    })
});

// { id: 1, name: "Victor Idowu", score: 6, maxScore: 6, date: "2024-01-20" }