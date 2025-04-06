import jwt from "jsonwebtoken"; // import jsonwebtoken library
import User from "../models/user.model.js";

export const verifyJWT = async (req, res, next) => {
    const token = req.cookies?.accessToken || req.headers("authorization")?.replace("Bearer ", ""); // get token from cookies or headers

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // verify token
        
        const user = await User.findById(decoded?.id).select("-password");

        if (!user) {
            return res.status(401).json({ message: "Invalid access token" });
        }

        req.user = user; // attach user to request object

        next(); // call next middleware
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }

}