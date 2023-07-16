import { NextResponse } from "next/server";
import { addUsers, getUsrs } from "../../../Users";
import { userData } from "../../../userData";

export const GET=async(req:Request,res:Response)=>{
  try{
    const users=getUsrs()
    return NextResponse.json({message:"OK",users})
  }catch(err){
    return NextResponse.json({message:"err",err})
  }
}

export const POST = async (req: Request, res: Response) => {
  const { fName, email } = await req.json();
  try {
    const user = { id: Date.now().toString(), fName, email };
    addUsers(user);
    userData.push(user);
    res.status(201).json(user)
    return NextResponse.json({
        message: "OK",user
      },);
  } catch (err) {
    return NextResponse.json({
      message: "error",
      err,
    });
  }
};
