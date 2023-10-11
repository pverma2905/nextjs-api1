let data = []
export async function GET() {
    return Response.json({ "response": data, message: "Get Request" })
}
export async function POST(req) {

    let data1 = {
        id: Math.floor(Math.random() * 101),
        name: Math.random().toString(36).substring(2, 7),
        email: Math.random().toString(36).substring(2, 7) + "@gmail.com",
        phone: Math.floor(Math.random() * 10000000000)
    }
    data.push(data1)
    return Response.json({ "response": data1, message: "POST Request" })
}
export async function PUT() {
    let data = {
        name: "test",
        email: "test@gmail.com",
        phone: "9799754798"
    }
    return Response.json({ "response": data, message: "PUT Request" })
}
export async function DELETE() {
    let data = {
        name: "test",
        email: "test@gmail.com",
        phone: "9799754798"
    }
    return Response.json({ "response": data, message: "Delete Request" })
}





