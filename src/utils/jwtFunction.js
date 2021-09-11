import jwt from "jsonwebtoken"

export const createAuthToken = (user) => {
    const token = jwt.sign({ id: user.id, email: user.email }, 
                            process. env.JWT_SECRET, {
                    })

    return token

}