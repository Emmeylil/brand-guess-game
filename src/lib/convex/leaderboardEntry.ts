import { v } from "convex/values";
import { internalQuery, mutation, query } from "./_generated/server";

export const getEntries = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("leaderboardEntry").collect();
    },
});

export const getEntriesInternal = internalQuery({
    args: {
    },
    handler: async (ctx, args) => {
        const scores = await ctx.db.query("leaderboardEntry").collect()

        return scores
    }
})

export const setEntry = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        score: v.number(),
        maxScore: v.number(),
        date: v.string()
    },
    handler: async (ctx, args) => {
        const id = await ctx.db.insert('leaderboardEntry', {
            name: args.name,
            email: args.email,
            score: args.score,
            maxScore: args.maxScore,
            date: args.date
        })

        return id
    }
})