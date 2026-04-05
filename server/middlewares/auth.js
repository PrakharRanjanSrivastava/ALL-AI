import { clerkClient, getAuth } from "@clerk/express";

const auth = async (req, res, next) => {
    try {
        // 1. Safely extract auth data using the official Clerk helper
        const authObject = getAuth(req);
        const userId = authObject.userId;

        if (!userId) {
            return res.json({ success: false, message: "User not authenticated" });
        }

        // 2. Fetch the user's data from Clerk
        const user = await clerkClient.users.getUser(userId);

        // 3. Check for a premium plan directly in their metadata
        const hasPremiumPlan = 
            user.publicMetadata?.plan === 'premium' || 
            user.privateMetadata?.plan === 'premium';

        // 4. Safely handle free usage tracking
        if (!hasPremiumPlan && user.privateMetadata?.free_usage !== undefined) {
            req.free_usage = user.privateMetadata.free_usage;
        } else {
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: 0
                }
            });
            req.free_usage = 0;
        }

        req.plan = hasPremiumPlan ? 'premium' : 'free';
        next();
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export default auth;