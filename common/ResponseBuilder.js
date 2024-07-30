const xlsx = require("node-xlsx");

function responseBuilder() {
    const workbook = xlsx.parse(`./ESI_RESP_BUILDER_EN_CA_WEB.xlsx`);
    const sheet = workbook[0].data;
    const headers = sheet[0];
    sampleJson = sheet.slice(1).map(row => {
        let obj = {};
        headers.forEach((header, index) => {
            obj[header] = row[index] ? row[index] : null;
        });
        return obj;
    });
    console.log("workbook ===> ", sampleJson);

    // const resultElement = sampleJson.filter((element) => element.RESPONSE_ID === 'ESI_CAN_PM_LIST_POKEMONS');
    // console.log("resultElement ===> ", resultElement);
}

module.exports = responseBuilder;
