import DeveloperInterface from "./developer"

// TODO: Implement your hackathon in this file
export default async function hackathon(developers:Array<DeveloperInterface>): Promise<string> {
  const res: string[] = [];
  for(const developer of developers) {
    try{const greeting = await developer.code();
      res.push(greeting);}
      catch(error){
        if(error instanceof Error) {
          res.push(error.message);
        }
      }
  }
  return res.join("\n")
}
