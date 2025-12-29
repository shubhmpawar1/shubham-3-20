export const dummyFunctionTemplate = `
export interface {{PascalCaseFunctionName}}Input {
  // Define input properties here
}

export interface {{PascalCaseFunctionName}}Output {
  // Define output properties here
}

export const {{SnakeCaseFunctionName}} = (data: {{PascalCaseFunctionName}}Input): {{PascalCaseFunctionName}}Output => {
  return {
    // Define output properties here
  };
};
`;
