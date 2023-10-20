import {NextResponse} from "next/server";
import {connectToDatabase} from "../../../../../helpers/server-helpers";

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json()
    if (!name || !email || !password) return NextResponse.json({message: "Invalid Data"}, {status: 422})
    await connectToDatabase()
    const user = await prisma.user.create({data: {email, name, password}})
    return NextResponse.json({user}, {status: 201})
  } catch (error) {
    console.log(error)
    return NextResponse.json({message: "Server Error"}, {status: 500})
  } finally {
    await prisma.$disconnect()
  }
}
