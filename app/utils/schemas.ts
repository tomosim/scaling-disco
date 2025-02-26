import z from "zod";

export const PaginationStructureSchema = z.object({
	cursors: z.object({
		after: z.string(),
	}),
	/** Some newer endpoints don't return this */
	items_total: z.number().optional(),
	items_limited: z.number().optional(),
});

export const SearchSchema = z.object({
	id: z.number(),
	name: z.string(),
	online_status: z.string(),
	is_plus: z.boolean(),
	picture: z
		.object({
			comment: z.string(),
			url: z.string(),
		})
		.optional(),
	last_login: z.string(),
});

export const ProfileSchema = z.object({
	headline: z.string(),
	id: z.number(),
	location: z.object({
		area: z.string(),
		city: z.string(),
		country: z.string(),
		distance: z.number(),
		name: z.string(),
	}),
	personal: z.object({
		age: z.number(),
		body_hair: z.string(),
		body_type: z.string(),
		ethnicity: z.string(),
		eye_color: z.string(),
		height: z.object({
			cm: z.number(),
		}),
		relationship: z.string(),
		smoker: z.string(),
		weight: z.object({
			kg: z.number(),
		}),
	}),
	sexual: z.object({
		anal_position: z.string(),
		safer_sex: z.string(),
		sm: z.string(),
	}),
	is_plus: z.boolean(),
});

export const FullProfileSchema = ProfileSchema.merge(SearchSchema);
