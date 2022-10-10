export default {
    exerProps: ["name","difficulty", "muscles", "genre", "video", 'premium','description'],
    exerOptions: {
        difficulty: ["easy", "medium", "hard"],
        muscles: ['upper_body', 'lower_body', 'functional', 'abs', 'stretching'],
        genre: ['man', 'woman', 'both'],
        premium: ["true", "false"],
    },
    userProfileProps: ["name", "email", "plan", "status"],
    userProfileOptions: {
        plan: ["normal", "premium"],
        status: ['activated', 'desactivated'],
    },
    userInfoProps: ["genre", "age","weight","height", "goal", "experience"],
    userInfoOptions: {
        genre: ["man", "woman", "other"],
        goal: ['gain muscles', 'lower fat percentage'],
        experience: ['beginner', 'medium', 'advanced']
    }
}