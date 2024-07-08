const users = [
    {
        email: "alanabyan4@gmail.com",
        password: "password",
    },
    {
        email: "mimialan4@gmail.com",
        password: "password",
    },
]

export const GetUserByEmail = (email: string) => {
    const found = users.find((user) => user.email === email)
    return found;
}