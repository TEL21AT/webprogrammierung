function testNamedExportFunction() {
    console.log("Hello World!");
}
let testNamedExportVariable = 'Hello World!';
export { testNamedExportVariable, testNamedExportFunction };