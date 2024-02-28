// TODO: Implement your developer interface and class in this file
interface DeveloperInterface {
  name: string,
  language: string,
  getName(): string,
  getLanguage(): string,
  setName(name: string): void,
  setLanguage(language: string): void
  code(): Promise<string>
}


export default class Developer implements DeveloperInterface {
  name: string;
  language: string;
  constructor(name: string, language: string) {
    this.name = name;
    this.language = language;
  }
  getName(): string {
    return this.name;
  }
  getLanguage(): string {
    return this.language;
  }
  setLanguage(language: string): void {
    this.language = language;
  }
  setName(name: string): void {
    this.name = name;
  }
  code(): Promise<string> {
    return new Promise((resolve, reject) => {
      switch(this.language) {
        case "nodejs":
          resolve(`console.log("Hello, ${this.name}!")`);
          break;
        case "java":
          resolve(`System.out.println("Hello, ${this.name}!")`);
          break;
        case "python":
          resolve(`print("Hello, ${this.name}!")`);
          break;
        default:
          reject(Error(`Unsupported language: ${this.language}`));
      }
    })
  }
}
