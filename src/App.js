import { getInput } from "./inputFunctions";

class App {
  async run() {
    const INPUT_STRING = await getInput();
    const inputData = new Input(INPUT_STRING);

    if (inputData.isEmpty()) {
      Console.print("결과 : " + inputData.result);
    } else if (!inputData.isEmpty() && allValidationAndCalc(inputData) !== 0) {
      Console.print("결과 : " + inputData.result);
    } else {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }
  }
}

export default App;
